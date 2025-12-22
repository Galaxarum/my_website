<script setup lang="ts">
const { data } = await useAsyncData('allProjects', () =>
    queryCollection('projects')
        .where('side', '<>', 'false')
        .all()
)
const allProjects = computed<ProjectT[]>(() => data.value?.[0]?.meta?.body as ProjectT[])
</script>

<template>
  <UPageGrid>
    <Project v-for="project of allProjects" :key="project.title" :project="project" />
  </UPageGrid>
</template>

<style scoped>

</style>