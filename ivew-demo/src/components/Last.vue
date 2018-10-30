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
    	<div class="selectBox">
    		<div class="timeSelect">
    		<ul><li>机组：</li><li>2018-08</li><li>2018-07</li><li>2018-06</li><li>2018-05</li><li>2018-04</li><li>更多</li></ul>
    		</div>
    		<div>
    			<ul><li>专业：</li><li>电气</li><li>保护</li><li>化学</li><li>继电保护</li><li>汽机</li><li>燃料</li><li>热工</li></ul>
    		</div>
    	</div>
      <div class="tableBox">
      	<ul>
      		<li style="width:5%">序号</li>
      		<li style="width:25%">辅机设备</li>
      		<li style="width:10%">事件状态</li>
      		<li style="width:15%">事件开始时间</li>
      		<li style="width:15%">事件终止时间</li>
      		<li style="width:10%">持续时间</li>
      		<li style="width:10%">操作</li>
      		<li style="width:10%">关联工作室</li>
      	</ul>
      	<ul>
      		<li style="width:5%">1</li>
      		<li style="width:25%">/电气设备/#09机组/#09机组6kVA段/#09机组6kVA段工作电源进线断路器</li>
      		<li style="width:10%">备用</li>
      		<li style="width:15%">2018-03-09 00:00:00</li>
      		<li style="width:15%">2018-03-09 07:09:38</li>
      		<li style="width:10%">199.1610</li>
      		<li style="width:10%">编辑<br>/分</li>
      		<li style="width:10%"></li>
      	</ul>
      	<ul>
      		<li style="width:5%">2</li>
      		<li style="width:25%">/电气设备/#09机组/#09机组6kVA段/#09机组6kVA段工作电源进线断路器</li>
      		<li style="width:10%">备用</li>
      		<li style="width:15%">2018-03-09 00:00:00</li>
      		<li style="width:15%">2018-03-09 07:09:38</li>
      		<li style="width:10%">199.1610</li>
      		<li style="width:10%">编辑<br>/分</li>
      		<li style="width:10%"></li>
      	</ul>
      	<ul>
      		<li style="width:5%">3</li>
      		<li style="width:25%">/电气设备/#09机组/#09机组6kVA段/#09机组6kVA段工作电源进线断路器</li>
      		<li style="width:10%">备用</li>
      		<li style="width:15%">2018-03-09 00:00:00</li>
      		<li style="width:15%">2018-03-09 07:09:38</li>
      		<li style="width:10%">199.1610</li>
      		<li style="width:10%">编辑<br>/分</li>
      		<li style="width:10%"></li>
      	</ul>
      	<!-- <table >
      		<thead>
      			<tr>
      				<th>序号</th>
      				<th colspan="3">指标名称</th>
      				<th>单位</th>
      				<th>累计</th>
      				<th colspan="3">一值</th>
      				<th colspan="3">二值</th>
      				<th colspan="3">三值</th>
      				<th colspan="3">四值</th>
      				<th colspan="3">五值</th>
      			</tr>
      			<tr>
      				<th colspan="6"></th>
      				<th style="margin-left:1px">超限次数</th>
      				<th>最大偏移</th>
      				<th>时长/分</th>
      				<th style="margin-left:1px">超限次数</th>
      				<th>最大偏移</th>
      				<th>时长/分</th>
      				<th style="margin-left:1px">超限次数</th>
      				<th>最大偏移</th>
      				<th>时长/分</th>
      				<th style="margin-left:1px">超限次数</th>
      				<th>最大偏移</th>
      				<th>时长/分</th>
      				<th style="margin-left:1px">超限次数</th>
      				<th>最大偏移</th>
      				<th>时长/分</th>
      			</tr>
      		</thead>
      		<tbody>
      			<tr>
      				<td>1</td>
      				<td colspan="3">末级再热器A侧出口温度</td>
      				<td>℃</td>
      				<td>7</td>
      				<td>3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      				<td>3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      				<td>3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      				<td>3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      				<td >3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      			</tr>
      			<tr>
      				<td>2</td>
      				<td colspan="3">末级再热器A侧出口温度</td>
      				<td>℃</td>
      				<td>7</td>
      				<td>3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      				<td>3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      				<td>3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      				<td>3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      				<td >3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      			</tr>
      		</tbody>
      		<tfoot>
      			<tr>
      				<td colspan="5">总计</td>
      				<td>7</td>
      				<td>3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      				<td>3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      				<td>3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      				<td>3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      				<td >3</td>
      				<td>1.88</td>
      				<td>0.967</td>
      			</tr>
      		</tfoot>
      	</table> -->

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
                  name: '可靠性管理',
                  path: 'Home',
                 children:[],
                },
                {
                  name: '主机设备',
                  path: 'Home',
                  children:[],
                },
                {
                  name: '辅机设备',
                  path: 'Home',
                  children:[],
                },
                {
                  name: '运行数据',
                  path: 'Home',
                  children:[],
                },
                 {
                  name: '可靠性中心',
                  path: 'Home',
                  children:[],
                }
              ],
              isShow: false,
        }
    },
     mounted(){
      
     },
      created(){
     this.navList.forEach((item,index)=>{
         item['curNav']=false;
      })
      this.navList[0].curNav=true
       console.log(this.navList[0].curNav);
       console.log(this.navList);
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
.selectBox{background: #FFFFFF;
border: 1px solid rgba(0,0,0,0.12);padding:10px 15px;font-size:14px;}
.timeSelect{display:flex;justify-content: space-between;border-bottom: 1px dashed rgba(0,0,0,0.12);}
.selectBox ul{display:flex;align-items: center;height:50px}
.selectBox ul:first-child li{margin-right:10px;}

.timeSelect ul:last-child li:last-child{color: #ce2222}
.selectBox ul:first-child li:first-child{font-weight: bold;}
.tableBox{background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:20px 15px;margin-top:10px;font-size: 14px;}
.tableBox ul{display:flex;width:100%;align-items: center}
.tableBox ul li{align-items: center;display: flex;justify-content: center;height:55px;}
.tableBox ul:first-child{background: #FCECEC;border-bottom:none;font-weight: bold;}


.tableBox ul li{text-align: center;}
.tableBox ul{border-bottom:1px solid rgba(0,0,0,0.12);}

</style>
