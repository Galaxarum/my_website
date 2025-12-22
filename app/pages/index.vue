<script setup lang="ts">

</script>

<template>
  <UPageHero
      title="Matteo Secco"
      description="PhD Student @ Politecnico di Milano"
      orientation="horizontal">
    <NuxtImg src="/img/hero.jpg"
             alt="Experimental setup of an augmented climbing activity developed by me"
             preload/>
  </UPageHero>
  <UPageBody class="px-5">

    My work focuses on Interactive Multisensory Environments and how they can benefit children with NeuroDevelopmental Dysorders.<br>
    Being one of technical background, my main interest is in understanding how these spaces can be enhanced for various goals:
  <ul>
    <li>Improve the children's experience.</li>
    <li>Expand the available information about the children's internal and external state.</li>
    <li>Facilitate the usage of the system by healthcare operators.</li>
    <li>Facilitate the adoption of the system by therapeutic centers.</li>
    <li>Studying short and long term benefits induced by these system's usage.</li>
  </ul>
  </UPageBody>
</template>

<style scoped>
ul,li{
  list-style: '▸';
  margin: 0 0 0 8px;
  padding: 0 0 0 3px;
}

</style>