<template>
  <div class="home"> 
    <ul class="nav">
      <router-link  v-for="(item,index) in navList" :key="index" :to='{path:item.path}'>
      <li :class="{'curNav':item.curNav}" @mouseover="toggleShow(index)"
          @mouseout="toggleShow(index)">{{item.name}}
          <ul :class="{'showFlag':!item.curNav,'childLi':true}" >
          	<li v-for="(item,index) in item.children">{{item.name}}</li>
          </ul>
      </li>
    </router-link>
    </ul>
     

  <div style="padding:10px">
  	<h3 class="tabCaption">标题</h3>
  	<div class="selectBox">
  		<ul><li>机组：</li><li>#1</li><li>#2</li><li>#3</li><li>#4</li><li>#5</li></ul>
  		<ul><li><a>请选择日历</a></li><li>下载Excel</li></ul>
  	</div>
    <div class="tableBox">
    	<ul>
    		<li style="width:5%;">序号</li>
    		<li style="width:10%;">指标名称</li>
    		<li style="width:5%;">单位</li>
    		<li style="width:5%;">累计</li>
    		<li style="width:15%;">一值</li>
    		<li style="width:15%;">二值</li>
    		<li style="width:15%;">三值</li>
    		<li style="width:15%;">四值</li>
    		<li style="width:15%;">五值</li>
    	</ul>
    	<ul>
    		<li style="width:25%;">序号</li>
    		<li class="cellspacing" style="width:5%;">超限<br>次数</li>
    		<li style="width:5%;">最大<br>偏移</li>
    		<li style="width:5%;">时长<br>/分</li>
    		<li class="cellspacing" style="width:5%;">超限<br>次数</li>
    		<li style="width:5%;">最大<br>偏移</li>
    		<li style="width:5%;">时长<br>/分</li>
    		<li class="cellspacing"style="width:5%;">超限次数</li>
    		<li style="width:5%;">最大<br>偏移</li>
    		<li style="width:5%;">时长<br>/分</li>
    		<li class="cellspacing" style="width:5%;">超限<br>次数</li>
    		<li style="width:5%;">最大<br>偏移</li>
    		<li style="width:5%;">时长<br>/分</li>
    		<li class="cellspacing" style="width:5%;">超限<br>次数</li>
    		<li style="width:5%;">最大<br>偏移</li>
    		<li style="width:5%;">时长<br>/分</li>
    	</ul>
    	<ul>
    		<li style="width:5%;">1</li>
    		<li class="danger" style="width:10%;">末级再热器A侧出口温度</li>
    		<li style="width:5%;">℃</li>
    		<li style="width:5%;">7</li>
    		<li style="width:5%;">3</li>
    		<li style="width:5%;">1.88</li>
    		<li style="width:5%;">0.967</li>
    		<li style="width:5%;">3</li>
    		<li style="width:5%;">1.88</li>
    		<li style="width:5%;">0.967</li>
    		<li style="width:5%;">3</li>
    		<li style="width:5%;">1.88</li>
    		<li style="width:5%;">0.967</li>
    		<li style="width:5%;">3</li>
    		<li style="width:5%;">1.88</li>
    		<li style="width:5%;">0.967</li>
    		<li style="width:5%;">3</li>
    		<li style="width:5%;">1.88</li>
    		<li style="width:5%;">0.967</li>
    	</ul>
    	<ul>
    		<li style="width:20%;">总计</li>
    		<li style="width:5%;">15</li>
    		<li style="width:5%;">3</li>
    		<li style="width:5%;">1.88</li>
    		<li style="width:5%;">0.967</li>
    		<li style="width:5%;">3</li>
    		<li style="width:5%;">1.88</li>
    		<li style="width:5%;">0.967</li>
    		<li style="width:5%;">3</li>
    		<li style="width:5%;">1.88</li>
    		<li style="width:5%;">0.967</li>
    		<li style="width:5%;">3</li>
    		<li style="width:5%;">1.88</li>
    		<li style="width:5%;">0.967</li>
    		<li style="width:5%;">3</li>
    		<li style="width:5%;">1.88</li>
    		<li style="width:5%;">0.967</li>
    	</ul>
    </div>
  </div>
  </div>
</template>

<script>
  //import ImgScroll from "./ImgScroll"
  export default {
    components:{
        //ImgScroll
      },
    data () {
        return{
          navList: [
                {
                  name: '指标分析统计',
                  path: 'Second',
                  children:[],
                  curNav:true,
                },
                {
                  name: '周指标分析',
                  path: 'Second',
                  children:[],
                  curNav:false,
                },
                {
                  name: '月报统计',
                  path: 'Second',
                  curNav:false,
                  children:[
					{ name: '供电煤耗趋势'},
					{ name: '我关注的指标'},
					{ name: '一期发电量月报'},
					{ name: '630MW 电气参数'},
					{ name: '630MW 锅炉参数'},
					{ name: '630MW 汽机参数'},
					{ name: '630MW 环保参数'},
					{ name: '二期发电量月报'},
					{ name: '1000MW 电气参数'},
					{ name: '1000MW 锅炉参数'},
					{ name: '1000MW 汽机参数'},
					{ name: '1000MW 灰硫参数'},
					{ name: '1000MW 环保参数'},
					{ name: '指标查询'},
                  ],
                },
                {
                  name: '小指标竞赛',
                  path: 'Second',
                  children:[],
                  curNav:false,
                },
                 {
                  name: '指标达标超标分析',
                  path: 'Second',
                  children:[],
                  curNav:false,
                },
                {
                  name: '指标查询',
                  path: 'Second',
                  children:[],
                  curNav:false,
                }
              ],
              isShow: false,
        }
    },
     mounted(){
     
     },
      watch: {
       
      },
      methods: {
         toggleShow: function(number) {
              console.log(this.navList[number].curNav)
          this.navList[number].curNav = !this.navList[number].curNav
        },
  }
}
</script>
<style scoped>
.nav{display: flex;color: #fff;list-style-type: none;width:100%;background: #323232;height:48px;line-height: 48px;text-align: center}
.nav a{color:#fff;text-decoration: none;width:16.6%;}
.curNav{background:#ce2222}

.showFlag{display:none;}
.childLi{background: #F8F8F8 ! important;font-size: 14px;color: rgba(0,0,0,0.48);list-style: none}
.selectBox{display:flex;justify-content: space-between;background: #FFFFFF;
border: 1px solid rgba(0,0,0,0.12);padding: 15px;font-size: 14px;}

.tabCaption{text-align: left;margin:10px;}
.selectBox ul{display:flex;align-items: center}
.selectBox ul:first-child li{margin-right:10px;}
.selectBox ul:last-child li{padding:7px 15px}
.selectBox ul:last-child li:first-child{margin-right:10px;border: 1px solid rgba(0,0,0,0.12)}
.selectBox ul:last-child li:last-child{color:#fff;background: #ce2222}
.selectBox ul:first-child li:first-child{font-weight: bold;}
.tableBox{background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:20px 15px;margin-top:10px;font-size: 14px;}
/*table{width: 100%;}
table thead{width:100%;padding:10px 0;}
table th,table td{padding: 10px 0;}
table thead tr:last-child th{padding: 10px 0;}
table thead tr:first-child{background: #FCECEC;}
table thead tr:last-child th{background: #E9E9E9;}
table tbody tr td{border-bottom:1px solid rgba(0,0,0,0.12);}*/
.tableBox ul{display:flex;width:100%;align-items: center}
.tableBox ul li{align-items: center;display: flex;justify-content: center;height:55px;}
.tableBox ul:first-child{background: #FCECEC;border-bottom:none;font-weight: bold;}
.tableBox ul:nth-child(2){margin-top:2px;border-bottom:none;font-weight: bold;}
.cellspacing{margin-left:2px;}
.tableBox ul:nth-child(2) li{background: #E9E9E9;}
.tableBox ul li{text-align: center;}
.tableBox ul{border-bottom:1px solid rgba(0,0,0,0.12);}
.danger{color:rgba(223,21,21,0.72);}
</style>
