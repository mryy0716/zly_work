<template>
<div class="box">
<div class="topss iconfont icon-xiangzuojiantou" @click="gos()">返回</div>
这是music页面
</div>
</template>
<script>
export default {
	name:"music",
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