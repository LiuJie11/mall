<template>
  <div class='wrapper' ref="wrapper">
      <div class='content'>
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
      probeType:{
          type:Number,
          default:0
      },
      pullUpLoad:{
          type:Boolean,
          default:false
      }
  },
  data() {
    return {
        scroll:null
    };
  },
  mounted () {
      // 1.创建BSScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
          click:true,
          probeType:this.probeType,
          pullUpLoad: this.pullUpLoad
      })

      // 2.监听滚动事件的位置 
      if(this.probeType==2||this.probeType==3){
            this.scroll.on('scroll',(options)=>{
            this.$emit('scroll',options)
         })
      }
     
      // 3.监听上拉加载更多
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
        })
      }
     

  },
  methods: {
      // 实现对到指定位置
      scrollTop(x,y,time=300){
         this.scroll && this.scroll.scrollTo(x,y,time);
      },
      //触发底部刷新
      finishPullUp(){
         this.scroll && this.scroll.finishPullUp()
      },
      //图片加载重新计算可滚动的区域
      refresh(){
          //console.log('重新计算高度')
         this.scroll && this.scroll.refresh();
      },
      //获取滚动到什么位置
      getScrollY(){
        return this.scroll?this.scroll.y:0
      }

  }
};
</script>

<style scoped>

</style>
