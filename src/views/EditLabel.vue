<template>
  <Layout>
    <div class="navBar">
      <Icon  class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="font-wrapper">
      <FormItem :value="tag.name"
                :field-name="'标签名'"
                :placeholder="'请输入标签名'"
                @update:value="update"
      />
    </div>
    <div class="buttton-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
import FormItem from "@/components/money/FormItem.vue";
import Button from "@/components/Button.vue";
@Component({
  components: {Button, FormItem}
})
export default class EditLable extends Vue {
  tag?:{id:string,name:string}=undefined
created(){
 const id=this.$route.params.id
  tagListModel.fetch()
  const tags=tagListModel.data
  const tag=tags.filter(t=>t.id===id)[0]
  if(tag){
    this.tag=tag
  }else  {
    this.$router.replace('/404')
  }
}
update(name:string){
    if(this.tag){
      tagListModel.update(this.tag.id,name)
    }
}
remove(){
    if(this.tag){
      if(tagListModel.remove(this.tag.id)){
        this.$router.back()
      }
    }
}
goBack(){
    this.$router.back()
}
}
</script>

<style lang="scss" scoped>
.navBar{
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title{

  }
  > .leftIcon{
    width: 24px;
    height: 24px;
  }
  > .rightIcon{
    width: 24px;
    height: 24px;
  }
}
.font-wrapper{
  background: white;
  margin-top: 8px;
}
.buttton-wrapper{
  text-align: center;
}
</style>