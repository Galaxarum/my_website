<script setup lang="ts">
const items = [
  {
    label: 'About me',
    to: '/',
  },
  {
    label: 'Projects',
    to: '/projects'
  },
  {
    label: 'Research',
    children: [
      {
        label: 'MultiSensory Environments',
        to: '/research/mse',
      },
      {
        label: 'Technology',
        to: '/research/tech',
      },
      {
        label: 'Other applications',
        to: '/research/other',
      }
    ]
  },
  {
    label: 'Publications',
    to: '/publications',
  },
  {
    label: 'Side quests',
    to: '/side'
  }
];
</script>
<template>
  <UApp>
    <UHeader :title="$route.path==='/'?null:'Matteo Secco'" class="flex-none">
      <template #right>
        <UNavigationMenu :items="items" class="hidden lg:flex"/>
        <UColorModeButton/>
      </template>
      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>
    <UMain>
      <NuxtPage/>
    </UMain>
    <USeparator/>
    <UFooter class="flex-none" :ui="{ container: 'py-0 lg:py-2', center: 'mt-1.5' }">
      © Copyright 2025 Matteo Secco. Self-hosted.
    </UFooter>
  </UApp>
</template>
