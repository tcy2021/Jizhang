<template>
  <Layout classPrefix="layout">
    {{ recordList }}
    <Numberpad :value.sync="record.amount" @submit="saveRecord"/>
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
import {Component, Watch} from "vue-property-decorator";
import model from "@/model";

const recordList= model.fetch();


@Component({
  components: {Tags, Types, Notes, Numberpad}
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  // eslint-disable-next-line no-undef
  recordList: RecordItem[] = recordList;
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [], notes: "", type: "-", amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    // eslint-disable-next-line no-undef
    const record2: RecordItem = model.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch("recordList")
  onRecordListChange() {
   model.save(this.recordList)
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