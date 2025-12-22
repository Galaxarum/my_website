<script setup lang="ts">

const projects = ref<Project[]>([
  {
    title: 'Sfera S.r.l. web development',
    description: 'Full-stack web development of the website of the society "Sfera S.r.l".',
    link: 'https://sfera.bio/',
    img: 'https://sfera.bio/logo.png',
    year_span: 2020
  }

])

</script>

<template>
  <UPageColumns class="p-6">
    <Project v-for="p of projects" :project="p"></Project>
  </UPageColumns>
</template>

<style scoped>

</style>