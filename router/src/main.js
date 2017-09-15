import Vue from "vue"
import Router from "vue-Router"
import index from "./vue/ym/index.vue"
//一级路由
import home from "./vue/one/home.vue"
import me from "./vue/one/me.vue"
import dirco from "./vue/one/dirco.vue"
import login from "./vue/one/login.vue"

//二级路由
import hot from "./vue/two/hot.vue"
import fen from "./vue/two/fen.vue"
import jing from "./vue/two/jing.vue"
import zhi from "./vue/two/zhi.vue"
import guang from "./vue/two/guang.vue"

//三极路由
import music from "./vue/three/music.vue"
import lishi from "./vue/three/lishi.vue"
import gan from "./vue/three/gan.vue"
import renwen from "./vue/three/renwen.vue"

export default "./vue/ym" 
var router = new Router({
	routes:[
		{
			name:"home",
			path:'/home',
			component:home,
			children:[
				{
					name:"hot",
					path:'hot',
					component:hot,
					children:[
						{
							name:"music",
							path:'music',
							component:music
						},
						{
							name:"lishi",
							path:'lishi',
							component:lishi
						},
						{
							name:"gan",
							path:'gan',
							component:gan
						},
						{
							name:"renwen",
							path:'renwen',
							component:renwen
						}
					]
				},
				{
					name:"fen",
					path:'fen',
					component:fen
				},
				{
					name:"jing",
					path:'jing',
					component:jing
				},
				{
					name:"zhi",
					path:'zhi',
					component:zhi
				},
				{
					name:"guang",
					path:'guang',
					component:guang
				}
			]
		},
		{
			name:"me",
			path:'/me',
			component:me
		},
		{
			name:"dirco",
			path:'/dirco',
			component:dirco
		},
		{
			name:"login",
			path:'/login',
			component:login
		}
	]
})

Vue.use(Router)
new Vue({
	el:"#app",
	router,
	template:"<div class='box'><index></index></div>",
	components:{
		index:index
	}
})