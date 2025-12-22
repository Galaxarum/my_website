<script setup lang="ts">
const {project} = defineProps<{ project: ProjectT }>();

const projectSpan = project.year_from? `${project.year_from} - ${project.year_to ?? new Date().getFullYear()}` : ''
</script>

<template>
  <UPageCard variant="subtle"
             :to="project.link"
             :title="project.title"
             :description="project.description"
  >
    <NuxtImg v-if="project.image" :src="project.image" :alt="'Logo of ' + project.title" placeholder/>
    <template #footer>
      {{projectSpan}}
    </template>
  </UPageCard>
</template>

<style scoped>

</style>