<template>
  <div>
    <header-top></header-top>
    <div class="main">
      <div style="width:55px;background: #fff;"><header-nav></header-nav></div>
      <div style="width:calc(100% - 55px)">
        <div class="container">
          <div class="containerLeft">
             <side-bar></side-bar>
           </div>

           <div class="containerRight">
              <router-view/>
           </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headerTop from "./Header"
  import headerNav from "./Nav"
  import SideBar from "./SideBar"
  export default {
    components:{
      headerTop,
      headerNav,
      SideBar
    },
     data () {
        return{
         
        }
    },
   
    // name: 'App'
  }
</script>

<style>
/**{padding:0px;margin:0px;}
body{font-size: 16px;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
.main{background:#f1f1f1;}
ul li{list-style: none}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{display:flex;}
.showItem{display:block ! important;}
.hideItem{display:none ! important;}

.container{display:flex;width:100%;}
.containerLeft{width:280px;padding:0px 10px;background: #FFFFFF;box-shadow: 2px 0 2px 0 rgba(0,0,0,0.12);}
.containerRight{padding-left:10px;width:calc(100% - 280px);}*/
</style>
