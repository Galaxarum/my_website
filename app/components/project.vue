<script setup lang="ts">
const {project} = defineProps<{ project: ProjectT }>();

const projectSpan = project.year_from? `${project.year_from} - ${project.year_to ?? 'Now'}` : ''
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
    <NuxtImg v-if="project.image" :src="project.image" :alt="`Image of ${project.title} project`" placeholder placeholder-class="aspect-video"/>
    {{projectSpan}}
  </UPageCard>
</template>

<style scoped>

</style>