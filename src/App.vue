<template>
  <div id="app">
    <com-header></com-header>
  
    <router-view></router-view>
  
    <!-- 底部公共脚步 -->
    <com-footer></com-footer>
  
  </div>
</template>

<script>
  import comFooter from '@/components/comFooter'
  import comHeader from '@/components/comHeader'
  
  export default {
    name: 'app',
    computed: {},
    components: {
      comFooter,
      comHeader
    },

  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
