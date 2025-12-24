<script setup lang="ts">
const page = await usePageContent();
useSeoMeta({
  title: page?.title,
  ogTitle: page?.title,
  description: page?.description,
  ogDescription: page?.description,
  ogImage: page?.image,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UPage>
    <UPageHero
        :title="page?.title"
        :description="page?.description"
        :headline="page?.headline"
        orientation="horizontal"
    >
      <NuxtImg v-if="page?.image" :src="page.image" :alt="page.image_alt??`Image of ${page.title}`" preload />
    </UPageHero>
    <UPageSection>
      <ContentRenderer v-if="page" :value="page"/>
    </UPageSection>
  </UPage>
</template>

<style scoped>

</style>