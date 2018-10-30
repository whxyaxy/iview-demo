<template>
  <div class="home">
    <div class="selectBox">
      <ul><li>报表类型：</li><li v-for='(item,index) in reportList' :class="{'reportActive':reportSelect == index}" @click="reportIndex(index)">{{item}}</li></ul>
    </div>
    <div class="tableBox">
      <Table  :columns="columns5" :data="data5"></Table>
      <div class="pageBox"><Page :total="100"></Page></div>
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
              reportList:['外部','自评','内部'],
              reportSelect:-1,
              columns5: [
                    {
                    	type: 'selection',
                    	width: 60,
                        align: 'center'
                    },
                    {
                        title: '序号',
                        key: 'index'
                    },
                    {
                        title: '主题',
                        key: 'name',
                    },
                    {
                        title: '填写时间',
                        key: 'date',
                        sortable: true
                    },
                    {
                    	title: '待处理',
                    	key: 'state'
                    },
                    {
                        title: '延期中',
                        key: 'state'
                    },
                    {
                        title: '待审核',
                        key: 'state',
                    },
                    {
                        title: '已完成',
                        key: 'state'
                    },
                    {
                        title: '超期数',
                        key: 'state'
                    },
                    // （未完成/总数）
                    {
                        title: '完成情况',
                        key: 'number',
                    },
                    {
                        title: '操作',
                        key: 'state'
                    }
                ],
                data5: [
                    {
                        name: 'John Brown',
                        number: 18,
                        state: '1',
                        date: '2016-10-03',
                        index:'1'
                    },
                    {
                        name: 'Jim Green',
                        number: 24,
                        state: '5',
                        date: '2016-10-01',
                        index:'2'
                    },
                    {
                        name: 'Joe Black',
                        number: 30,
                        state: '2',
                        date: '2016-10-02',
                        index:'3'
                    },
                    {
                        name: 'Jon Snow',
                        number: 26,
                        state: '2',
                        date: '2016-10-04',
                        index:'4'
                    }
                ]
              
        }
    },

     created(){
      this.reportSelect = 0;
     },
      methods: {
         //报表类型查询
        reportIndex(number){
          this.reportSelect = number;
          console.log(this.reportList[number])
        },

  }
}
</script>
<style scoped>
.ivu-table-header .ivu-table th { background-color: #FCECEC !important;}
.selectBox{display:flex;background: #FFFFFF;
border: 1px solid rgba(0,0,0,0.12);padding:20px 15px;}
.selectBox ul{display:flex;align-items: center}
.selectBox ul:first-child li{margin-right:10px;cursor: pointer;}
.selectBox ul:first-child li:not(:first-child){width:70px}
.selectBox ul:first-child li:first-child{font-weight: bold;}
.tableBox{background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:20px 15px;margin-top:10px;font-size: 14px;}
.pageBox{text-align: right;margin:20px 0 0;}
.reportActive{background: #DF1515;color:#fff;border-radius: 5px;padding: 0 10px;}
</style>
