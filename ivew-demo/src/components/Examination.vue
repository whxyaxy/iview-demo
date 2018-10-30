<template>
  <div class="home">
    <div class="selectBox">
      <ul><li>检查类型：</li><li v-for='(item,index) in reportList' :class="{'reportActive':reportSelect == index}" @click="reportIndex(index)">{{item}}</li></ul>
    </div>
    <div class="tableBox">
      <ul><li v-for='(item,index) in tableList'>
        <div>{{item.list}}</div>
        <div><span :class="[judgeState(item.state),'tabState']">{{item.state}}</span><span>{{item.number}}</span></div>
      </li></ul>
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
              reportList:['外部','自评','内部'],
              reportSelect:-1,
              
        }
    },

     created(){
      this.reportSelect = 0;
      this.judgeState();
     },
      methods: {
         //报表类型查询
        reportIndex(number){
          this.reportSelect = number;
          console.log(this.reportList[number])
        },

        //判断状态的样式
        judgeState(state){
         //console.log(state)
         if(state!=undefined||state!=null||state!=""){
            if(state=='已审批'){
                return 'done'
            }else if(state=='审批中'){
                return "doing"
            }else if(state=='未启动'){
                return "undo"
            }
         }
        },
  }
}
</script>
<style scoped>
.selectBox ul{display:flex;align-items: center}
.selectBox ul:first-child li{margin-right:10px;cursor: pointer;}
.selectBox ul:first-child li:not(:first-child){width:70px}
.selectBox ul:first-child li:first-child{font-weight: bold;}
.tableBox{background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:20px 15px;margin-top:10px;font-size: 14px;}
.tableBox ul{width:100%;align-items: center}
.tableBox ul li{display: flex;justify-content: space-between;align-items: center;height:40px;border-bottom: 1px solid rgba(0,0,0,0.24);}
.tableBox .tabState{display: inline-block;width:50px;margin-right:20px;background: #64C468;color:#fff;}


.done{background: #64C468 ! important;}/*已审批*/
.doing{background: #FFC300 ! important;color: rgba(0,0,0,0.64)! important;}/*审批中*/
.undo{background: #ECECEC ! important;color: rgba(0,0,0,0.64)! important;}/*未启动*/
.reportActive{background: #DF1515;color:#fff;border-radius: 5px;padding: 0 10px;}
</style>
