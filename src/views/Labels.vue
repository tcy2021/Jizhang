<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="tag in tags" :key="tag.id">
          <span>{{ tag.name }}</span>
          <Icon name="right"/>
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";

tagListModel.fetch()
@Component
export default class Labels extends Vue{
  tags= window.tagList

  createTag(){
    const name = window.prompt('请输入标签名')
    if(name){
     const message= tagListModel.create(name)
      if(message==='duplicated'){
        window.alert('标签名重复了')
      } else if(message==='success'){
        window.alert('添加成功')
      }
    }
}
}
</script>

<style lang="scss" scoped>
.tags{
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag{
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(224, 223, 226);
    svg{
      color: rgb(64, 64, 64);
      width: 18px;
      height: 18px;
      margin-right: 16px;
    }
  }
}
.createTag{
  background: rgb(118, 118, 118);
  padding: 9px 15px 9px 16px;
  border: none;
  color: white;
  border-radius: 4px;
  margin-top: 44px;
  &-wrapper{
    text-align: center;
  }
}

</style>