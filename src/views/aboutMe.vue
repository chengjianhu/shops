<template>
  <div class="login-main">
  
    <div class="phone-pwd">
      <div class="phone">
        <input type="text" placeholder="请输入账号">
      </div>
  
      <div class="pwd">
        <input type="text" placeholder="请输入密码">
      </div>
  

      <router-link class="login-btn" to="#">登录</router-link>

      <p class="register-back">
        <router-link to="#">注册账号</router-link>
        <router-link to="#">忘记密码？</router-link>
      </p>
  
      <div class="other-login">
        <ul class="other-login-mian">
          <li>
            <router-link to="#">QQ</router-link>
          </li>
          <li>
            <router-link to="#">微博</router-link>
          </li>
        </ul>
      </div>

    </div>
  
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    components: {}
  }
</script>

<style scoped lang="scss">
  a {
    text-decoration: none;
    color: #000;
    -webkit-tap-highlight-color: rgba(0,0, 0, 0);
  }
  li {
    list-style: none;
  }
  .login-main {
    padding-top: 40px;
  }
</style>
