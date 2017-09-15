<template>
<div class="main">
<div class="top">
				<ul>
					<router-link :to="{path:'/home/hot'}" tag="li" class="active">热门</router-link>
					<router-link :to="{path:'/home/fen'}" tag="li" class="active">分类</router-link>
					<router-link :to="{path:'/home/jing'}" tag="li" class="active">精品</router-link>
					<router-link :to="{path:'/home/zhi'}" tag="li" class="active">直播</router-link>
					<router-link :to="{path:'/home/guang'}" tag="li" class="active">广播</router-link>
				</ul>
</div>
<div class="mid">
				<router-view></router-view>
</div>
</div>
</template>
<script>

  export default {
    name:"home",
    data(){
      return {
        
      }
    }
  }

</script>
<style>
.active{
        color: orange;
        height: 0.77rem;
        line-height: 0.77rem;
        border-bottom:0.03rem solid orange;
      }
.main{
  background:#fff;
}
.main .top{
    width: 100%;
    height: 0.8rem;
    background: #f6f6f6;
    border-top: 1px solid #cecece;
    }
 .main .top ul{
      display: flex;
      align-items: center;
      height: 0.8rem;}
    .main .top ul  li{
        flex:1;
        font-size: 0.28rem;
        color: #333;
        text-align: center;
      }
    
 
</style>