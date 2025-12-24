<script setup lang="ts">
const {project} = defineProps<{ project: ProjectT }>();

const projectSpan = project.year_from? `${project.year_from} - ${project.year_to ?? 'Present'}` : ''
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
  <UPageCard :variant="project.side?'subtle':'ghost'"
             :to="project.link"
             :spotlight="!project.year_to"
             target="_blank"
  >
    <template #header>
      <UUser
          :avatar="avatar"
          :name="project.title"
          :description="project.description"
          size="2xl"
      >
      </UUser>
    </template>
    <template #body>
      <NuxtImg v-if="project.image" :src="project.image" :alt="`Image of ${project.title} project`" height="30vh" placeholder placeholder-class="aspect-video"/>
    </template>
    <template #footer>
      {{projectSpan}}
    </template>
  </UPageCard>
</template>

<style scoped>

</style>