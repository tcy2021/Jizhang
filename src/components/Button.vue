<template>
  <button class="button" @click="$emit('click',$event)">
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button{
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