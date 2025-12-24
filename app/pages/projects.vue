<script setup lang="ts">
const allProjects = await queryCollection('projects')
    .orWhere(q=>q.where('side','=',false).where('side','IS NULL'))
    .all()
</script>

<template>
  <UPageColumns>
    <Project v-for="project of allProjects" :key="project.title" :project="project" />
  </UPageColumns>
</template>

<style scoped>

</style>