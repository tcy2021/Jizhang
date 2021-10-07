<template>
  <div>
    <ul class="types">
      <li :class="type==='-'&&'selected'" @click="selectType('-')">支出</li>
      <li :class="type==='+'&&'selected'" @click="selectType('+')"> 收入</li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";

@Component
  export default class Types extends Vue{
    type='-'
    selectType(type:string){
      if(type !=='-'&& type!=='+'){
        throw new Error('type is unknow')
      }
      this.type=type
    }
  }
</script>


<style lang="scss" scoped>
.types{
  background: rgb(196, 196, 196);
  display: flex;
  font-size: 24px;
  text-align: center;
  >li{
    width: 50%;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &.selected::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: rgb(51, 51, 51);
    }
  }
}
</style>