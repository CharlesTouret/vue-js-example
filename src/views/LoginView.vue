<script setup lang="ts">
import Login from '../components/LoginMainComp.vue'
import HelloWorld from '../components/HelloWorld.vue';
</script>

<template>
  <main>
    <HelloWorld msg="Finance Management" />
    <Login />
  </main>
</template>

<style scoped>
    main {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100vh;
        align-self: center;
        justify-self: center;
    }
</style>
