<template>
  <div class='recommend'>
      <div class='re-item' v-for="(item,i) in recommend" :key='i'>
          <a :href='item.link'>
              <img :src="item.image" alt="" @load="reImgLoad">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
import {getHomeMultidata} from 'network/home'
export default {
  name: 'RecommendView',
  props: {
     recommend:{
         type:Array,
         default(){
             return []
         }
     }
  },
  data () {
      return {
          isReImg: false
      }
  },
  methods: {
      reImgLoad(){
          if(!this.isReImg){
              this.$emit('reImgLoad')
              this.isReImg=true;
          }
      }
  }
};
</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
    }
    .re-item {
        flex: 1;
    }
    .re-item img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>
