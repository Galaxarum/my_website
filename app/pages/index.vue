<script setup lang="ts">
const page = await queryCollection('pages').path('/').first()
</script>

<template>
  <UPage>
    <UPageHero
        :title="page?.title"
        :description="page?.description"
        :headline="page?.headline"
        orientation="horizontal">
      <NuxtImg src="/img/hero.jpg"
               alt="Experimental setup of an augmented climbing activity developed by me"
               preload/>
    </UPageHero>
    <UPageSection>
      <ContentRenderer v-if="page" :value="page"/>
    </UPageSection>
  </UPage>
</template>

<style scoped>
ul,li{
  list-style: '▸';
  margin: 0 0 0 8px;
  padding: 0 0 0 3px;
}

</style>