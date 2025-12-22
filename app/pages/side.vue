<script setup lang="ts">

const projects = ref<ProjectT[]>([
  {
    title: 'Sfera S.r.l. web development',
    description: 'Full-stack web development of the website of the society "Sfera S.r.l".',
    link: 'https://sfera.bio/',
    image: 'https://sfera.bio/logo.png',
    year_span: 2020
  }

])

</script>

<template>
  <UPageColumns>
    <Project v-for="p of projects" :project="p"></Project>
  </UPageColumns>
</template>

<style scoped>

</style>