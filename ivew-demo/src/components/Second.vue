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
    <ul class="tabCaption"><li>金属</li><li v-for='(item,index) in metalList' :class="{'metalActive':metalSelect == index}" @click="metalIndex(index)" >{{item}}</li></ul>
    <!-- <report></report> -->
    <!-- <plan></plan> -->
    <!-- <examination></examination> -->
    <!-- <review></review> -->
    <real-parameters></real-parameters>
  </div>
  
  </div>
</template>

<script>
  import Report from "./Report"//专业报表
  import Plan from "./Plan"//定制计划
  import Examination from "./Examination"//汇总检修报表
  import Review from "./Review"//监督检查
  import RealParameters from "./RealParameters"//实时参数
  export default {
    components:{
        Report,
        Plan,
        Examination,
        Review,
        RealParameters
      },
    data () {
        return{
          navList: [
                {
                  name: '技术监督系统',
                  path: 'Home',
                  children:[],
                },
                {
                  name: '监督动态',
                  path: 'Home',
                  children:[],
                },
                {
                  name: '监督体系',
                  path: 'Home',
                  children:[],
                },
                {
                  name: '专业监督',
                  path: 'Home',
                  children:[],
                },
                 {
                  name: '指标查询',
                  path: 'Home',
                  children:[],
                }
              ],
              tableList: [
                {
                  list: '水、汽质量及经济指标月报（640MW）',
                  state: '已审批',
                  number:'50条',
                },
                {
                  list: '水、汽质量及经济指标月报（300MW）',
                  state: '审批中',
                  number:'50条',
                },
                {
                  list: '水、汽系统活性硅含量查定月报表（640MW）',
                  state: '已审批',
                  number:'50条',
                },
                {
                  list: '水、汽系统活性硅含量查定月报表（300MW）',
                  state: '未启动',
                  number:'50条',
                },
                 {
                  list: '水、汽系统铜、铁含量查定月报表（640MW）',
                  state: '',
                  number:'50条',
                }
              ],
               metalList:['实时参数','会议纪要','专业报表','监督台账','异常整改','文档资料','定检计划','定期工作','工作计划','项目统计','监督检查','个人资质','检查评价'],
              metalSelect:-1,
        }
    },

     created(){
     this.navList.forEach((item,index)=>{
         item['curNav']=false;
      })
      this.navList[0].curNav=true
      this.metalSelect = 0;
     },
      methods: {
        toggleShow(number) {
          this.navList[number].curNav = !this.navList[number].curNav
        },

        //金属类型查询
        metalIndex(number){
          this.metalSelect = number;
          console.log(this.metalList[number])
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
.selectBox{display:flex;background: #FFFFFF;
border: 1px solid rgba(0,0,0,0.12);padding:20px 15px;}

.tabCaption{display:flex;flex-wrap:wrap;margin: 20px 10px;font-size: 14px;align-items: center;}
.tabCaption li{width:67px;cursor: pointer;}
.tabCaption li:first-child{font-weight: bold;font-size: 18px;width: 38px;margin-right: 10px;}



.done{background: #64C468 ! important;}/*已审批*/
.doing{background: #FFC300 ! important;color: rgba(0,0,0,0.64)! important;}/*审批中*/
.undo{background: #ECECEC ! important;color: rgba(0,0,0,0.64)! important;}/*未启动*/
.metalActive{color: #F02D2D;}

</style>
