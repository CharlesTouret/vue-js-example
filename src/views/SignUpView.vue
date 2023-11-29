<script setup lang="ts">
import Signup from '../components/SignUpMainComp.vue'
import HelloWorld from '../components/HelloWorld.vue';
</script>

<template>
  <main>
    <HelloWorld msg="Finance Management" />
    <Signup />
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