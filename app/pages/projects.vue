<script setup lang="ts">
const allProjects = useProjects()
</script>

<template>
  <UPageColumns>
    <Project v-for="project of allProjects" :key="project.title" :project="project" />
  </UPageColumns>
</template>

<style scoped>

</style>