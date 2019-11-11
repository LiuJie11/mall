<template>
  <div class='item'>
      <img :src='item.show.img' @load='imgLoad'/>
      <div class='item-info'>
           <p>{{item.title}}</p>
           <div>
            <span class="price">{{item.price}}</span>
            <span class="collect">{{item.cfav}}</span>
           </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
      item:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  data() {
    return {
    };
  },
  methods: {
    imgLoad(){
     this.$bus.$emit('imgItemLoad')
    }
  },
};
</script>

<style scoped>
    .item{
        height:100%;
		overflow: auto;
        border-radius: 8px;
        background: #fff;
        margin-bottom: 10px;
        -moz-page-break-inside: avoid;
        -webkit-column-break-inside: avoid;
        break-inside: avoid; 
    }
    .item  img{
        width: 100%;
        border-radius: 8px 8px 0 0;
        vertical-align: middle;
    }

    .item-info{
        overflow: hidden;
        text-align: center;
    }
    .item-info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 5px;
    }
    .item-info div{
        padding: 10px 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
     .item-info .price {
      color: var(--color-high-text);
      margin-right: 20px;
   }

  .item-info .collect {
    position: relative;
  }

  .item-info .collect::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
