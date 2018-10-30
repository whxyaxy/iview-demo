<template>
	<div>
	   <div class="head"><span>信息运维</span><span>更多</span></div>
       <div class="section">
         <div class="sectionTop">请求池</div>
         <div class="requeryBox">
           <div class="contentBox" v-for="(item,index) in auditList" :class="['contentBox',{'contentBoxCur':auditCur == index}]" @click="auditFlag(index)">
            <p class="person"><i class="circle"></i><span>{{item.name}}</span></p>
             <p class="content">{{item.content}}</p>
             <div :class="['leaveBotton',{'showItem':auditCur == index}]" >
             	<Button>同意</Button>
             	<Button type="primary" style="background: #EF1F1F;border:none">不同意</Button>
             </div>
           </div>
         </div>
       </div>

       <hr style="border: 1px solid rgba(0,0,0,0.24);width:90%;margin:10px auto">
       <div class="section">
            <div class="sectionSecond" style="height:50px;line-height:50px;">
	         	<div>会议预定</div>
	         	<div>
		         	<Icon class="prevSelect" type="chevron-left" @click="prevMonth()" ></Icon>
		         	<span class="timeBox" @click="monthChoose(monthNow)">{{yearNow}}-{{monthNow}}</span>
		         	<Icon class="nextSelect" type="chevron-right" @click="nextMonth()"></Icon>
	            </div>
            </div>
      </div>

       <transition name="side-fade">
       	<!-- 日期选择 -->
      	<div class="clanderBox" v-if="curMonth">
	      <ul><li v-for="item in week">{{item}}</li></ul>
	      <ul>
	      	<li v-for="(item,index) in dayList" :style="{marginLeft:(index==0?marginLeft:'0')}" :class="[{'currentDay':(dayNow==item.number&&monthNow==monthToday&&yearNow==yearToday&&dayNow==today)},item.class,{'curDay':dayIndex==index+1}]" :key="index" @click="dayClick(item.number,index)">{{item.number}}</li>
	      </ul>
        </div>
        <!-- 月份选择 -->
        <div class="monthBox" v-else>
      	<!-- <div class="monthBox" v-if="!curMonth"> -->
      	 	<ul>
      	 		<li v-for="(item,index) in monthArray" :class="{'currentDay':monthNow==(index+1)}" @click="monthInnerChoose(index)">{{item}}</li>
      	 	</ul>
      	</div>
      </transition>

      <div class="section" v-for="item in auditDetail">
         <div class="sectionSecond meet"><div><p>{{item.content}}</p><p>{{item.things}}</p></div><div>{{item.time}}</div></div>
      </div>

       <div class="addButton"><span>+</span>预定会议室</div>
       <hr style="border: 1px solid rgba(0,0,0,0.24);width:90%;margin:10px auto">
       <div style="display:flex;width:100%">
          <div class="echartDis" style="width:50%">
            <p>服务器状态</p>
            <p><i class="state" style="background:#8E0000"></i><span>异常</span><i class="state" style="background:#FF654E"></i><span>正常</span></p>
            <div id="myChart1" :style="{width: '100%', height: '150px'}"></div>
          </div>
          <div class="echartDis" style="width:50%">
            <p>项目状态</p>
            <p><i class="state" style="background:#8E0000"></i><span>已完工</span><i class="state" style="background:#FF654E"></i><span>未完工</span></p>
            <div id="myChart2" :style="{width: '100%', height: '150px'}"></div>
          </div>
       </div>
	</div>
</template>
<script>
	//import button from 'iview/src/components/button';
	export default{
		 components:{
        //button
      },
		data(){
			return{
             auditList:[
		            {
		              id:'001',
		              name:'小王',
		              content:'项目经费申请项目经费申请项目经费申请项目经费'
		            },
		            {
		              id:'002',
		              name:'小李',
		              content:'项目经费申请项目经费申请项目经费申请项目经费'
		            },
		            {
		              id:'1',
		              name:'小张',
		              content:'办公室占用'
		            },
		          ],
		          auditDetail:[
		            {
		                id:'001',
		                content:'生产楼一楼会议室1',
		                things:'经营例会',
		                time:'下午'
		            },
		            {
		                id:'002',
		                content:'生产楼一楼会议室1',
		                things:'经营例会',
		                time:'下午'
		            },
		            {
		                id:'003',
		                content:'生产楼一楼会议室2',
		                things:'事务调整',
		                time:'上午'
		            },
		          ],
		          curMonth:false,
		          auditCur:-1,
		          week:['日','一','二','三','四','五','六'],
		          monthList:['31','29','31','30','31','30','31','31','30','31','30','31'],
		          monthArray:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
		          yearNow:'',
		          monthNow:'',
		          yearToday:'',
		          monthToday:'',
		          dayNow:'',
		          today:'',
		          marginLeft:'0',
		          dayList:[],
		          dayIndex:-1
			}
		},
		    mounted(){
		      this.drawPie();
		      this.drawPie1();
		       let nowdays = new Date(),
	              year = nowdays.getFullYear(),
	              month = nowdays.getMonth()+1,
	              day = nowdays.getDay(),//星期
	              date = nowdays.getDate();//几号
	              this.yearNow=year;
	              this.monthNow=month;
	              this.dayNow=date;
	              this.today=date;
	              this.yearToday=year;
		          this.monthToday=month;
		          this.monthInnerChoose(month-1)
		     },

		     created(){
		      this.auditCur = 0;   
		   

		     },
		      methods: {
		      	//日期和月份的隐藏控制
		      	monthChoose(){
                   this.curMonth=!this.curMonth;
                   console.log(this.curMonth)
		      	},

		      	//日期选择
				dayClick(number,numberIndex){
                   this.dayIndex=numberIndex+1;
                   this.dayNow=number;
                   console.log(this.yearNow+'年'+this.monthNow+'月'+number+'日');
				},

		      	//月份选择
		      	monthInnerChoose(item){
                   console.log(item)
                   let yearthis= this.yearNow
                   this.curMonth=!this.curMonth;
                   this.monthClick(item,yearthis)
		      	},
		        //月份选择封装函数
		        monthClick(item,yearthis){
                   this.monthNow = item+1;
                   let thisTime = new Date(yearthis,item,1);
                   let thatTime = new Date(yearthis,item,this.monthList[item]);
		           let firstDay = thisTime.getDay();//获取第一天是星期几
		           let lastDay = thatTime.getDay();//获取最后一天是星期几
		           this.judgeYear(yearthis);
		           this.dayIndex = -1;
		           this.dayList = [];
		           for(var i=1,len=this.monthList[item];i<=len;++i){
		           	 var dayObject = {};
		             dayObject.number =i;
		             dayObject.class ='now';
		             this.dayList.push(dayObject)
		             }
		           this.fillBefore(firstDay,item)
		           this.fillBehind(lastDay)
		        },
		        
		        //填补前面的日期
		        fillBefore(number,month){
                     for(var j=0;j<number;j++){
                     	if(month-1>0){
                     		 var dayObject = {};
				             dayObject.number =this.monthList[month-1]-j;
				             dayObject.class ='old';
				             this.dayList.unshift(dayObject)
                     	}else{
                     		 var dayObject = {};
				             dayObject.number =this.monthList[11]-j;
				             dayObject.class ='old';
				             this.dayList.unshift(dayObject)
                     	}
                     }
		        },

		         //填补之后的日期
		        fillBehind(numberBehind){
		        	if(6-numberBehind==0){
		        		for(var j=1;j<=7;j++){
	        			 var dayObject = {};
			             dayObject.number =j;
			             dayObject.class ='old';
			             this.dayList.push(dayObject)
		        		}
		        	}else{
                      for(var j=1;j<=6-numberBehind;j++){
                      	var dayObject = {};
			             dayObject.number =j;
			             dayObject.class ='old';
			             this.dayList.push(dayObject)
                      }
		        	}
		        },

		        //前一个月
		        prevMonth(){
		        	if(this.monthNow<=1){
	                    this.monthNow=this.monthNow+10;
		        		this.yearNow=this.yearNow-1;
		        	}else{
		        		this.monthNow=this.monthNow - 2;
		        	}
                  let prevMonth= this.monthNow;
                  let prevYear= this.yearNow;
                  this.monthClick(prevMonth,prevYear)
		        },

		        //后一个月
		        nextMonth(){
		        	if(this.monthNow>11){
		        		this.monthNow=this.monthNow-12;
		        		this.yearNow=this.yearNow+1;
		        	}
                   let prevMonth= this.monthNow;
                   let prevYear = this.yearNow
                   this. monthClick(prevMonth,prevYear)
		        },

		        //闰年判断
		        judgeYear(year){
		          this.monthList[1]=(year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)?'29':'28'
		        },

		        //请求池点击样式
		        auditFlag(index){
		           this.auditCur = index
		        },

		        drawPie(){
		        let myChart = this.$echarts.init(document.getElementById('myChart1'))
		        myChart.setOption({
		          color: ["#8E0000", "#FF654E"],
		           series: [
		              {
		                  name:'访问来源',
		                  type:'pie',
		                  radius: ['50%', '70%'],
		                  avoidLabelOverlap: false,
		                  label: {
		                    normal: {
		                        show: false,
		                    },
		                    emphasis: {
		                        show: false,
		                    }
		                },
		                labelLine: {
		                    normal: {
		                        show: false
		                    }
		                },
		                  data:[
		                      {value:335, name:'异常'},
		                      {value:310, name:'正常'},
		                  ]
		              }
		          ]
		        });
		    },
		    drawPie1(){
		        let myChart = this.$echarts.init(document.getElementById('myChart2'))
		        myChart.setOption({
		          color: ["#8E0000", "#FF654E"],
		           series : [
		              {
		                  name: '访问来源',
		                  type: 'pie',
		                  radius : '70%',
		                   label: {
		                    normal: {
		                        show: false,
		                       
		                    },
		                    emphasis: {
		                        show: false,
		                       
		                    }
		                },
		                labelLine: {
		                    normal: {
		                        show: false
		                    }
		                },
		                  data:[
		                      {value:335, name:'已完工'},
		                      {value:65, name:'未完工'},
		                    
		                  ],
		               
		              }
		          ]
		        });
		    }
		  },
	}
</script>
<style scoped>
.head{display: flex;justify-content: space-between;height:50px;line-height: 50px;}
.head span:first-child{font-size: 24px;color: rgba(0,0,0,0.65);}
.head span:last-child{font-size: 14px;color: rgba(0,0,0,0.65);}
.circle{display:inline-block;background: #EE1F1F;
border: 2px solid #FFFFFF;width:8px;height:8px;border-radius: 50%;background: #ce2222;margin-right:6px;}
.contentBox{padding:10px 5px;cursor: pointer;}
.contentBoxCur{background: rgba(224,19,19,0.08);}
.person{text-align: left;font-size:16px;}
.content{margin-left:6px;font-size: 14px;text-align: left;}
.sectionTop{text-align: left;font-size: 18px;line-height: 40px}
.prevSelect{margin-right:5px;cursor: pointer;}
.nextSelect{margin-left:5px;cursor: pointer;}
.timeBox{cursor: pointer;}
.clanderBox ul:first-child{display:flex;}
.clanderBox ul:first-child li{width:14%;height:40px;line-height: 40px;}
.clanderBox ul:nth-child(2){display:flex;flex-wrap: wrap}
.clanderBox ul:nth-child(2) li{width:14%;height:40px;line-height: 40px;cursor: pointer;}
.leaveBotton{display:none;text-align: right;}
.leaveBotton a{display: inline-block;border: 1px solid rgba(0,0,0,0.32);width:64px;height:24px;line-height:24px;font-size: 14px;
color: rgba(0,0,0,0.64);text-align: center;cursor: pointer;}
.leaveBotton a:first-child{}
.leaveBotton a:last-child{margin-left:10px;background: #EF1F1F;color:#fff ! important;border: 1px solid #EF1F1F;}
.sectionSecond{text-align:left;display: flex;justify-content: space-between;align-items: center;border-bottom:1px solid rgba(0,0,0,0.24);}
.sectionSecond span:last-child{cursor: pointer;}
.sectionSecond p:last-child{font-size:14px;}
.monthBox,.clanderBox{border-bottom: 1px solid #ccc;margin-bottom:10px;background: #fff;margin-top:0px;width:260px;}
/*.clanderBox{position: relative;}
.monthBox{position: absolute;top:0px;}*/
/*.monthBox{margin-top:-241px;}*/
/*.monthBox{-webkit-transform: rotateZ(-180deg);
	        transform: rotateZ(-180deg);
	        -webkit-transform: rotateY(-180deg);
	        transform: rotateY(-180deg);}*/
.monthBox ul{display:flex;flex-wrap: wrap;width:100%;}
.monthBox li{width:25%;height:40px;line-height: 40px;cursor: pointer;}
.meet{font-size:16px;height: 55px;}
.addButton{background: rgba(69,69,69,0.30);border-radius: 100px;margin:20px auto;padding:4px 10px;width: 150px;color:#fff;cursor: pointer;}
.addButton span{color: rgb(206, 34, 34);font-weight: bold;margin-right: 10px}

.state{display:inline-block;width:10px;height:10px;border-radius:50%}
.echartDis span{font-size: 12px}
.echartDis p:first-child{font-size: 16px;line-height: 30px;font-weight: bold;margin-top:10px;}
.requeryBox{max-height:200px;overflow: auto;}
.requeryBox::-webkit-scrollbar {/*滚动条整体样式*/
          width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
          height: 1px;
      }
.requeryBox::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0, 0, 0, 0.24);
    }
.requeryBox::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }
.curDay{background: #f2b4b5;border-radius: 50%;color:#000! important;}
.currentDay{background: #EE1D1D;border-radius: 50%;color:#fff! important;}

/*动画*/
.slide-fade-enter-active, .slide-fade-leave-active {
  animation: run .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to  {
  animation: run0 .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
@keyframes run{
        0%{
            transform: rotateZ(0deg);
        }
        100%{
	        -webkit-transform: rotateZ(-180deg);
	        transform: rotateZ(-180deg);
	        -webkit-transform: rotateY(-180deg);
	        transform: rotateY(-180deg);
        }
    }
@keyframes run0{
        0%{
        	-webkit-transform: rotateZ(-180deg);
            transform: rotateZ(-180deg);
            -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
        }
        100%{
               transform: rotateZ(0deg);
        }
    }
.now{color:#333;}
.old{color:#ccc;}
</style>