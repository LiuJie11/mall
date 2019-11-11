<template>
      <div id="tab-bar">
          <slot></slot>
      </div>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style>
    #tab-bar {
    display: flex;
    position: fixed;
    background: #f6f6f6;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    box-shadow: 0 -1px 1px rgba(100, 100n, 100, 0.1);
    z-index: 99;
  }
</style>
