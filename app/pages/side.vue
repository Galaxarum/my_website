<script setup lang="ts">
const allProjects = await queryCollection('projects')
    .where('side','=',true)
    .all()
</script>

<template>
  <UPageColumns>
    <Project v-for="p of allProjects" :project="p"></Project>
  </UPageColumns>
</template>

<style scoped>

</style>