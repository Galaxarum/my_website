<script setup lang="ts">
const {project} = defineProps<{ project: Project }>();

const projectSpan = computed(() => {
  if(project.year_span==null) return ''
  if(!Array.isArray(project.year_span))
    project.year_span = [project.year_span, new Date().getFullYear()];
  return project.year_span.join(' - ');
})
</script>

<template>
  <UPageCard variant="subtle"
             :to="project.link"
             :title="project.title"
             :description="project.description"
  >
    <template #default>
      <NuxtImg :src="project.img" :alt="'Logo of ' + project.title" placeholder/>
    </template>
    <template #footer>
      {{projectSpan}}
    </template>
  </UPageCard>
</template>

<style scoped>

</style>