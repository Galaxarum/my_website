<script setup lang="ts">
const allProjects = useProjects(true)
</script>

<template>
  <UPageColumns>
    <Project v-for="p of allProjects" :project="p"></Project>
  </UPageColumns>
</template>

<style scoped>

</style>