<template>
    <Layout classPrefix="layout">
      <Numberpad/>
      <Notes/>
      <Types/>
      <Tags/>
    </Layout>
</template>

<script lang="ts">
import Numberpad from "@/components/money/Numberpad.vue";
import Notes from "@/components/money/Notes.vue";
import Types from "@/components/money/Types.vue";
import Tags from "@/components/money/Tags.vue";
export default {
  name: "Money",
  components: {Tags, Types, Notes, Numberpad},
};
</script>
<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>
<style lang="scss" scoped>

</style>