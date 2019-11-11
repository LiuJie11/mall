<template>
    <div id='home'>
        <nav-bar class='home-title'>
            <div slot="nav-bar-middle">购物车</div>
        </nav-bar>
         <tab-control 
                class="fixed"
                :titles='titles' 
                @goodListClick='goodListClick'
                ref="tabControl1"
                v-show="isTabControl"
            />
        <scroll 
            class="content"
            ref='content'
            :probeType='3'
            :pullUpLoad='true'
            @scroll='scrollContent'
           @pullingUp='loadMore'
        >
            <home-swiper 
                :banners='banners' 
                @swperImgLoad='swperImgLoad'
            />
            <recommend-view 
                :recommend='recommend'
                @reImgLoad = 'reImgLoad'
            />
            <feature-view/>
            <tab-control 
                :titles='titles' 
                @goodListClick='goodListClick'
                ref="tabControl"
            />
            <product-view :list='this.showgoods'/>
        </scroll>
        <back-top v-show='isBackTop' @click.native="backTop"/>
    </div>
   
</template>

<script>
import HomeSwiper from './childs/HomeSwiper'
import RecommendView from './childs/RecommendView'
import FeatureView from './childs/FeatureView'
import ProductView from 'components/content/productview/ProductView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'

import {getHomeMultidata,getGoodMultidata} from 'network/home'

import {debounce} from 'common/utils'

export default {
    name:'Home',
    data(){
        return {
            isBackTop:false, //是否显示回到顶部
            titles:['流行','新款','精选'],
            banners:[],
            recommend:[],
            goods:{
                'pop':{ page:0 , list:[] },
                'new':{ page:0 , list:[] },
                'sell':{ page:0 , list:[] },
            },
            type:'pop',
            offsetTop:0,
            isTabControl: false,
            saveY:0
        }
    },
    components: {
        HomeSwiper,
        RecommendView,
        FeatureView,
        ProductView,
        NavBar,
        TabControl,
        Scroll,
        BackTop
    },
    computed: {
      showgoods(){
          return this.goods[this.type].list
      }  
    },
    methods: {
        //监听轮播图是否加载完成 加载完成获取tab-control距离顶部的距离
        swperImgLoad(){
            this.offsetTop = this.$refs.tabControl.$el.offsetTop;
           // console.log(this.$refs.tabControl.$el.offsetTop)
        },
        // 监听轮播下面的图片
        reImgLoad(){
            this.offsetTop = this.$refs.tabControl.$el.offsetTop;
             //console.log(this.$refs.tabControl.$el.offsetTop)
        },
       
        // 监听滚动的值
        scrollContent(options){
            this.isBackTop = -(options.y)>800;
            this.isTabControl= -(options.y)>this.offsetTop;
        },

        // 点击回到顶部
        backTop(){
            this.$refs.content.scrollTop(0,0)
        },

        // 实现上拉加载跟多
        loadMore(){
            this.getGoodMultidata(this.type);
        },

        //切换tab获取index值
        goodListClick(index){
            switch (index) {
                case 0:
                  this.type='pop'
                break;
                case 1:
                  this.type='new'
                break;
                case 2:
                  this.type='sell'
                break;   
            }
            this.$refs.tabControl1.currentIndex =index;
            this.$refs.tabControl.currentIndex = index;
        },
        
        //网络请求
        getHomeMultidata(){
            //轮播图数据
             getHomeMultidata().then(res=>{
                this.banners = res.data.banner.list
             })
              //轮播下面列表
            getHomeMultidata().then(res=>{
                this.recommend = res.data.recommend.list
            })
        },

        // 商品列表
        getGoodMultidata(type){
            let page = this.goods[type].page + 1;
            getGoodMultidata(type,page).then(res=>{
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page += 1
                this.$refs.content.finishPullUp();
               //console.log(this.goods);
            })
        },

        
        
    },
    mounted () {
        //监听item图片加载完成
        const refresh = debounce(this.$refs.content.refresh,50)
        this.$bus.$on('imgItemLoad',()=>{
            refresh()
        })
    },
    created () {
        this.getHomeMultidata();
        this.getGoodMultidata('pop');
        this.getGoodMultidata('new');
        this.getGoodMultidata('sell');
    },
    // 进入的时候回到离开时的位置
    activated () {
       this.$refs.content.scrollTop(0,this.saveY,0);
       this.$refs.content.refresh();
    },
    //离开的时候记录位置
    deactivated () {
        this.saveY = this.$refs.content.getScrollY()
        //console.log(this.saveY);
    }
}
</script>

<style scoped>
    #home{
        height: 100vh;
        position: relative;
    }
    .home-title{
        background: var(--color-tint);
        color: #fff;
        /* position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9; */
    }
    .fixed{
        position: relative;
        z-index: 9;
        margin-top: -1px;
        /* background: red; */
    }
    /* .tab-control{
       position: sticky;
       top: 44px;
       z-index: 9;
    } */
    /* 方法二 给父加相对定位 */
     .content{
       position: absolute;
       top: 44px;
       bottom: 49px;
       left: 0;
       right: 0;
       overflow: hidden;
   }
    /* 方法一 */
   /* .content{
       height: calc(100% - 93px);
       margin-top: 44px;
       overflow: hidden;
   } */
  
</style>
