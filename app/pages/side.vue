<script setup lang="ts">
const allProjects = await queryCollection('projects')
    .where('side','=',true)
    .all()

useSeoMeta({
  title: 'Projects',
  ogTitle: 'Projects',
  description: 'Side projects in which Matteo Secco has been involved',
  ogDescription: 'Side projects in which Matteo Secco has been involved',
})
</script>

<template>
  <UPageColumns>
    <Project v-for="p of allProjects" :project="p"></Project>
  </UPageColumns>
</template>

<style scoped>

</style>