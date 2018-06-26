<template>
  <div class="module-container log-utils-container">
    <div class="general-inner-content log-module-content">
      <div class="module-breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>生成Site日志</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="手动输入" name="input">
          <div class="log-tab-panel">
            <div class="tab-content-row">
              <el-input
                type="text"
                placeholder="指定域名，留空则不指定"
                v-model="filterDomain">
              </el-input>
              <div style="margin: 16px 0;"></div>
              <el-input
                type="text"
                placeholder="IP地址：127.0.0.1"
                v-model="commandIp">
              </el-input>
              <div style="margin: 16px 0;"></div>
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 10}"
                placeholder="请按行输入curl命令"
                v-model="commandLine">
              </el-input>
            </div>

            <div class="tab-content-row row__with_border text-align-right">
              <el-button type="primary" size="small" @click="onHandleGenerateLog">生成日志</el-button>
              <el-button type="danger" size="small" id="command-export-btn" :disabled="!commandExportEnable">导出日志</el-button>
            </div>

            <div class="tab-content-row">
              <el-alert
                title="保存的Site日志："
                :type="resultType"
                :description="parsedLogText"
                :closable="false">
              </el-alert>
            </div>

            <div class="tab-content-row" v-if="logDatas.length > 0">
              <el-alert
                v-for="(item, index) in logDatas"
                title=""
                :key="index"
                class="row-line-result"
                type="info"
                :closable="false"
                :description="item">
              </el-alert>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="批量上传" name="upload">
          <div class="log-tab-panel">
            <div class="tab-content-row text-align-center">
              <el-upload
                class="upload-demo"
                drag
                action=""
                :before-upload="onHandleFileUpload"
                :multiple="false">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传纯文本文件</div>
              </el-upload>
            </div>

            <div class="tab-content-row">
              <el-input
                type="text"
                placeholder="指定域名，留空则不指定"
                v-model="batchFilterDomain">
              </el-input>
              <div style="margin: 16px 0;"></div>
              <el-input
                type="text"
                placeholder="IP地址：127.0.0.1"
                v-model="batchIp">
              </el-input>
              <div style="margin: 16px 0;"></div>
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 10}"
                placeholder="请选择文件"
                readonly
                v-model="batchLine">
              </el-input>
            </div>

            <div class="tab-content-row row__with_border text-align-right">
              <el-button type="primary" size="small" @click="onHandleBatchGenerateLog">生成日志</el-button>
              <el-button type="danger" size="small" id="batch-export-btn" :disabled="!batchExportEnable">导出日志</el-button>
            </div>

            <div class="tab-content-row">
              <el-alert
                title="文件加载结果"
                :type="batchResultType"
                :description="batchParsedLogText"
                :closable="false">
              </el-alert>
            </div>

            <div class="tab-content-row" v-if="batchLogDatas.length > 0">
              <el-alert
                v-for="(item, index) in batchLogDatas"
                title=""
                :key="index"
                class="row-line-result"
                type="info"
                :closable="false"
                :description="item">
              </el-alert>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { generateLogFromCurl, requestParser } from 'curl-log-generator'
import logRule from '../config/logRule'

export default {
  name: 'about',
  data () {
    return {
      msg: 'Site Track 日志辅助查看系统',
      activeName: 'input',

      commandExportEnable: false,
      filterDomain: '',
      commandLine: '',
      commandIp: '',
      resultType: 'success',
      parsedLogText: '请先输入命令进行查询',
      logDatas: [],

      batchExportEnable: false,
      batchFilterDomain: '',
      batchLine: '',
      batchIp: '',
      batchResultType: 'success',
      batchParsedLogText: '请先上传文件进行查询',
      batchLogDatas: []
    }
  },
  created () {
    this.resultType = 'success'
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    onHandleFileUpload(selectedFile) {
      console.log(selectedFile)
      if (selectedFile.type) {
        if (selectedFile.type && selectedFile.type.startsWith('image')) {
          this.$message({
            message: '抱歉，不能上传图片',
            type: 'error'
          })
          return
        }

        if (selectedFile.type && selectedFile.type.startsWith('application')) {
          this.$message({
            message: '抱歉，不能上传应用程序',
            type: 'error'
          })
          return
        }
      }

      if (selectedFile.size > 256000) {
        this.$message({
          message: '最大支持256k的文件',
          type: 'error'
        })
        return
      }

      const self = this
      // 这里是核心！！！读取操作就是由它完成的。
      var reader = new FileReader()
      // 读取文件的内容
      reader.readAsText(selectedFile)
      reader.onload = function () {
        // 当读取完成之后会回调这个函数，然后此时文件的内容存储到了result中。直接操作即可。
        // console.log(this.result)
        self.batchLine = this.result
      }
      return false
    },
    onHandleBatchGenerateLog() {
      this.batchExportEnable = false
      this.batchResultType = 'success'
      this.batchLogDatas = []

      if (!this.batchLine || !this.batchLine.startsWith('curl ')) {
        this.$message({
          message: '请上传包含curl命令的文件',
          type: 'warning'
        })
        this.batchResultType = 'warning'
        this.batchParsedLogText = '请上传包含curl命令的文件'
        return
      }

      const batchIp = this.batchIp ? this.batchIp : '127.0.0.1'
      parseLogRequestLines(batchIp, this.batchLine, this.batchFilterDomain, (logLines) => {
        this.batchLogDatas = logLines
        this.batchParsedLogText = `总共有${this.batchLine.split('\n').length}条请求，有效日志${logLines.length}条`
        this.batchExportEnable = true

        exportLogFile('batch', logLines)
      }, (msg) => {
        // this.$message({
        //   message: '解析失败，请检查您的命令',
        //   type: 'warning'
        // })
        this.batchResultType = 'error'
        this.batchParsedLogText = msg
      })
    },
    onHandleGenerateLog() {
      this.commandExportEnable = false
      this.resultType = 'success'
      this.logDatas = []

      if (!this.commandLine || !this.commandLine.startsWith('curl ')) {
        this.$message({
          message: '请输入正确的Curl命令',
          type: 'warning'
        })
        this.resultType = 'warning'
        this.parsedLogText = '请输入正确的Curl命令'
        return
      }

      const commandIp = this.commandIp ? this.commandIp : '127.0.0.1'
      parseLogRequestLines(commandIp, this.commandLine, this.filterDomain, (logLines) => {
        this.logDatas = logLines
        this.parsedLogText = `总共有${this.commandLine.split('\n').length}条请求，有效日志${logLines.length}条`

        this.commandExportEnable = true
        exportLogFile('command', logLines)
      }, (msg) => {
        // this.$message({
        //   message: '解析失败，请检查您的命令',
        //   type: 'warning'
        // })
        this.resultType = 'error'
        this.parsedLogText = msg
      })
    }
  }
}

function exportLogFile (elementType, logList) {
  const currentTime = (new Date()).toISOString()

  const content = logList.join('\n')
  var blob = new Blob([content], {type: 'text/plain;charset=utf-8'})
  var downloadLink = document.createElement('a')
  downloadLink.href = window.URL.createObjectURL(blob)
  downloadLink.download = `export-${elementType}-log-${currentTime}.txt`
  downloadLink.textContent = '导出日志'

  document.querySelector(`#${elementType}-export-btn`).innerHTML = ''
  document.querySelector(`#${elementType}-export-btn`).appendChild(downloadLink)
}

function parseLogRequestLines (commandIp, lineStr, filterDomain, onSuccess, onFail) {
  commandIp = commandIp || '127.0.0.1'
  try {
    let commandLines = []
    if (lineStr.indexOf('\n') > 0) {
      commandLines = commandLines.concat(lineStr.split('\n'))
    } else {
      commandLines.push(lineStr)
    }

    const logLines = []
    for (let line of commandLines) {
      line = line.trim()
      if (!line) {
        continue
      }

      if (filterDomain && filterDomain.length) {
        const curlRequest = requestParser.generateRequest(line)
        if (curlRequest.path.indexOf(filterDomain) < 0) {
          continue
        }
      }
      const logStr = generateLogFromCurl(commandIp, line, logRule)
      logLines.push(logStr)
    }

    typeof onSuccess === 'function' && onSuccess(logLines)
  } catch (err) {
    typeof onFail === 'function' && onFail('解析失败，请检查您的命令')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.large-background {
  max-width: 85%;
}

.log-module-content {
  padding: 24px;
}

.tab-content-row {
  margin-bottom: 16px;
}

.tab-content-row.row__with_border {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ebebeb;
}

.row-line-result+.row-line-result {
  margin-top: 6px;
}

.el-button>a {
  color: #fff;
}
</style>
