<template>

<div class="box"><div class="topss iconfont icon-xiangzuojiantou" @click="gos()"></div>这是renwen页面</div>
</template>
<script>
export default {
	name:"renwen",
	methods:{
		gos(){
			this.$router.go(-1)
		}
	}
}

</script>
<style>
*{
	background:yellow;
	font-size: 30px;
}
.box{
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
}
</style>