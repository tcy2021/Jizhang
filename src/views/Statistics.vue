<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>统计</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: "Statistics",
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
}

.content {
  overflow: auto;
  flex-grow: 1;
}
</style>