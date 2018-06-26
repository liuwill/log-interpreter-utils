<template>
<div class="module-container log-container">
  <div class="search-bar-row">
    <div class="module-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>查询日志</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-form :inline="true" :model="ruleForm" class="search-form">
      <el-form-item label="关键字">
        <el-input v-model="ruleForm.keyword" placeholder="关键字"></el-input>
      </el-form-item>
      <el-form-item label="时间范围" required>
        <el-date-picker
          v-model="ruleForm.searchTime"
          type="datetimerange"
          :picker-options="pickerOptions2"
          placeholder="选择时间范围"
          align="right">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button class="btn-zen search-btn submit-button" type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>

  <div class="content-container"
    v-if="!isLoadFinish"
    element-loading-text="拼命加载中"
    v-loading="logDataLoading">
    <span class="el-icon-information no-info-requested"> 请输入关键字或者时间范围</span>
  </div>

  <div class="el-requested-information" v-if="isLoadFinish">
    <div class="search-result-table">
      <el-table
        :data="logDataList"
        v-loading="logDataLoading"
        border
        element-loading-text="拼命加载中"
        style="width: 100%"
        max-height="450">

        <el-table-column
          fixed
          prop="created"
          label="创建时间"
          width="210">
        </el-table-column>
        <el-table-column
          prop="version"
          label="版本"
          width="90">
        </el-table-column>
        <el-table-column
          prop="ip"
          label="IP地址"
          width="150">
        </el-table-column>
        <el-table-column
          prop="client"
          label="客户端类型"
          width="220">
        </el-table-column>
        <el-table-column
          prop="ua"
          label="浏览器"
          width="300">
        </el-table-column>
        <el-table-column
          prop="refer"
          label="来源"
          width="220">
        </el-table-column>
        <el-table-column
          prop="video"
          label="视频"
          width="240">
        </el-table-column>
        <el-table-column
          prop="program"
          label="栏目"
          width="240">
        </el-table-column>
        <el-table-column
          prop="ad"
          label="广告"
          width="240">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="查看详情"
          width="100">

          <template>
            <div>
              <el-button size="mini" type="text" @click="openDialog" class="el-more-info-btn" icon="information">详情</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="prev, pager, next, total, jumper"
      class="el-info-pagination"
      :total="logTotal">
    </el-pagination>
  </div>

  <el-dialog class="dialog-table" :visible.sync="dialogTableVisible" :title="dialogData.title">
    <el-table :data="dialogData">
      <el-table-column property="info" label="Info" width="150"></el-table-column>
      <el-table-column property="description" label="Description"></el-table-column>
    </el-table>
  </el-dialog>
</div>
</template>

<script>
import axios from 'axios'
import * as userModule from '../lib/user'
import { buildUrl } from '../utils/commonUtils'

export default {
  data () {
    return {
      isLoadFinish: false,
      logDataLoading: false,
      logDataList: [],
      dialogData: [],
      ruleForm: {
        keyword: '',
        searchTime: ''
      },
      currentPage: 1,
      logTotal: 0,
      pageData: {

      },
      dialogTableVisible: false,
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  methods: {
    openDialog () {
      this.dialogTableVisible = true
      console.log('DIALOG', this.ruleForm.searchTime)
      const dialogDataObj = this.logDataList[0]
      const dialogDataArr = []
      for (var key in dialogDataObj) { dialogDataArr.push({ info: key, description: dialogDataObj[key] }) }
      this.dialogData = dialogDataArr
      console.log(dialogDataArr)
    },
    handleCurrentChange (index) {
      const userData = userModule.getUserData()
      let defaultDomain = 'http://demo-server:8888/'
      if (userData && userData.hostDomain) {
        defaultDomain = buildUrl(userData.hostDomain)
      }

      axios.defaults.withCredentials = true
      axios.defaults.baseURL = defaultDomain

      let from = 0
      let to = 0
      if (this.ruleForm.searchTime && this.ruleForm.searchTime.length) {
        from = this.ruleForm.searchTime[0].getTime() / 1000
        to = this.ruleForm.searchTime[1].getTime() / 1000
      }

      const queryParam = {
        from, to, index
      }

      if (this.ruleForm.keyword) {
        queryParam['keyword'] = this.ruleForm.keyword.trim()
      }

      this.logDataLoading = true
      requestGetLogs(queryParam, (response) => {
        this.logDataLoading = false
        if (!response.data.data || response.data.data.progress !== 'Complete') {
          this.logDataList = []
          this.$message({
            message: '加载超时，请稍后再试',
            type: 'warning'
          })
          return
        } else if (!response.data.data.logs || !response.data.data.logs.length) {
          this.logDataList = []
          this.$message({
            message: '没有找到符合条件日志',
            type: 'warning'
          })
          return
        }

        this.logDataList = response.data.data.logs
        this.isLoadFinish = true
      }, (message) => {
        this.logDataList = []
        this.logDataLoading = false
        this.$message({
          message: message,
          type: 'error'
        })
      })
    },
    handleSizeChange (key, keyPath) {
      console.log(key, keyPath)
    },
    onSubmit () {
      if (!userModule.isUserLogin()) {
        this.$alert('请先登录之后再试', '提示', {
          confirmButtonText: '确定'
        })
        return
      }

      const userData = userModule.getUserData()
      let defaultDomain = 'http://demo-server:8888/'
      if (userData && userData.hostDomain) {
        defaultDomain = userData.hostDomain
      }

      axios.defaults.withCredentials = true
      axios.defaults.baseURL = defaultDomain

      let from = 0
      let to = 0
      if (this.ruleForm.searchTime && this.ruleForm.searchTime.length) {
        from = this.ruleForm.searchTime[0].getTime() / 1000
        to = this.ruleForm.searchTime[1].getTime() / 1000
      }

      const queryParam = {
        from, to
      }

      if (this.ruleForm.keyword) {
        queryParam['keyword'] = this.ruleForm.keyword.trim()
      }

      this.logDataLoading = true
      requestGetLogs(queryParam, (response) => {
        this.logDataLoading = false
        if (!response.data.data || response.data.data.progress !== 'Complete') {
          this.logDataList = []
          this.$message({
            message: '加载超时，请稍后再试',
            type: 'warning'
          })
          return
        } else if (!response.data.data.logs || !response.data.data.logs.length) {
          this.logDataList = []
          this.$message({
            message: '没有找到符合条件日志',
            type: 'warning'
          })
          return
        }

        this.logDataList = response.data.data.logs
        this.isLoadFinish = true
      }, (message) => {
        this.logDataList = []
        this.logDataLoading = false
        this.$message({
          message: message,
          type: 'error'
        })
      })

      requestGetHistory(queryParam, (response) => {
        if (response.data.data || response.data.data.progress === 'Complete') {
          this.logTotal = response.data.data.count
        }
      }, () => {

      })
      console.log('submit!', this.ruleForm.searchTime)
    }
  }
}

function requestGetLogs (queryParam, onSuccess, onFail) {
  axios.get('/api/log/get_logs.json', {
    params: Object.assign({}, queryParam)
  }).then((response) => {
    if (response.data.status === false) {
      typeof onFail === 'function' && onFail(response.data.msg)
      return
    }
    typeof onSuccess === 'function' && onSuccess(response)
    console.log(response)
  }).catch((error) => {
    typeof onFail === 'function' && onFail('请求失败')
    console.log(error)
  })
}

function requestGetHistory (queryParam, onSuccess, onFail) {
  axios.get('/api/log/get_history.json', {
    params: Object.assign({}, queryParam)
  }).then((response) => {
    if (response.data.status === false) {
      typeof onFail === 'function' && onFail(response.data.msg)
      return
    }
    typeof onSuccess === 'function' && onSuccess(response)
    console.log(response)
  }).catch((error) => {
    typeof onFail === 'function' && onFail('请求失败')
    console.log(error)
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 20px;
  max-width: 912px;
  margin: auto;
}

@media (min-width: 768px) {
  .main {
    padding: auto;
    margin: auto;
  }
}

.top-bar {
  /*text-align: left;
  height: 60px;
  line-height: 60px;
  */
  display: flex;
  width: 100%;
  height: 100%;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  transition: all .3s;
}
.menu-container {
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.site-avatar {
  padding: 10px 16px;
  height: 32px;
  background: #343434;
}
.site-avatar>svg {
  margin-top: 8px;
}
.menu-nav {
  display: inline-block;
}
.menu-status {
}
.nav-user-box{

}
.body-container {
  margin-top: 12px;
  background-color: #fff;
  border: 1px solid #edf0f2;
  border-radius: 2px;
  -webkit-box-shadow: 0 2px 6px rgba(0,0,0,0.07);
  box-shadow: 0 2px 6px rgba(0,0,0,0.07);
}

.main-content {
  min-height: 1020px;
  background-color: transparent;
}

.search-bar-row {
  padding: 24px;
}

.content-container {
  border: 1px solid #ebeef5;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  color: #303133;
  border-radius: 4px;
  max-width:80%;
  min-height: 200px;
  margin: auto;
  line-height: 200px;
  text-align: center;
  font-size: 16px;
  padding: 20px auto;
}

.el-menu-btn:hover {
  border-bottom: 5px black solid;
  transition: all 0s;
}

.el-dropdown-menu-item:hover {
  background-color: black;
  color: white;
  transition: .3s;
  box-shadow: 1px 0 1px #676767;
}

.el-dropdown-menu-item:active {
  background: #efefef;
  border-right: 2px #efefef solid;
  box-shadow: 0 0 0 #000000;
  transition: all 0s;
}

.el-menu-dropdown-btn:hover {
  height: 55px;
  border-bottom: 5px solid black;
  transition: .3s opacity;
}

.el-menu-dropdown-btn:active {
  height: 55px;
  border-bottom: 5px solid black;
}

/* .no-info-requested{
  border: white 2px solid;
  padding: 8% 30%;
  margin: 0 4%;
  border-radius: 20px;
} */

.submit-button:active {
  background-color: #f7f9fa;
}

/*requested Information CSS*/

.search-result-table {
  margin: 0 2.5%;
  font-family: Roboto;
}

.el-more-info-btn {
  color: #3574e4;
  background-color: white;
  border: 1px #3574e4 solid;
  padding: 7px 6px 5px 6px;
  margin-right: 8px;
}

.el-more-info-btn:hover {
  color: white;
  background-color: #3574e4;
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
  -ms-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.el-more-info-btn:active {
  color: #ffffff;
  background-color: #43ddff;
  border: 1px #43ddff solid;
}

.dialog-table{
  font-family: Roboto;
}

.el-info-pagination {
  margin: 0 2.5%;
  padding: 10px 0;
}

.search-form .el-input__inner {
  color: #76858c;
  border: 1px solid #edf0f2;
  border-radius: 3px;
}
</style>
