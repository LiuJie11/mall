<template>
    <swiper>
        <swiper-item v-for="(item,i) in banners" :key='i'>
            <a :href="item.link">
                <img :src="item.image" alt="" @load='swperImgLoad'>
            </a>
        </swiper-item>
   </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'


export default {
  name: 'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
        isImg:false
    };
  },
  methods: {
    swperImgLoad(){
      if(!this.isImg){
         this.$emit('swperImgLoad')
         this.isImg = true
      }
    }
  },
  components: {
      Swiper,
      SwiperItem
  }

};
</script>


