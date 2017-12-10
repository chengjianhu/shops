<template>
  <div class="page">
    <div class="kinds">
  
      <ul class="kinds-ul">
        <li v-for="(item, index) of kinds" :class="{active:selected==index}" @click="change(index)">
          <span>
                  {{item.title}}
                </span>
        </li>
      </ul>
    </div>
  
    <div class="kinds-list">
      <div v-for="(item, index) of kinds" :class="{active:selected==index, off:true}">
        <h2>
          <router-link to="#">
            <span> {{item.goods[0].title}}</span>
            <span>更多></span>
  
          </router-link>
        </h2>
  
        <div class="goods">
          <router-link to="#">
            <dl>
              <dt>
                <img src="https://cdn.bestkeep.cn/goods/img/goods_1468488891880.jpg" alt="">
              </dt>
              <dd>{{item.title}}</dd>
            </dl>
  
          </router-link>
  

  

        </div>

      <!-- <list-good></list-good> -->
  
      </div>
  
  
    </div>
  
  </div>
</template>

<script type="text/ecmascript-6">
import listGood from "../views/commodity/Listofgoods"
  export default {
    data() {
      return {
        selected: 0, //当前位置
        kinds: {},
        goods:{}
      }
    },
    components: {
      listGood
    },
    created: function() {
      this.getData()
    },
    methods: {
      change(index) {
        this.selected = index
      },
      // 获取数据
      getData() {
        this.$http.post('https://www.easy-mock.com/mock/5a1d65708e6ddb24964cb94b/example/shop').then(
          data => {
            if (data.status == 200) {
              const kind = data.body.kinds
              this.kinds = kind
              // console.log(kind)
            }
          },
          error => {}
        )
      }
    }
  }
</script>

<style scoped lang="scss">
  ul,
  li,
  h1,
  h2,
  dt,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  .page {
    padding-top: 40px;
    .kinds {
      width: 25%;
      float: left;
      height: 100%;
      position: fixed;
      border-right: 1px solid #eee;
      .kinds-ul {
        li {
          line-height: 40px;
          overflow: hidden;
          span {
            font-size: 13px;
            line-height: 22px;
          }
        }
      }
    }
    .kinds-list {
      width: 75%;
      float: right;
      height: 100%;
      .goods {
        width: 100%;
        overflow: hidden;
        a {
          display: inline-block;
          width: 33%;
          float: left;
          dl {
            dt {
              img {
                width: 100%;
                height: auto;
              }
            }
            dd {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
  .off {
    display: none;
  }
  .active {
    display: block;
  }
  
  li.active span {
    width: 68px;
    line-height: 22px;
    display: inline-block;
    color: #fff;
    background: #00ba9c;
    border-radius: 11px;
    font-size: 13px;
  }
</style>
