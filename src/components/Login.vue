<template>
  <div class="main">
    <div class="top-bar">
      <router-link :to="{ name: 'Dashboard' }" class="site-avatar slim">
        <svg id="font-vdata-cu" viewBox="0 0 208 42" width="120px">
          <title>videodata-cuti</title>
          <path fill="#343434" d="M11.020 31.47l-11.020-31.47h4.45l9.007 27.232h0.106l9.113-27.232h4.344l-11.232 31.47h-4.768z"></path>
          <path fill="#343434" d="M29.139 4.556v-4.556h3.709v4.556h-3.709zM32.954 8.689v22.781h-3.709v-22.781h3.709z"></path>
          <path fill="#343434" d="M55.311 31.47v-3.073h-0.106c-0.636 1.272-1.589 2.225-2.861 2.755s-2.755 0.848-4.344 0.848c-1.801 0-3.285-0.318-4.556-0.954s-2.437-1.483-3.285-2.649c-0.848-1.060-1.483-2.331-2.013-3.815-0.424-1.483-0.636-2.967-0.636-4.556s0.212-3.179 0.636-4.556 1.060-2.649 1.907-3.815c0.848-1.060 1.907-1.907 3.285-2.543 1.272-0.636 2.861-0.954 4.556-0.954 0.636 0 1.166 0.106 1.907 0.212 0.636 0.106 1.377 0.318 2.013 0.636s1.272 0.636 1.907 1.060c0.636 0.424 1.060 1.060 1.483 1.695h0.106v-11.762h3.709v31.47h-3.709zM41.854 23.417c0.318 1.060 0.742 1.907 1.272 2.755 0.53 0.742 1.272 1.377 2.225 1.907 0.848 0.424 1.907 0.742 3.179 0.742s2.331-0.212 3.179-0.742c0.848-0.53 1.589-1.166 2.119-2.013s0.954-1.695 1.166-2.755c0.212-1.060 0.424-2.119 0.424-3.179 0-1.166-0.106-2.225-0.424-3.285-0.212-1.060-0.636-1.907-1.272-2.755-0.53-0.742-1.272-1.483-2.225-1.907-0.954-0.53-2.013-0.742-3.285-0.742s-2.331 0.212-3.179 0.742c-0.848 0.53-1.589 1.166-2.119 2.013s-0.954 1.801-1.166 2.861c-0.212 1.060-0.318 2.119-0.318 3.285 0 0.954 0.212 2.013 0.424 3.073z"></path>
          <path fill="#343434" d="M80.954 29.987c-1.695 1.272-3.815 1.907-6.464 1.907-1.801 0-3.391-0.318-4.768-0.848-1.377-0.636-2.437-1.377-3.391-2.437s-1.589-2.331-2.013-3.815c-0.424-1.483-0.742-3.073-0.742-4.768s0.212-3.285 0.742-4.768c0.53-1.483 1.272-2.649 2.225-3.709s2.119-1.907 3.391-2.437c1.272-0.636 2.755-0.848 4.344-0.848 2.013 0 3.709 0.424 5.086 1.272s2.437 1.907 3.179 3.179c0.848 1.272 1.377 2.649 1.695 4.238 0.318 1.483 0.424 2.967 0.424 4.344h-17.060c0 0.954 0.106 1.907 0.318 2.861 0.212 0.848 0.742 1.695 1.272 2.331 0.636 0.742 1.377 1.272 2.225 1.695 0.954 0.424 2.013 0.636 3.179 0.636 1.589 0 2.861-0.318 3.921-1.060s1.695-1.801 2.013-3.391h3.709c-0.424 2.437-1.589 4.344-3.285 5.616zM80.106 15.364c-0.318-0.742-0.742-1.483-1.377-2.013-0.53-0.53-1.272-1.060-2.013-1.377s-1.589-0.53-2.543-0.53c-0.954 0-1.801 0.212-2.649 0.53-0.742 0.318-1.483 0.848-2.013 1.377-0.53 0.636-0.954 1.272-1.272 2.013s-0.53 1.589-0.53 2.437h13.033c-0.106-0.848-0.318-1.589-0.636-2.437z"></path>
          <path fill="#343434" d="M87.947 15.364c0.424-1.483 1.166-2.755 2.119-3.815s2.119-1.907 3.497-2.543c1.377-0.636 2.967-0.954 4.768-0.954s3.391 0.318 4.768 0.954c1.377 0.636 2.543 1.483 3.497 2.543s1.695 2.331 2.119 3.815c0.424 1.483 0.742 2.967 0.742 4.662s-0.212 3.179-0.742 4.662c-0.424 1.483-1.166 2.649-2.119 3.815-0.954 1.060-2.119 1.907-3.497 2.543s-2.967 0.954-4.768 0.954c-1.801 0-3.391-0.318-4.768-0.954s-2.543-1.483-3.497-2.543c-0.954-1.060-1.695-2.331-2.119-3.815s-0.742-2.967-0.742-4.662 0.318-3.179 0.742-4.662zM91.762 23.735c0.318 1.060 0.848 2.013 1.483 2.649 0.636 0.742 1.377 1.272 2.225 1.695s1.801 0.53 2.755 0.53c0.954 0 1.907-0.212 2.755-0.53 0.848-0.424 1.589-0.954 2.225-1.695s1.166-1.589 1.483-2.649c0.318-1.060 0.53-2.331 0.53-3.709s-0.212-2.649-0.53-3.709c-0.318-1.060-0.848-2.013-1.483-2.755s-1.377-1.272-2.225-1.695c-0.848-0.424-1.801-0.53-2.755-0.53s-1.907 0.212-2.755 0.53c-0.848 0.424-1.589 0.954-2.225 1.695s-1.166 1.589-1.483 2.755c-0.318 1.060-0.53 2.331-0.53 3.709s0.212 2.649 0.53 3.709z"></path>
          <path fill="#343434" d="M127.576 0c2.013 0 3.921 0.318 5.616 0.954s3.285 1.589 4.556 2.861c1.272 1.272 2.225 2.861 2.967 4.874 0.742 1.907 1.060 4.238 1.060 6.781 0 2.331-0.318 4.45-0.848 6.358-0.636 1.907-1.483 3.603-2.649 4.98s-2.649 2.543-4.45 3.285c-1.801 0.848-3.921 1.166-6.252 1.166h-13.563v-31.258h13.563zM127.152 25.642c0.954 0 2.013-0.212 2.861-0.53 0.954-0.318 1.801-0.848 2.543-1.589s1.272-1.695 1.801-2.967c0.424-1.166 0.636-2.649 0.636-4.45 0-1.589-0.106-2.967-0.424-4.344-0.318-1.272-0.848-2.331-1.483-3.285-0.742-0.954-1.589-1.589-2.755-2.119s-2.543-0.742-4.344-0.742h-4.98v19.815h6.146z"></path>
          <path fill="#343434" d="M145.695 15.682c0.106-1.483 0.424-2.649 1.060-3.709 0.636-0.954 1.483-1.695 2.437-2.331s2.119-0.954 3.391-1.272c1.272-0.212 2.543-0.424 3.815-0.424 1.166 0 2.331 0.106 3.497 0.212 1.166 0.212 2.225 0.53 3.179 0.954s1.801 1.166 2.331 1.907 0.954 1.907 0.954 3.285v11.868c0 1.060 0.106 2.013 0.212 2.967s0.318 1.695 0.636 2.119h-6.358c-0.106-0.318-0.212-0.742-0.318-1.060s-0.106-0.742-0.106-1.166c-0.954 1.060-2.225 1.695-3.497 2.119-1.377 0.424-2.755 0.636-4.132 0.636-1.060 0-2.119-0.106-3.073-0.424-0.954-0.212-1.801-0.636-2.437-1.272-0.742-0.53-1.272-1.272-1.695-2.119s-0.636-1.907-0.636-3.073c0-1.272 0.212-2.331 0.636-3.179s1.060-1.483 1.801-2.013c0.742-0.53 1.589-0.848 2.437-1.166 0.954-0.212 1.907-0.424 2.755-0.636 0.954-0.106 1.907-0.212 2.755-0.318 0.954-0.106 1.695-0.212 2.437-0.424s1.272-0.424 1.695-0.742 0.636-0.848 0.53-1.483c0-0.636-0.106-1.166-0.318-1.589s-0.53-0.742-0.848-0.954-0.742-0.318-1.272-0.424c-0.53-0.106-0.954-0.106-1.589-0.106-1.272 0-2.225 0.212-2.861 0.742-0.742 0.53-1.166 1.377-1.272 2.649h-6.146zM160.212 20.344c-0.212 0.212-0.636 0.424-0.954 0.53-0.424 0.106-0.848 0.212-1.272 0.318s-0.954 0.212-1.483 0.212c-0.53 0.106-0.954 0.106-1.483 0.212-0.424 0.106-0.954 0.212-1.377 0.318s-0.848 0.318-1.166 0.636c-0.318 0.212-0.636 0.53-0.848 0.954s-0.318 0.848-0.318 1.483c0 0.53 0.106 1.060 0.318 1.377 0.212 0.424 0.53 0.636 0.848 0.954s0.742 0.424 1.272 0.424 0.954 0.106 1.483 0.106c1.272 0 2.225-0.212 2.861-0.636s1.166-0.954 1.483-1.483c0.318-0.53 0.53-1.166 0.636-1.695 0.106-0.636 0.106-1.060 0.106-1.377v-2.331z"></path>
          <path fill="#343434" d="M183.841 8.689v4.238h-4.556v11.232c0 1.060 0.212 1.801 0.53 2.119s1.060 0.53 2.119 0.53c0.318 0 0.742 0 1.060 0s0.636-0.106 0.954-0.106v4.874c-0.53 0.106-1.166 0.106-1.801 0.212-0.636 0-1.272 0-1.907 0-0.954 0-1.907-0.106-2.755-0.212s-1.589-0.424-2.331-0.742c-0.636-0.424-1.166-0.954-1.589-1.589-0.424-0.742-0.53-1.589-0.53-2.755v-13.669h-3.815v-4.238h3.815v-6.781h6.252v6.781h4.556z"></path>
          <path fill="#343434" d="M186.49 15.682c0.106-1.483 0.424-2.649 1.060-3.709 0.636-0.954 1.483-1.695 2.437-2.331s2.119-0.954 3.391-1.272c1.272-0.212 2.543-0.424 3.815-0.424 1.166 0 2.331 0.106 3.497 0.212 1.166 0.212 2.225 0.53 3.179 0.954s1.801 1.166 2.331 1.907 0.954 1.907 0.954 3.285v11.868c0 1.060 0.106 2.013 0.212 2.967s0.318 1.695 0.636 2.119h-6.358c-0.106-0.318-0.212-0.742-0.318-1.060s-0.106-0.742-0.106-1.166c-0.954 1.060-2.225 1.695-3.497 2.119-1.377 0.424-2.755 0.636-4.132 0.636-1.060 0-2.119-0.106-3.073-0.424-0.954-0.212-1.801-0.636-2.437-1.272-0.742-0.53-1.272-1.272-1.695-2.119s-0.636-1.907-0.636-3.073c0-1.272 0.212-2.331 0.636-3.179s1.060-1.483 1.801-2.013c0.742-0.53 1.589-0.848 2.437-1.166 0.954-0.212 1.907-0.424 2.755-0.636 0.954-0.106 1.907-0.212 2.755-0.318 0.954-0.106 1.695-0.212 2.437-0.424s1.272-0.424 1.695-0.742 0.636-0.848 0.53-1.483c0-0.636-0.106-1.166-0.318-1.589s-0.53-0.742-0.848-0.954-0.742-0.318-1.272-0.424c-0.53-0.106-0.954-0.106-1.589-0.106-1.272 0-2.225 0.212-2.861 0.742-0.742 0.53-1.166 1.377-1.272 2.649h-6.146zM201.007 20.344c-0.212 0.212-0.636 0.424-0.954 0.53-0.424 0.106-0.848 0.212-1.272 0.318s-0.954 0.212-1.483 0.212c-0.53 0.106-0.954 0.106-1.483 0.212-0.424 0.106-0.954 0.212-1.377 0.318s-0.848 0.318-1.166 0.636c-0.318 0.212-0.636 0.53-0.848 0.954s-0.318 0.848-0.318 1.483c0 0.53 0.106 1.060 0.318 1.377 0.212 0.424 0.53 0.636 0.848 0.954s0.742 0.424 1.272 0.424 0.954 0.106 1.483 0.106c1.272 0 2.225-0.212 2.861-0.636s1.166-0.954 1.483-1.483c0.318-0.53 0.53-1.166 0.636-1.695 0.106-0.636 0.106-1.060 0.106-1.377v-2.331z"></path>
        </svg>
      </router-link>
    </div>

    <div class="login-container">
      <div class="login-panel">
        <div class="login-title">登录</div>

        <div class="login-form">
          <div class="vp-form-item">
            <input v-model="loginForm.domain" type="text" class="vp-input form-control" placeholder="域名">
          </div>

          <div class="vp-form-item vp-item-group">
            <input v-model="loginForm.mail" type="email" class="vp-input form-control" placeholder="邮箱">
            <span class="vp-group-btn">
              <button @click="generateCaptcha" class="vp-btn vp-btn-hollow vp-btn-blue trasparent">验证</button>
            </span>
          </div>

          <div class="vp-form-item" v-if="hasCaptcha">
            <div id="captcha-box"></div>
          </div>

          <div class="vp-form-item" v-if="isCaptchaPass">
            <input v-model="loginForm.code" type="text" class="vp-input form-control" maxlength="6" placeholder="验证码">
          </div>

          <div class="vp-form-item last">
            <el-button @click="onSubmitLogin" type="primary" class="login-btn" :class="[isCaptchaPass ? '' : 'disabled']" :disabled="!isCaptchaPass" >登录</el-button>
          </div>
        </div>

        <div class="cutting-line">
          有问题？
          <a href="mailto:liuwill@live.com">联系开发人员</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LoaderScript from '../utils/loadScript'
import { buildUrl } from '../utils/commonUtils'
import * as userModule from '../lib/user'

export default {
  data() {
    return {
      hasCaptcha: false,
      isCaptchaPass: false,
      loginForm: {
        mail: '',
        domain: '',
        code: ''
      }
    }
  },
  created: function () {
    // const nowTime = (new Date()).getTime()
    if (userModule.isUserLogin()) {
      this.$router.push({name: 'Dashboard'})
    }

    // if (window.localStorage.domain && (nowTime - window.localStorage.expire) / 1000 < 86400) {
    //   this.$router.push({name: 'Dashboard'})
    // } else {
    //   window.localStorage.removeItem('domain')
    //   window.localStorage.removeItem('expire')
    //   window.localStorage.removeItem('email')
    // }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    onSubmitLogin() {
      if (!this.loginForm.mail || !this.loginForm.domain || !this.loginForm.code) {
        this.$message({
          message: '请先填写完整的信息之后再试',
          type: 'warning'
        })
        return
      }

      submitLoginRequest(this.loginForm.mail, this.loginForm.code, (responseData) => {
        userModule.saveUserData({
          domain: this.loginForm.domain,
          mail: this.loginForm.mail
        })

        this.$alert('登录成功', 'LOG HELPER', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({name: 'Dashboard'})
          }
        })
      }, (msg) => {
        this.$message({
          message: msg,
          type: 'warning'
        })
      })
    },
    generateCaptcha() {
      if (!this.loginForm.mail || !this.loginForm.domain) {
        this.$message({
          message: '请先填写域名和邮箱之后再试',
          type: 'warning'
        })
        return
      }

      if (document.querySelector('#captcha-box')) {
        document.querySelector('#captcha-box').innerHTML = ''
      }
      this.hasCaptcha = false
      this.isCaptchaPass = false

      // const hostUrl = this.loginForm.domain + '/api/token/captcha'
      axios.defaults.withCredentials = true
      axios.defaults.baseURL = buildUrl(this.loginForm.domain)

      requestCaptcha(this.loginForm.mail, () => {
        this.hasCaptcha = true
      }, () => {
        this.isCaptchaPass = true
        this.$message({
          message: '请查看邮件获取登录验证码',
          type: 'success'
        })
      }, (msg) => {
        this.$message({
          message: msg,
          type: 'warning'
        })
      })
    },
    onSubmit() {
      console.log('submit!')
    }
  }
}

function submitLoginRequest (email, code, onSuccess, onFail) {
  axios.post('/api/token/login', {
    mail: email,
    code: code
  }).then((response) => {
    if (response.data.status === false) {
      typeof onFail === 'function' && onFail(response.data.msg)
      return
    }

    typeof onSuccess === 'function' && onSuccess(response.data)
    console.log(response)
  }).catch((error) => {
    typeof onFail === 'function' && onFail('请求失败')
    console.log(error)
  })
}

function requestCaptcha (email, onLoad, onSuccess, onFail) {
  axios.get('/api/token/captcha', {
    params: {
      mail: email
    }
  }).then((response) => {
    if (response.data.status === false) {
      typeof onFail === 'function' && onFail(response.data.msg)
      return
    }

    loadCaptcha(response.data, () => {
      typeof onLoad === 'function' && onLoad()
    }, () => {
      axios.post('/api/token/send', {
        mail: email
      }).then((response) => {
        if (response.data.status === false) {
          typeof onFail === 'function' && onFail(response.data.msg)
          return
        }
        typeof onSuccess === 'function' && onSuccess()
      }).catch((error) => {
        typeof onFail === 'function' && onFail('请求失败')
        console.log(error)
      })
    }, (msg) => {
      typeof onFail === 'function' && onFail(msg)
    })
    console.log(response)
  }).catch((error) => {
    typeof onFail === 'function' && onFail('请求失败')
    console.log(error)
  })
}

function loadCaptcha (responseData, onLoad, onSuccess, onFail) {
  const installGeetest = function () {
    initGeetest({
      // 以下配置参数来自服务端 SDK
      gt: data.gt,
      challenge: data.challenge,
      offline: !data.success,
      new_captcha: data.new_captcha,
      width: '100%'
    }, function (captchaObj) {
      captchaObj.appendTo('#captcha-box')
      typeof onLoad === 'function' && onLoad()
      // 这里可以调用验证实例 captchaObj 的实例方法
      captchaObj.onSuccess(function () {
        var result = captchaObj.getValidate()

        axios.get('/api/token/verify', {
          params: {
            geetest_challenge: result.geetest_challenge,
            geetest_validate: result.geetest_validate,
            geetest_seccode: result.geetest_seccode
          }
        }).then((response) => {
          console.log(response)
          if (response.data.status !== 'success') {
            typeof onFail === 'function' && onFail('验证失败，请重试')
            return
          }
          typeof onSuccess === 'function' && onSuccess()
        }).catch((error) => {
          typeof onFail === 'function' && onFail('验证失败，请重试')
          console.log(error)
        })
      })
    })
  }

  const data = responseData
  if (typeof initGeetest === 'undefined') {
    LoaderScript.load('//static.geetest.com/static/tools/gt.js',
      () => {
        installGeetest()
      }, () => {
        // this.$message({ showClose: true, message: '无法加载视频播放器', type: 'warning' })
      })
  } else {
    installGeetest()
  }
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

  border-bottom: 1px solid #EBEDED;
  padding-bottom: 10px;
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

.site-avatar.slim {
  background: transparent;
}

.menu-nav {
  display: inline-block;
}

.menu-status {}

.nav-user-box {}

.login-container {
  margin: auto;
}

.login-panel {
  margin: auto;
  max-width: 260px;
  margin-top: 50px;

  text-align: center;
}

.login-title {
  font-size: 22px;
  color: #31393F;
  display: inline-block;
  margin-bottom: 30px;
}

.login-panel .login-btn {
  width: 260px;
  height: 42px;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  line-height: 42px;
  margin-top: 10px;
  color: #fff;
  margin-bottom: 20px;
  padding: 0;
  border: 0px;
  cursor: pointer;

  background-color: #4488FF;
  transition: all .5s;
}

.login-btn:hover{
  background-color: #3077f3;
  letter-spacing: 1px;
}

.login-btn.disabled{
  cursor: not-allowed;
  background-color: rgba(68, 136, 255, .5);
}

.vp-form-item {
  width: 260px;
  height: 42px;
  color: rgb(104, 114, 140);
  position: relative;
  margin: 10px auto 16px;
}

.vp-form-item.last {
  margin-bottom: 30px;
}

.vp-input {
  width: 260px;
  border-radius: 3px;
  padding: 12px 10px;
  outline: none;
  font-size: 14px;
  border: 1px solid #EBEDED;
  color: rgba(104, 114, 140, 1);

  box-sizing: border-box;
}

.vp-input:focus {
  border: 1px solid rgba(68, 136, 255, 0.6) !important;
  box-shadow: 0 0 3px 0 rgba(68, 136, 255, 0.49);
  outline: none;
}
.vp-form-item.vp-item-group {
  display: table;
}

.vp-form-item.vp-item-group .vp-input {
  display: table-cell;

  position: relative;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.vp-form-item.vp-item-group .form-control:first-child{
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vp-form-item.vp-item-group .vp-group-btn>button{
  height: 43px;
}

.vp-form-item.vp-item-group .vp-group-btn{
  display: table-cell;
  position: relative;
  font-size: 0;
  white-space: nowrap;
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}
.vp-form-item.vp-item-group .vp-group-btn:last-child>button{
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.cutting-line {
  font-size: 12px;
  border-top: 1px solid #e3e5e6;
  padding-top: 20px;
  width: 260px;
  margin-bottom: 170px;
}

.cutting-line a {
  color: rgb(68, 136, 255);
  display: inline-block;
  margin-bottom: 50px;
}

</style>
