<template>
  <div class="module-container">
    <div class="about">
      <h1>{{ msg }}</h1>
      <h2>使用阿里云日志服务</h2>
      <img class="large-background" src="../assets/log-map.png">
      <h2>开发技术</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Vue.js</a></li>
        <li><a href="http://element.eleme.io/" target="_blank">ElementUI</a></li>
        <li><a href="https://webpack.github.io/" target="_blank">webpack</a></li>
        <li><a href="https://nodejs.org/" target="_blank">Node.js</a></li>
        <br>
        <li><a href="http://projects.spring.io/spring-boot/" target="_blank">Spring Boot</a></li>
        <li><a href="https://gradle.org/" target="_blank">Gradle</a></li>
      </ul>
      <h2>相关网站</h2>
      <ul>
        <li><a href="http://www.techartisan.com/" target="_blank">我的网站</a></li>
        <li><a href="https://www.aliyun.com/product/sls/?spm=5176.8142029.388261.265.23896dfaVryPOL" target="_blank">阿里云日志服务</a></li>
      </ul>

      <img src="../assets/data-logo.png">
    </div>

    <div class="about-panel">

    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Log Track 日志辅助查看系统'
    }
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

.about {
  margin-top: 60px;
  text-align: center;
}

.large-background {
  max-width: 85%;
}
</style>
