<template>
  <div class='app'>
    <Editor v-model="state" />
  </div>
</template>

<script setup lang="ts">
import data from './data.json'
import Editor from './packages/editor.tsx'
import { ref } from 'vue'
const state = ref(data)

</script>

<style scoped>

</style>
