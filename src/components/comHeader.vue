<template>
  <header class="mint-header">
  
  	<div class="logo">
  		<router-link to="/">
  			<img src="../images/logo.png" alt="">
  		</router-link>
  	</div>
  
  
  	<div class="login">
  		<router-link to="/">
  			登录
  		</router-link>
  	</div>
  
  
  	<div class="search">
  		<input type="text" placeholder="搜索商品、品牌">
  	</div>
  
  
  </header>
</template>

<script>
  export default {
    name: 'comHeader',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .mint-header {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 888;
    background: #fff;
		overflow: hidden;
    border-bottom: 1px solid #ccc;
  }
  
  .logo {
    width: 50px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 8px;
    a {
      width: 100%;
      height: 100%;
      text-align: center;
  
      display: block;
      img {
        width: 24px;
        height: auto;
      }
    }
  }
  
  .login {
    position: absolute;
    right: 10px;
    top: 0;
    box-sizing: border-box;
    line-height: 40px;
    a {
      text-decoration: none;
      color: #00ba9c;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
  }
  
  .search {
    width: 100%;
    height: 40px;
    background: #fff;
    padding-left: 25px;
    box-sizing: border-box;
    padding: 0 50px;
    box-sizing: border-box;
    input {
      margin-top: 8px;
      width: 100%;
      line-height: 24px;
      border-radius: 12px;
      outline: none;
      border: none;
      background: #eee;
      color: #f2f2f2;
      padding-left: 40px;
      box-sizing: border-box;
    }
  }
</style>