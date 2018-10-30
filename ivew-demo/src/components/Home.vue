<template>
  <div class="home">
    <div class="nav">
      <div>可靠性管理</div>
      <ul><li v-for="(item,index) in navList" :class="{'curNav':reliabilityIndex==index}" @click="reliabilitySelect(index)">{{item.name}}</li></ul>
    </div>
    <div class="top">
      <div class="topLeft">
        <div class="topTitle">
          <div class="div">项目统计</div>
          <div style="width:150px;height:22px">
             <DatePicker type="date" placeholder="请选择日期" @on-change="handleChange" :value="valueItem"></DatePicker>
          </div>
        </div>
        <ul class="task">
          <li v-for="(item,index) in taskList">
            <p>{{item.time}}</p>
            <p>{{item.state}}</p>
          </li>
        </ul>
      </div>

      <div class="topMiddle">
        <div class="topTitle">
          <div class="div">缺陷预警</div>
          <div style="width:150px;height:22px">
             <DatePicker type="date" placeholder="请选择日期" ></DatePicker>
          </div>
        </div>
        <div id="defactEchart" :style="{width: '100%', height: '250px',marginTop:'10px'}"></div>
      </div>

      <div class="topRight">
        <div class="topTitle">
          <div class="div">上级消息</div>
        </div>
        <ul class="newsList">
          <li v-for="(item,index) in  newsList">
          <p>{{item.news}}</p><p>{{item.time}}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="twoPart">
      <div class="one">
        <div class="topTitle">
          <div class="div">任务闭环</div>
          <div style="width:150px;height:22px">
             <DatePicker type="date" placeholder="请选择日期"></DatePicker>
          </div>
        </div>
        <table>
          <tr>
            <th></th><th>厂内检查</th><th>厂外检查</th><th>二十五项反馈</th>
          </tr>
          <tr>
            <td>总项</td><td>19</td><td>0</td><td>49</td>
          </tr>
          <tr>
            <td>未完成</td><td>18</td><td>0</td><td>49</td>
          </tr>
        </table>
      </div>
      <div class="two">
        <div class="topTitle">
          <div class="div">监督简报</div>
        </div>
        <ul>
          <li v-for="(item,index) in list">{{item}}</li>
        </ul>
      </div>

      <div class="three">
        <div class="topTitle">
          <div class="div">主机可靠性分析</div>
        </div>
        <div class="yearSelect">
          <Icon class="prevSelect" type="chevron-left" @click="getYear(-1)" ></Icon>
          <span>{{curYear}}</span>
          <Icon class="nextSelect" type="chevron-right" @click="getYear(+1)" ></Icon>
        </div>
        <ul class="yearList">
          <li v-for="(item,index) in yearMonthList"><Icon type="clock"></Icon>{{item}}</li>
        </ul>
      </div>

      <div class="four">
        <div class="topTitle">
          <div class="div">辅机可靠性分析</div>
        </div>
        <div class="yearSelect">
          <Icon class="prevSelect" type="chevron-left" @click="getYear(-1)" ></Icon>
          <span>{{curYear}}</span>
          <Icon class="nextSelect" type="chevron-right" @click="getYear(+1)" ></Icon>
        </div>
        <ul class="yearList">
          <li v-for="(item,index) in yearMonthList"><Icon type="clock"></Icon>{{item}}</li>
        </ul>
      </div>

      <div class="five">
        <div class="topTitle">
          <div class="div">辅机非停报告</div>
        </div>
        <ul>
          <li v-for="(item,index) in list">{{item}}</li>
        </ul>
      </div>
    </div>

    <div class="threePart">
      <div class="threeLeft">
        <div class="threeDis"><ul>
          <li><p>煤指标</p><p>（本月累计）</p></li>
          <li><p>1234t</p><p>进场</p></li>
          <li><p>125t</p><p>入炉</p></li>
        </ul></div>
        <div style="width:calc(100% - 100px)">
          <div class="lineEchartSelect"><ul style="display: flex"><li :class="{'curLi':targetIndex}" @click="targetSelect(0)">一期曲线</li><li :class="{'curLi':!targetIndex}" @click="targetSelect(1)">二期曲线</li></ul></div>
          <div id="curveEchart" :style="{width: '100%', height: '180px',marginTop:'10px'}"></div>
        </div>
      </div>
      <div class="threeRight">
        <div class="threeDis">
          <ul>
          <li><p>脱碱指标</p><p>（本月累计）</p></li>
          <li><p>308t</p><p>石灰石粉</p></li>
          <li><p>101t</p><p>液氮</p></li>
        </ul>
        </div>
        <div class="threeRightMiddle">
          <p>给油脂</p>
          <div id="rateEchart" :style="{width: '100%', height: '200px',marginTop:'10px'}"></div>
        </div>
        <div class="threeRightRight">
          <p>水汽品质合格率</p>
          <ul><li  v-for="(item,index) in rateList">
            <p>{{item.name}}</p><p>{{item.number}}</p></li></ul>
        </div>
      </div>
    </div>
    <div class="nav">
      <div>指标分析统计</div>
      <ul><li v-for="(item,index) in bottomNavList" :class="{'curNav':staticsIndex==index}" @click="staticsSelect(index)">{{item.name}}</li></ul>
    </div>
    <div class="containerBox">
      <ul class="statics">
        <li v-for="(item,index) in staticsList">
          <div class="machineType">
            <div>{{item.name}}</div>
            <div><p class="disLight">本月运行</p><p class="p">{{item.time}}</p></div>
          </div>
          <p class="disLight p">煤耗（g/Kw.h）</p>
          <p class="p">{{item.coal}}</p>
          <p class="disLight p">发电量（万Kw.h）</p>
          <p class="p">{{item.power}}</p>
        </li>
      </ul>
      <div class="staticsBottom">
        <div class="staticsBottomLeft">
          <p>机组负载图</p>
          <div id="loadEchart" :style="{width: '100%', height: '350px',marginTop:'10px'}"></div>
        </div>
        <div class="staticsBottomRight">
          <ul>
            <li v-for="(item,index) in staticsList">
              <div class="machineType" style="align-items: center;">
                <div>{{item.name}}</div>
                <div><p class="disLight">年累计发电量万Kw.h(负荷率%)</p>
                  <p class="p">{{item.total}}({{item.percent}})</p></div>
              </div>
              <div class="percentLine"><div class="nowPercentLine" :style="{'width':item.percent}"></div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>

   <div class="bottomPart">
     <div class="bottomPartLeft">
       <div class="tableTime">
          <div>一期发电量月报</div>
          <div style="width:250px">
             <DatePicker type="date" placeholder="请选择日期"></DatePicker>
          </div>
       </div>
       <table cellspacing="0">
         <tr><th>日期</th><th>一值</th><th>二值</th><th>三值</th><th>四值</th><th>五值</th></tr>
         <tr>
           <td>2018-06-01</td><td>922.32 日</td><td></td><td>922.32 中</td><td></td><td>922.32 中</td>
         </tr>
         <tr>
           <td>2018-06-02</td><td>922.32 日</td><td></td><td>922.32 中</td><td></td><td>922.32 中</td>
         </tr>
         <tr>
           <td>2018-06-03</td><td>1058.4 夜</td><td>1058.4 日</td><td></td><td>1058.4 中</td><td></td>
         </tr>
         <tr>
           <td>2018-06-04</td><td>1058.4 夜</td><td>1058.4 日</td><td></td><td>1058.4 中</td><td></td>
         </tr>
         <tr>
           <td>2018-06-05</td><td></td><td>907.6 夜</td><td>907.6 日</td><td></td><td>907.6 中</td>
         </tr>
         <tr>
           <td>2018-06-06</td><td></td><td>907.6 夜</td><td>899.64 日</td><td></td><td>899.64 中</td>
         </tr>
       </table>
     </div>
     <div class="bottomPartRight">
       <div class="tableTime">
          <div>一期发电量月报</div>
         <div style="width:250px">
             <DatePicker type="date" placeholder="请选择日期"></DatePicker>
          </div>
       </div>
       <table cellspacing="0">
         <tr><th>日期</th><th>一值</th><th>二值</th><th>三值</th><th>四值</th><th>五值</th></tr>
         <tr>
           <td>2018-06-01</td><td>922.32 日</td><td></td><td>922.32 中</td><td></td><td>922.32 中</td>
         </tr>
         <tr>
           <td>2018-06-02</td><td>922.32 日</td><td></td><td>922.32 中</td><td></td><td>922.32 中</td>
         </tr>
         <tr>
           <td>2018-06-03</td><td>1058.4 夜</td><td>1058.4 日</td><td></td><td>1058.4 中</td><td></td>
         </tr>
         <tr>
           <td>2018-06-04</td><td>1058.4 夜</td><td>1058.4 日</td><td></td><td>1058.4 中</td><td></td>
         </tr>
         <tr>
           <td>2018-06-05</td><td></td><td>907.6 夜</td><td>907.6 日</td><td></td><td>907.6 中</td>
         </tr>
         <tr>
           <td>2018-06-06</td><td></td><td>907.6 夜</td><td>899.64 日</td><td></td><td>899.64 中</td>
         </tr>
       </table>
       <input type="button" value="点击显示隐藏" @click="animateFlag()">

        <transition name="fade">
            <ul v-if="show" class="hideBox"><li v-for="(item,index) in navList">{{item}}</li></ul>
            <!-- <ul v-else><li v-for="(item,index) in bottomNavList">{{item}}</li></ul> -->
        </transition>
     </div>
   </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import echarts from 'echarts'
  Vue.prototype.$echarts = echarts
  //import ImgScroll from "./ImgScroll"
  export default {
    components:{
        //ImgScroll
      },
    data () {
        return{
              navList: [{name: '主机设备'},{name: '辅机设备'},{name: '运行数据'},{name: '可靠性中心'}],
              taskList: [{time: '12',state: '已立项'},{time: '13',state: '已审批'},{time: '14',state: '已启动'},{time: '15',state: '已报计划'},{time: '16',state: '已招标'},{time: '17',state: '已签合同'},{time: '18',state: '已完成'},{time: '19',state: '已取消'},{time: '20',state: '合计'},],
              newsList: [{time: '2018-05-23',news: '景德镇电厂技术监督投入运营',flag:'1'},{time: '2018-05-23',news: '景德镇电厂技术监督投入运营',flag:'1'},{time: '2018-05-23',news: '景德镇电厂技术监督投入运营',flag:'1'},{time: '2018-05-23',news: '景德镇电厂技术监督投入运营',flag:'1'},{time: '2018-05-23',news: '景德镇电厂技术监督投入运营',flag:'1'}],
              list:['·2015年第3期典型事故分析案例','·2015年第2期典型事故分析案例','·2015年第1期典型事故分析案例','·2015年第3期典型事故分析案例','·2015年第3期典型事故分析案例','·2015年第3期典型事故分析案例'],
              rateList:[{name:"#1xxxx",number:'100%'},{name:"#1xxxx",number:'100%'},{name:"#1xxxx",number:'100%'}],
              bottomNavList: [{name: '周指标分析'},{name: '月报统计'},{name: '小指标竞赛'},{name: '奖金分配'}],
              staticsList:[
              {name:'#1机组',time:'144h',coal:'323.1/322.99',power:'994/6180.01',total:'135858.14',percent:'74.04%'},
              {name:'#2机组',time:'144h',coal:'323.1/322.99',power:'994/6180.01',total:'135858.14',percent:'74.04%'},
              {name:'#3机组',time:'144h',coal:'323.1/322.99',power:'994/6180.01',total:'135858.14',percent:'74.04%'},
              {name:'#4机组',time:'144h',coal:'323.1/322.99',power:'994/6180.01',total:'135858.14',percent:'74.04%'},
              {name:'#5机组',time:'144h',coal:'323.1/322.99',power:'994/6180.01',total:'135858.14',percent:'74.04%'},
              {name:'#6机组',time:'144h',coal:'323.1/322.99',power:'994/6180.01',total:'135858.14',percent:'74.04%'}
              ],
              yearMonthList:[],
              reliabilityIndex:-1,
              staticsIndex:-1,
              curYear:'',
              numIndex:0,
              valueItem:'',
              targetIndex:true,
              show:false
            
        }
    },
    mounted(){
      this.defactEchart();
      this.curveEchart();
      this.rateEchart();
      this.loadEchart();
    },
     created(){
      this.reliabilityIndex=0;
      this.staticsIndex=0;
      this.getYear(0)
     },
      methods: {
        //可靠性管理查询
        reliabilitySelect(number){
          //console.log(number);
          this.reliabilityIndex = number;
          console.log(this.navList[number].name);
        },
        //指标分析统计
        staticsSelect(number){
          console.log(number);
          this.staticsIndex = number;
          console.log(this.bottomNavList[number].name);
        },
        targetSelect(number){
          this.targetIndex = (number=='0'?true:false)
          console.log(number);
        },
        //获取选择的时间
        handleChange(date){
          this.valueItem = date;
          console.log(date,5555)
        },
        getYear(num){
          let that = this;
          that.yearMonthList = [];
          if(num<0){
            --that.numIndex
          }else if(num==0){
             that.numIndex = 0
          }else{
            ++that.numIndex
          }
          let data = new Date();
          let yearNow = data.getFullYear()+that.numIndex;
          this.curYear = yearNow;
          for(let i=1;i<=12;i++){
            that.yearMonthList.push(yearNow+"年"+i+"月")
          }
            //console.log(that.yearMonthList);
      },
      animateFlag(){
          this.show=!this.show
      },
      defactEchart(){
         let myChart = this.$echarts.init(document.getElementById('defactEchart'))
            myChart.setOption({
              legend: {
                    data:['甲','乙','丙','丁','戊']
                },
                xAxis : [
                    {
                        type : 'category',
                        // data : ['周一','周二']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'甲',
                        type:'bar',
                        data:[320, 332],
                        itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#F5515F'},
                                 
                                    {offset: 1, color: '#9F041B'}
                                ]
                            )
                        },
                    },
                    },
                    {
                        name:'乙',
                        type:'bar',
                        data:[150, 232],
                        itemStyle: {
                         normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#F5B551'},
                                 
                                    {offset: 1, color: '#9F0B04'}
                                ]
                            )
                        },
                    },
                    },
                    {
                        name:'丙',
                        type:'bar',
                        data:[862, 1018],
                        itemStyle: {
                         normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#F7EF00'},
                                 
                                    {offset: 1, color: '#9F5C04'}
                                ]
                            )
                        },
                    }, 
                    },
                    {
                        name:'丁',
                        type:'bar',
                        data:[620, 732],
                        itemStyle: {
                         normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#8AFA35'},
                                 
                                    {offset: 1, color: '#D0A934'}
                                ]
                            )
                        },
                    },
                    },

                    {
                        name:'戊',
                        type:'bar',
                        data:[620, 732],
                        itemStyle: {
                         normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#51F5A1'},
                                 
                                    {offset: 1, color: '#E3F82F'}
                                ]
                            )
                        },
                    },
                    }
                ]
            })
      },
      curveEchart(){
        let myChart = this.$echarts.init(document.getElementById('curveEchart'))
            myChart.setOption({
              tooltip : {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              }
          },
          legend: {
              data:['一期曲线','二期曲线']
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  boundaryGap : false,
                  data : ['周一','周二','周三','周四','周五','周六','周日']
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'一期曲线',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'二期曲线',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[220, 182, 191, 234, 290, 330, 310]
              }
          ]
        })
      },
      loadEchart(){
        let myChart = this.$echarts.init(document.getElementById('loadEchart'))
            myChart.setOption({
               tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['#1机组','#2机组','#3机组','#4机组','#5机组','#6机组']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'#1机组',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210,120]
                },
                {
                    name:'#2机组',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310,100]
                },
                {
                    name:'#3机组',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410,130]
                },
                {
                    name:'#4机组',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 301, 334, 300, 330, 320,188]
                },
                {
                    name:'#5机组',
                    type:'line',
                    stack: '总量',
                    data:[120, 232, 401,234, 129, 133, 132,344]
                },
                {
                    name:'#6机组',
                    type:'line',
                    stack: '总量',
                    data:[120, 232, 101, 334, 129, 133, 132,344]
                }
            ]
            })
      },
       rateEchart(){
         let myChart = this.$echarts.init(document.getElementById('rateEchart'))
            myChart.setOption({
                tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                data:['库存','浪费','耗用']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'库存'},
                        {value:310, name:'浪费'},
                        {value:234, name:'耗用'},
                       
                    ]
                }
            ]
            })
      }
      
  }
}
</script>
<style scoped>
 .ivu-input {
    padding-right: 0px ! important;
}
.home{padding-right:10px;}
.nav{display: flex;align-items: center;justify-content: space-between;color: #fff;list-style-type: none;width:100%;margin: 20px 0;text-align: center;}
.nav div{background: #CE2222;color:#fff;text-shadow: 0 2px 4px rgba(0,0,0,0.24);padding:2px 20px;}
.nav ul{display:flex;}
.nav ul li{margin-left:20px;color: rgba(0,0,0,0.64);font-weight: bold;font-size: 15px;cursor: pointer;}
.curNav{color: #CC2828 ! important;}

.top{display:flex;justify-content: space-between;}
.topLeft{width:calc(30% - 5px);background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:5px;}
.topMiddle{width:calc(40% - 5px);background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:5px;}
.topRight{width:calc(30% - 5px);background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:5px;}
.topTitle{display: flex;justify-content: space-between;padding-top: 10px;}
.topTitle .div{margin-left: -10px;background: #CE2222;color: #fff;padding: 1px 10px;}
.task{display:flex;flex-wrap: wrap}
.task li{width:33%;margin:20px 0;}
.task li:not(:nth-child(3n)){border-right:2px solid rgba(0,0,0,0.12); }
.task li p:first-child{font-size: 18px;color: rgba(0,0,0,0.72);font-weight:bold;}
.task li p:last-child{font-size: 12px;color: rgba(0,0,0,0.36);}
.newsList li{display:flex;justify-content: space-around;line-height: 40px}
.newsList li p:first-child{font-size:14px;color: rgba(0,0,0,0.72);}
.newsList li p:last-child{font-size: 12px;color: rgba(0,0,0,0.36);}

.twoPart{display:flex;justify-content: space-between;margin-top:10px;}
.one{background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:5px;width:calc(30% - 5px);}
.two{background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:5px;width:calc(17.5% - 5px);}
.three{background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:5px;width:calc(17.5% - 5px);}
.four{background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:5px;width:calc(17.5% - 5px);}
.five{background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:5px;width:calc(17.5% - 5px);}
.one table{margin-top:10px;font-size: 14px;width:100%;}
.one table th,.one table td{width:24%;height:30px;}
.one table th:first-child,.one table td:first-child{width:18%;height:30px;}
.one table th:last-child,.one table td:last-child{width:34%;height:30px;}
.two ul,.three ul,.four ul,.five ul{margin-top:10px;}
.two li,.three li,.four li,.five li{font-size: 12px;line-height: 30px;overflow: hidden;width: 100%;height: 30px;}

.threePart{display:flex;justify-content: space-between;margin-top:10px;}
.threeLeft,.threeRight{background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:5px;}
.threeLeft{width:calc(50% - 5px);display: flex;justify-content: space-between;align-items: center;}
.threeRight{width:calc(50% - 5px);display: flex;justify-content: space-between;}
.threeDis{display: flex;align-items: center;width: 110px;}
.threeDis ul li{padding:10px 0;}
.threeDis ul li p:first-child{width:100px;font-size: 20px;color: rgba(0,0,0,0.72);    font-weight: bold; }
.threeDis ul li p:last-child{font-size: 16px;color: rgba(0,0,0,0.36);}
.threeDis ul li:nth-child(2){border-top:3px solid rgba(0,0,0,0.12);border-bottom:3px solid rgba(0,0,0,0.12);}
.threeRightRight,.threeRightMiddle{width:calc(50% - 65px);background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:5px;}
.threeRightRight>p,.threeRightMiddle >p{font-weight: bold}
.threeRightRight ul{margin-top:5px;}
.threeRightRight li{display:flex;justify-content: space-between;line-height: 25px;}
.lineEchartSelect{display: flex;justify-content: flex-end;}
.lineEchartSelect li{border: 1px solid rgba(0,0,0,0.12);padding: 2px 14px;background: #F5F5F5;cursor: pointer;}
.lineEchartSelect li:nth-child(2){    border-left: none;}
.lineEchartSelect .curLi{background: #fff ! important;border-bottom:2px solid #EA1F20 ! important;}
.yearSelect{display:flex;justify-content: space-between;margin-top:10px}
.prevSelect,.nextSelect{color: #CE2222;cursor: pointer;}
.yearList{display:flex;flex-wrap:wrap;width:100%}
.yearList li{width:50%;height: 20px;margin: 5px 0px;line-height: 20px;}
.yearList li:nth-child(2n){border-left: 2px solid rgba(0,0,0,0.12);}

.containerBox{background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:10px 15px;}
.statics{display:flex;justify-content: space-around;}
.statics li{width:calc(16% - 5px);background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:5px;border-top: 3px solid #CE2222;}
.disLight{font-size: 10px;color: rgba(0,0,0,0.36);}
.p{text-align: right;line-height: 25px;}
.machineType{display:flex;justify-content: space-between;}
.machineType div:nth-child(1){font-weight: bold}
.statics li p:nth-child(1){color: rgba(0,0,0,0.48);}
.statics li p:nth-child(3){color: #0647D3;}
.statics li p:nth-child(5){color: #CE2222;}
.staticsBottom{display:flex;justify-content: space-between;margin-top:10px;}
.staticsBottomLeft,.staticsBottomRight{background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12)}
.staticsBottomLeft{width:calc(60% - 5px);padding:10px 20px;}
.staticsBottomRight{width:calc(40% - 5px);padding:10px 20px;}
.percentLine{position: relative;background: #E4E1E1;border-radius: 100px;width:100%;height:4px;margin: 5px 0 15px;}
.nowPercentLine{position: absolute;width:50%;height:4px;background-image: linear-gradient(-270deg, #F41E1E 0%, #3F0202 100%);box-shadow: 1px 2px 1px 0 rgba(0,0,0,0.24);border-radius: 100px;}

.bottomPart{display:flex;justify-content: space-between;margin:10px 0;}
.bottomPartLeft,.bottomPartRight{width:calc(50% - 5px);background: #FFFFFF;border: 1px solid rgba(0,0,0,0.12);padding:5px;}
.tableTime{display:flex;justify-content: space-between;margin:10px 0;}
.bottomPartLeft table,.bottomPartRight table{font-size: 12px;width:100%;}
.bottomPartLeft table tr th,.bottomPartRight table tr th{background: #FFECEC;
box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12);font-weight: bold;height:30px;line-height: 30px;width:16%;}
.bottomPartLeft table tr th:nth-child(1),.bottomPartRight table tr th:nth-child(1){width:20%;}
.bottomPartLeft table tr td:nth-child(1),.bottomPartRight table tr td:nth-child(1){width:20%;}
.bottomPartLeft table tr td,.bottomPartRight table tr td{border-bottom:1px solid rgba(0,0,0,0.12);height:25px;line-height: 25px;width:16.6%;}

.done{background: #64C468 ! important;}/*已审批*/
.doing{background: #FFC300 ! important;color: rgba(0,0,0,0.64)! important;}/*审批中*/
.undo{background: #ECECEC ! important;color: rgba(0,0,0,0.64)! important;}/*未启动*/
.metalActive{color: #F02D2D;}
.reportActive{background: #DF1515;color:#fff;border-radius: 5px;padding: 0 10px;}
  .hideBox{
            width:300px;
            height:300px;
            background: red;
        }
        .fade-enter-active, .fade-leave-active{
            transition: 1s all ease;
        }

        .fade-enter-active{
            opacity:1;
            width:300px;
            height:300px;
        }
        .fade-leave-active{
            opacity:0;
            width:100px;
            height:100px;
        }

        .fade-enter,.fade-leave{
            opacity:0;
            width:100px;
            height:100px;
        }
</style>
