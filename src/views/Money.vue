<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>记账</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money",
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