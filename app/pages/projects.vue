<script setup lang="ts">
const allProjects = await queryCollection('projects')
    .orWhere(q=>q.where('side','=',false).where('side','IS NULL'))
    .all()
useSeoMeta({
  title: 'Projects',
  ogTitle: 'Projects',
  description: 'Research projects in which Matteo Secco has been involved',
  ogDescription: 'Research projects in which Matteo Secco has been involved',
})
</script>

<template>
  <UPageColumns>
    <Project v-for="project of allProjects" :key="project.title" :project="project" />
  </UPageColumns>
</template>

<style scoped>

</style>