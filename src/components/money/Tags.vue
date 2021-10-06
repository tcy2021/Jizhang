<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Tags"
};
</script>

<style lang="scss" scoped>
.tags{
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  > .current{
    display: flex;
    flex-wrap: wrap;
    >li{
      background: rgb(217, 217, 217);
      height: 24px;
      padding: 0 18px;
      border-radius: 12px ;
      margin-right: 12px;
      display: flex;
      margin-top: 4px; ;
      align-items: center;
    }
  }
  > .new{
    padding: 16px 0 0 0 ;
    button{
      background: transparent;
      border: none;
      color:rgb(153, 153, 153);
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>