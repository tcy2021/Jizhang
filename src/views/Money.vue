<template>
  <Layout classPrefix="layout">
    {{record}}
    <Numberpad :value.sync="record.amount" @submit="saveRecord"/>
    <FormItem field-name="备注"
           placeholder="在这里输入备注"
           @update:value="onUpdateNotes"/>
    <Types :value.sync="record.type"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Numberpad from "@/components/money/Numberpad.vue";
import FormItem from "@/components/money/FormItem.vue";
import Types from "@/components/money/Types.vue";
import Tags from "@/components/money/Tags.vue";
import {Component, Watch} from "vue-property-decorator";
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";

const recordList= recordListModel.fetch();
const tagList = tagListModel.fetch()

@Component({
  components: {Tags, Types, FormItem, Numberpad}
})
export default class Money extends Vue {
  tags = tagList;
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
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch("recordList")
  onRecordListChange() {
   recordListModel.save(this.recordList)
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