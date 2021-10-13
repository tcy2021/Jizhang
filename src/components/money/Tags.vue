<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" @click="toggle(tag)" :class="{selected:selectedTags.indexOf(tag)>=0}">{{tag}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
@Component
export default class Tags extends Vue{
  @Prop(Array) readonly dataSource:string[]|undefined
  selectedTags:string[]=[]
  toggle(tag:string){
    if(this.selectedTags.indexOf(tag)>=0){
      this.selectedTags.splice(this.selectedTags.indexOf(tag),1)
    }else{
      this.selectedTags.push(tag)
    }
  }
  create(){
    const  name = window.prompt('请输入标签名')
    if (name===''){
      window.alert('标签名不能为空')
    } else if (this.dataSource){
      this.$emit('update:dataSource',[...this.dataSource,name])
    }
  }
}
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
      &.selected{
        outline: 1px solid red;
      }
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