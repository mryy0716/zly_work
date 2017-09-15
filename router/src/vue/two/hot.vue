<template>

  <div class="mid">
      <ul>
          <router-link :to="{path:item.src}" v-for="(item,index) in data" :key="index" tag="li">
              <i :color="item.color" class="iconfont" :class="item.img"></i>
              <span>{{item.tex}}</span>
          </router-link>
      </ul>
      <router-view></router-view>
  </div>
</template>
<script>
var data = [
        {
            "img":"icon-musicfill",
            "tex":"音乐",
            "color":"pink",
            "src":"/home/hot/music"
        },
        {
            "img":"icon-lightforbid",
            "tex":"历史",
            "color":"skyblue",
            "src":"/home/hot/lishi"
        },
        {
            "img":"icon-wefill",
            "tex":"情感生活",
            "color":"red",
            "src":"/home/hot/gan"
        },
        {
            "img":"icon-selectionfill",
            "tex":"人文",
            "color":"skyblue",
            "src":"/home/hot/renwen"
        },
        {
            "img":"icon-presentfill",
            "tex":"付费精品",
            "color":"pink",
            "src":"home/hot/fufei"
        },
        {
            "img":"icon-jushoucang",
            "tex":"脱口秀",
            "color":"orange",
            "src":"home/hot/tuo"
        },
        {
            "img":"icon-erweima",
            "tex":"娱乐",
            "color":"red",
            "src":"home/hot/yule"
        },
        {
            "img":"icon-hot",
            "tex":"英语",
            "color":"pink",
            "src":"home/hot/english"
        },
        {
            "img":"icon-favorite",
            "tex":"教育培训",
            "color":"yellow",
            "src":"home/hot/xun"
        },
        {
            "img":"icon-musicfill",
            "tex":"音乐",
            "color":"pink",
            "src":"home/hot/music1"
        },
        {
            "img":"icon-lightforbid",
            "tex":"历史",
            "color":"skyblue",
            "src":"home/hot/lishi2"
        },
        {
            "img":"icon-wefill",
            "tex":"情感生活",
            "color":"red"
        },
        {
            "img":"icon-selectionfill",
            "tex":"人文",
            "color":"skyblue"
        },
        {
            "img":"icon-presentfill",
            "tex":"付费精品",
            "color":"pink"
        },
        {
            "img":"icon-jushoucang",
            "tex":"脱口秀",
            "color":"orange"
        },
        {
            "img":"icon-erweima",
            "tex":"娱乐",
            "color":"red"
        },
        {
            "img":"icon-hot",
            "tex":"英语",
            "color":"pink"
        },
        {
            "img":"icon-favorite",
            "tex":"教育培训",
            "color":"yellow"
        },
        {
            "img":"icon-musicfill",
            "tex":"音乐",
            "color":"pink"
        },
        {
            "img":"icon-lightforbid",
            "tex":"历史",
            "color":"skyblue"
        },
        {
            "img":"icon-wefill",
            "tex":"情感生活",
            "color":"red"
        }
  ]
    export default {
        name:"hot",
        data(){
            return {
                data:data
            }
        }
    }
</script>
<style>
    .mid{
        width: 100%;
    }
    .mid ul{
        display: flex;
        flex-wrap: wrap;
    }
    .mid ul li{
        width: 24.7%;
        height: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0.01rem;
        background:#f6f6f6;
    }
    .mid ul li  i{
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
        background: skyblue;
        border-radius: 50%;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.3rem;
        color:#fff;
    }
    .mid ul li span{
        font-size: 0.25rem;
        color: #333;
        margin-top: 0.05rem;
    }
</style>