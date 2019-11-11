<template>
  <div class='nav-bar'>
      <div class='nav-bar-left'>
          <slot name='nav-bar-left'></slot>
      </div>
       <div class='nav-bar-middle'>
          <slot name='nav-bar-middle'></slot>
      </div>
       <div class='nav-bar-right'>
          <slot name='nav-bar-right'></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
        line-height: 44px;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .1)
    }
    .nav-bar-left,.nav-bar-right{
        width: 60px;
    }
    .nav-bar-middle{
        flex: 1;
        text-align: center;
    }
</style>
