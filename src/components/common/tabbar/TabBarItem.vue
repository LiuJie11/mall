<template>
   <div class="tab-bar-item" @click='handleJump'>
         <div v-if='!isActive'>
             <slot name='item-icon'></slot>
         </div>
        <div v-else>
             <slot name='item-icon-active'></slot>
        </div>
        <div :style='activeStyle'>
            <slot name='item-text'></slot>
        </div>
   </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        link:String,
        activeCol:{
            type:String,
            default:'red'
        }
    },
    data(){
        return {
           
        }
    },
    methods:{
        handleJump(){
            if(!this.isActive){
                this.$router.replace(this.link)
                //console.log(this.$route.path.indexOf(this.link)!==-1)
            }
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.link)!==-1
        },
        activeStyle(){
            return  this.isActive?{color:this.activeCol}:{}
        }
    }
}
</script>

<style>

 .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-top: 2px;
      margin-bottom: 2px;
  }
  

</style>
