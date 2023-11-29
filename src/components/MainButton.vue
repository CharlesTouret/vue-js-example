<script setup lang="ts">
  defineProps<{
    text: string,
  }>();

  const onClickButton = defineEmits(['on-click-button']);

</script>

<template>
    <a class="main-button" @click="onClickButton('on-click-button')">
        <div class="main-button-text">{{text}}</div>
    </a>
</template>
  
<style scoped>
  .main-button {
    display: flex;
    position: relative;
    border-radius: 10%;
    background-color: hsla(160, 100%, 37%, 1);
    cursor: pointer;
  }
  .main-button-text {
    text-align: center;
    width: 100%;
    padding: 5px 10px 5px 10px;
    font-size: 14px;
    color: white;
  }
</style>
  