<template>
  <Layout classPrefix="layout">
    {{record}}
    <Numberpad :value.sync="record.amount"/>
    <Notes @update:value="onUpdateNotes"/>
    <Types :value.sync="record.type"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Numberpad from "@/components/money/Numberpad.vue";
import Notes from "@/components/money/Notes.vue";
import Types from "@/components/money/Types.vue";
import Tags from "@/components/money/Tags.vue";
import {Component} from "vue-property-decorator";

type Record={
  tags:string[]
  notes:string
  type:string
  amount:number
}

@Component({
  components: {Tags, Types, Notes, Numberpad}
})
export default class Money extends Vue {
  tags= ["衣", "食", "住", "行"];
  record:Record={
    tags:[],notes:'',type:'-',amount:0
  }
  onUpdateTags(value:string[]){
    this.record.tags=value
  }
  onUpdateNotes(value:string){
    this.record.notes=value
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>

</style>