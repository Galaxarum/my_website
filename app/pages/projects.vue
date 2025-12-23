<script setup lang="ts">
const allProjects = useProjects()
</script>

<template>
  <UPageGrid>
    <Project v-for="project of allProjects" :key="project.title" :project="project" />
  </UPageGrid>
</template>

<style scoped>

</style>