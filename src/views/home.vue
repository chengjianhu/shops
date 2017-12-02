<template>

      <div class="page">
  
        <!-- banner开始 -->
        <div class="home-banner">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <router-link to="#">
                <img src="../images/banner01.jpg" alt="">
              </router-link>
            </mt-swipe-item>
            <mt-swipe-item>
              <router-link to="#">
                <img src="../images/banner02.jpg" alt="">
              </router-link>
            </mt-swipe-item>
            <mt-swipe-item>
              <router-link to="#">
                <img src="../images/banner03.jpg" alt="">
              </router-link>
            </mt-swipe-item>
            <mt-swipe-item>
              <router-link to="#">
                <img src="../images/banner04.jpg" alt="">
              </router-link>
            </mt-swipe-item>
          </mt-swipe>
        </div>
  
        <!-- 具体种类 -->
        <div class="kinds">
          <ul class="kinds-ul">
            <li v-for="kind in kinds" :key="kind.id">
              <router-link to="#">
                <div>
                  <img :src="kind.src" alt="">
                </div>
                <p>{{kind.name}}</p>
              </router-link>
            </li>
  
          </ul>
        </div>
  
        <!--热卖  -->
        <div class="hot">
          <div class="hot-title">
            <img src="../images/hot.png" alt="">
          </div>
          <div class="hot-sell">
            <div class="mxgoods" v-for="item in mxgoods" :key="item.id">
              <router-link to="#">
                <dl>
                  <dt>
                    <span>
                        <img :src="item.goodsImg" alt="">
                    </span>
                    <dd>{{item.goodsName}}</dd>
                    <dd class="pice">￥{{item.goodsPrice}}</dd>
                    </dt>
                </dl>
              </router-link>
            </div>
  
          </div>
        </div>
  
        <div class="hot">
          <div class="hot-title">
            <img src="../images/bestnew.png" alt="">
          </div>
          <div class="hot-sell">
            <div class="mxgoods" v-for="item in mxgoods" :key="item.id">
              <router-link to="#">
                <dl>
                  <dt>
                    <span>
                        <img :src="item.goodsImg" alt="">
                    </span>
                    <dd>{{item.goodsName}}</dd>
                    <dd class="pice">￥{{item.goodsPrice}}</dd>
                    </dt>
                </dl>
              </router-link>
            </div>
  
          </div>
        </div>
  
      </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: 'home',
    data() {
      return {
        kinds: [
          { id: '1', name: '超市', src: require('../images/kinds01.png') },
          { id: '2', name: '全球购', src: require('../images/kinds02.png') },
          { id: '3', name: '服饰', src: require('../images/kinds03.png') },
          { id: '4', name: '生鲜', src: require('../images/kinds04.png') },
          { id: '5', name: '排行榜', src: require('../images/kinds05.png') },
          { id: '6', name: '充值', src: require('../images/kinds06.png') },
          { id: '7', name: '领豆豆', src: require('../images/kinds07.png') },
          { id: '8', name: '赚钱', src: require('../images/kinds01.png') },
          { id: '9', name: '智能', src: require('../images/kinds02.png') },
          { id: '10', name: '二优品', src: require('../images/kinds03.png') }
        ],
        mxgoods: {}
      }
    },
    components: {},
    created: function() {
      this.getData()
    },
  
    methods: {
      // 获取数据
      getData() {
        this.$http.get('http://localhost:8080/mock/mxgoods.json').then(
          data => {
            if(data.status == 200) {
              let mxdata = data.body.star.group
              const mxgood = mxdata[0].concat(mxdata[1])
              this.mxgoods = mxgood
              console.log(data.status)
            }

          },
          error => {}
        )
      }
    }
  }
</script>

<style scoped lang="scss">
  .page {
    width: 100%;
    padding-top: 40px;
    margin-bottom: 70px;
    .home-banner {
      width: 100%;
      height: 130px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .kinds {
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      .kinds-ul {
        margin: 0;
        padding: 0;
        width: 100%;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        li {
          width: 20%;
          margin: 0;
          padding: 0;
          list-style: none;
          margin: 1rem 0 0 0;
          a {
            color: #000;
            text-decoration: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          img {
            width: 70%;
          }
          p {
            margin: 0;
            padding: 0;
            color: #000;
          }
        }
      }
    }
    .hot {
      width: 100%;
      margin: 16px 0 0 0;
      .hot-title {
        text-align: center;
        img {
          width: 105px;
          height: auto;
        }
      }
      .hot-sell {
        width: 100%;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        .mxgoods {
          width: 33%;
  
          a {
            text-decoration: none;
            color: #000;
          }
          dl {
            width: 100%;
            margin: 16px 0 0 0;
            dt {
              span {
                text-align: center;
                display: inline-block;
                img {
                  width: 79px;
                  height: auto;
                }
              }
              dd {
                width: 100%;
                padding: 0 14px;
                box-sizing: border-box;
                margin: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 16px;
              }
              .pice {
                color: red;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
</style>
