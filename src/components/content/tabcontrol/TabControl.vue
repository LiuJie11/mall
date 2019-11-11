<template>
  <div class='tab-control'>
      <div 
        v-for="(item,index) in titles" 
        :key='index'
        class='tab-control-item'
        :class='{active: index==currentIndex}'
        @click='handleCurrent(index)'
      >
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles:{
        type:Array,
        default(){
            return []
        }
    }
  },
  data() {
    return {
      currentIndex:0
    };
  },
  methods: {
    handleCurrent(index){
      if(this.currentIndex!=index){
       this.currentIndex=index;
       this.$emit('goodListClick',index)
      }
    }
  }
};
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        background: #fff;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .tab-control-item{
        flex: 1;
    }
    .tab-control-item span{
      padding-bottom: 8px;
    }
    .active{
        color:var(--color-high-text)
    }
    .active span{
      border-bottom: 2px solid var(--color-tint);
    }
</style>
