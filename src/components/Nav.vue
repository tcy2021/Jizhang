<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      记账
      <Icon name="money"/>
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      标签
      <Icon name="label"/>
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      统计
      <Icon name="statistic"/>
    </router-link>
  </nav>
</template>

<script lang="ts">


export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  font-size: 12px;

  > .item {
    padding: 2px 0;
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column-reverse;

    .icon {
      width: 32px;
      height: 32px;
    }
  }

  > .item.selected {
    color: red
  }
}
</style>