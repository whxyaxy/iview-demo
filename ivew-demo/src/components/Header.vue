<template>
	<div class="topHeader">
		<div class="header">
			<!-- <div class="headerLeft"><img :src="logo"></div> -->
			<div class="headerLeft">iview按需引入demo</div>
			<div class="headerRight">
				<span class="imgBox"><img :src="user"></span><span>管理员</span>
				<tooltip content="退出登录"><img :src="out" class="out"  @click="outLogin = true">
				</tooltip>
			</div>
		</div>
		<div class="topEnd"></div>
		<Modal v-model="outLogin" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="information-circled"></Icon>
            <span>退出登录</span>
        </p>
        <div style="text-align:center">
          
            <p>您确定要退出登录？</p>
        </div>
        <div slot="footer">
           <!--  <Button type="error" size="large" long :loading="modal_loading" @click="$store.state.loginFlag=true">退出登录</Button> -->
            <Button type="error" size="large" long :loading="modal_loading" @click="del ()">退出登录</Button>
        </div>
       </Modal>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				logo:require('../assets/img/logo.png'),  
				user:require('../assets/img/user.png'),
				out:require('../assets/img/out.png'),
				outLogin:false,
				modal_loading: false,
			}
		},
		 methods: {
           del () {
           	     this.outLogin = false;
            	 this.$store.state.loginFlag = true
                //this.$router.push({path: '/Login'})
            }
        },
        computed:{
            
        }
	}
</script>
<style scoped>
/*.ivu-tooltip-rel {display: flex;align-items: center;}*/
.header{display:flex;justify-content: space-between;width:calc(100% - 40px);align-items: center;padding:10px 20px;}
.headerLeft img{height:55px;width:55px;box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);border-radius: 50%;}
.headerLeft{font-size: 24px;text-shadow: 0px 2px 1px rgba(0,0,0,0.5);font-weight: bold;color: #ce2222;}
.headerRight{display: flex;align-items: center;cursor: pointer;}
.imgBox{display:inline-block;background: #D8D8D8;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);height:50px;width:50px;border-radius: 50%;margin-right:10px;}
.imgBox img{height:50px;width:50px;border-radius: 50%;}
.out{margin-left:10px;}
.topEnd{width:100%;height:4px;background-image: linear-gradient(-90deg, #FF0000 0%, #383838 100%);}
</style>