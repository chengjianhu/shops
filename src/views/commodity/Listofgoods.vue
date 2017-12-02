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
        this.$http.get('http://localhost:8080/mock/shop.json').then(
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
