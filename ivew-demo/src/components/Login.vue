<template>
	<div class="loginCon">
		<div class="loginCenter">
			<div class="sideBar">
				<img :src="sideBar" />
			</div>
			<div class="loginBox">
				<div class="loginTitle"><span>IVIEW</span>按需引入Demo</div>

				<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
					<FormItem prop="userName" class="inputBox">
						<Input v-model="formInline.userName" placeholder="请输入用户名">
						    <Icon type="ios-person-outline" slot="prepend"></Icon>
					    </Input>
					 </FormItem>
					 <FormItem prop="password" class="inputBox">
						<Input v-model="formInline.password" placeholder="请输入密码">
						    <Icon type="ios-locked-outline" slot="prepend"></Icon>
					</Input>
					</FormItem>
					<FormItem prop="code" class="inputBox codeBox" style="display:flex;justify-content: space-between;width:100%">
						<Row>
			                <Col span="14">
			                   <Input v-model="formInline.code" placeholder="请输入验证码" >
								   <Icon type="key" slot="prepend"></Icon>
							    </Input>
			                </Col>
			                <Col span="10">
			                <Button style="width:calc(100% - 10px);margin-left:10px" @click="creatCode">{{codeString}}</Button>
			                    <!-- <Input v-model="codeString" style="width:calc(100% - 10px);margin-left:10px" @click="creatCode"></Input> -->
			                </Col>
			            </Row>
					</FormItem>
					<FormItem class="button">
					 <Button type="primary"  @click="handleSubmit('formInline')">登录</Button>
					</FormItem>
				  </Form>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
            var validatecode= validatecode = function(rule, value, callback){
		  		let that = this
		  		console.log(that.formInline.code)
                if(!value){
                    return callback(new Error("请输入验证码"));
                }else if(that.codeString!=value){
                	console.log(that.codeString,'11')
                	console.log(value,'22')
                    return callback(new Error("请正确输入的验证码"))
                }else{
                    callback();
                }
            };
			return{
				sideBar:require('../assets/img/side1.jpg'),
				codeString:'',
				
				formInline: {
                    userName:'',
					password:'',
					code:'',
					//codeString:'',
                },
                ruleInline: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'number', min: 6, message: '密码不能少于6位数的数字', trigger: 'blur' }
                    ],
                    code: [
                    {validator: validatecode,trigger: 'blur'}
                        // { required: true, message: '请输入验证码', trigger: 'blur' },
                        // { type: 'string', min: 4, message: '密码不能少于6位数', trigger: 'blur' },
                        //  { type: 'string',pattern:/^(([1-9]\d{0,3})|0)(\.\d{0,2})?$/, message:'数量应为正浮点数且不超过9999.99', trigger:'blur'},
                    ],
                }
				
			};

		},
		created(){
          this.creatCode();
          console.log(this.validatecode)
        
		},
		mounted(){
          
		},
		methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
               //this.$router.push({path: '/Home'})
                this.$store.state.loginFlag=false
            },
            creatCode(){
               this.codeString = '';
               let randomArray = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
               for(var i=0;i<4;i++){
	               let codeIndex=Math.floor(Math.random()*61);
				   this.codeString += randomArray[codeIndex];
               }
               	console.log(this.codeString)
              
            },
        }
	}
</script>
<style scoped>
body{padding-right: 0}
.loginCenter{width: 40%;display: flex;justify-content: space-between;box-shadow: 0px 2px 21px rgba(245, 239, 239, 0.6);}
.loginCon{position: fixed;display: flex;justify-content: center;align-items: center;width:100%;height:100%;background-image:url('../assets/img/bg.jpg');background-repeat: no-repeat;background-size: cover;background-position: center center;}
.sideBar{width:30%;}
.sideBar img{width:100%;height:100%;}
.loginBox{background: #fff;padding:20px 10px;width:70%;margin:auto;}
.loginTitle{font-size:18px;font-weight:bold;text-align: left;width:70%;margin:auto;}
.loginTitle span{font-size:30px;color:#2d8cf0;margin-right:10px;}
.inputBox{margin:10px auto;width:70%;}
.inputBox:nth-child(3){margin-bottom:20px;}
.inputBox:nth-child(1){margin-top:5px;}
.button{width:70%;}
button{width:100%;}
.codeBox .ivu-form-item-content{width: 100% ! important;display: flex ! important;justify-content: space-between ! important;}
.ivu-form-inline .ivu-form-item:last-child {margin-right: 0px;}
</style>