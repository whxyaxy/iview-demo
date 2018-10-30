<template>
	<div>
		<ul class="nav" :default-active="$route.path">
			<router-link :to="{path:item.path}" v-for="(item,index) in routerList" :key="index">
				<li><div :class=" 'active' + index" :style="{'background-image':'url('+item.imgUrl+')'}"></div></li>
			</router-link>			
			<!-- <li v-for="item in routerList">
				<router-link :to="{path:item.path}" tag="img" :src="'item.router-link-active'?'item.imgCur':'item.imgUrl'"></router-link>
			</li> -->
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				routerList:[
				  {
				  	imgUrl:require('../assets/img/1.png'),
				  	imgCur:require('../assets/img/1-active.png'),
				  	 path: 'Home',
				  },
				  {
				  	imgUrl:require('../assets/img/2.png'),
				  	imgCur:require('../assets/img/2-active.png'),
				  	 path: 'Second',
				  },
				  {
				  	imgUrl:require('../assets/img/3.png'),
				  	imgCur:require('../assets/img/3-active.png'),
				  	 path: 'Third',
				  },
				  {
				  	imgUrl:require('../assets/img/4.png'),
				  	imgCur:require('../assets/img/4-active.png'),
				  	 path: 'Last',
				  }
				]
			}
		},
		methods:{

		}
	}

</script>


<style scoped>
.nav {width:55px;height:100%;}
.nav li{position: relative;width:55px;height:50px;border-right:5px solid #fff;}
.nav div{position: absolute;top:0;text-decoration: none;margin:10px;width:30px;height:30px;background-repeat: no-repeat;background-position: center;background-size: 30px 30px;}
.router-link-active li{border-right:5px solid #ce2222 !important;}
.router-link-active .active0{background-image:url('../assets/img/1-active.png') ! important}
.router-link-active .active1{background-image:url('../assets/img/2-active.png') ! important}
.router-link-active .active2{background-image:url('../assets/img/3-active.png') ! important}
.router-link-active .active3{background-image:url('../assets/img/4-active.png') ! important}
</style>