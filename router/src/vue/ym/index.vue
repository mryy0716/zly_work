<template>
	<div class="box">
		<header class="header">
			<div class="left iconfont">&#xe676;</div>
			<div class="center"><i class="iconfont">&#xe648;</i><input type="text" placeholder="观复嘟嘟|采采|鬼故事"></div>
			<div class="right"><i class="iconfont">&#xe6b2;</i><i class="iconfont">&#xe724;</i></div>
		</header>

		<div class="main">
			<router-view></router-view>
		</div>
		
		<footer class="footer">
			<ul>
				<router-link to="/home" tag="li">
					<i class="iconfont icon-home_light"></i>
					<span>首页</span>
				</router-link>
				<router-link to="/me" tag="li">
					<i class="iconfont icon-we_light"></i>
					<span>我的</span>
				</router-link>
				<router-link to="" tag="li">
					<b><img src="1.jpg"></b>
				</router-link>
				<router-link to="/dirco" tag="li">
					<i class="iconfont icon-my_light"></i>
					<span>发现</span>
				</router-link>
				<router-link to="/login" tag="li">
					<i class="iconfont icon-301"></i>
					<span>未登录</span>
				</router-link>
			</ul>
		</footer>
	</div>
</template>
<script>
	import { default as jsFn} from "./js/js.js"
	import "./css/style.css"
	jsFn()
</script>
<style>

</style>