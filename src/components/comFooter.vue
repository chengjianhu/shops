<template>
  <div class="com-footer">
    <ul>
      <li>
        <router-link :to="{name:'home'}" exact>
  
          <div class="pics">
            <i class="iconfont icon-home"></i>
          </div>
          <p>首页</p>
        </router-link>
      </li>
  
      <li>
        <router-link :to="{name:'commodity'}" exact>
          <div class="pics">
            <i class="iconfont icon-kinds"></i>
          </div>
          <p>商品</p>
        </router-link>
      </li>
  
      <li>
        <router-link :to="{name:'shopCar'}" exact>
          <div class="pics">
            <i class="iconfont icon-cart-copy"></i>
          </div>
          <p>购物车</p>
        </router-link>
      </li>
  
      <li>
        <router-link :to="{name:'aboutMe'}" exact>
          <div class="pics">
            <i class="iconfont icon-ziyuan"></i>
          </div>
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>  
  export default {
    name: 'comFooter',

  }
</script>

<style lang="scss" scoped>
//  @import '../lib/icon-font/iconfont.css';
  .com-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 8px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #ccc;

  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    display: -webkit-flex;
    li {
      flex: 1;
      list-style: none;
      a {
        text-decoration: none;
        color: #000;
        .pics {
          width: 100%;
          text-align: center;
          height: 30px;

          i { 
            font-size: 1.6rem;
            color: #666;
          }
        }
        p {
          color: #666;
          margin: 0;
          padding: 0;
          width: 100%;
          text-align: center;
        }
      }
      .active {
        .pics {
          i {
            color: #00ba9c;
          }
        }
        p {
          color: #00ba9c;
        }
      }


    }
  }
</style>