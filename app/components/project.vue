<script setup lang="ts">
const {project} = defineProps<{ project: ProjectT }>();

const projectSpan = project.year_from? `${project.year_from} - ${project.year_to ?? new Date().getFullYear()}` : ''
const avatar = project.icon==null?undefined:{
  src: `${project.icon}`,
  alt: `Logo of ${project.title} project`,
  fit: 'inside',
  ui: {
    image: '!object-contain full-width full-height fit-contain',
  }
}
</script>

<template>
  <UPageCard variant="subtle"
             :to="project.link"
             spotlight
             target="_blank"
  >
    <template #header>
      <UUser
          :avatar="avatar"
          :name="project.title"
          :description="project.description"
          :chip="project.year_to==null"
          size="2xl"
      >
      </UUser>
    </template>
    <NuxtImg v-if="project.image" :src="project.image" :alt="`Image of ${project.title} project`" placeholder class="aspect-video"/>
    {{projectSpan}}
  </UPageCard>
</template>

<style scoped>

</style>