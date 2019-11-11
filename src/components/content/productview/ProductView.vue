<template>
    <div class='goods'>
        <product-item v-for="(item,i) in list" :key='i' :item='item'></product-item>
    </div>
</template>

<script>
import ProductItem from './RroductItem'
export default {
  name: 'ProductView',
  props: {
      list:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {
      ProductItem 
  },
  methods: {},
};
</script>

<style scoped>
    .goods{
        /* display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        padding: 2px; */
        width: 100%;
		-moz-column-count: 2;
		-webkit-column-count: 2;
		column-count: 2;
        background: #F7F7F7;
        padding: 10px 8px;
    }
</style>
