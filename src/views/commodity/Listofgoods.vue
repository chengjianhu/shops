<template>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        kinds: {}
      }
    },
    created: function() {
      this.getData()
    },
    components: {},
    methods: {
      // 获取数据
      getData() {
        this.$http.post('https://www.easy-mock.com/mock/5a1d65708e6ddb24964cb94b/example/shop').then(
          data => {
            if (data.status == 200) {
              const kind = data.body.kinds
              this.kinds = kind
              console.log(kind)
            }
          },
          error => {}
        )
      }
    }
  }
</script>

<style scoped lang="scss">
  
</style>
