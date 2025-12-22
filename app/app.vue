<script setup lang="ts">

const items = [
  {
    label: 'About',
    to: '/',
  },
  {
    label: 'MultiSensory Environments',
    to: '/mse',
  },
  {
    label: 'Technology',
    to: '/tech',
  },
  {
    label: 'Publications',
    to: '/publications',
  },
  {
    label: 'Side-projects',
    to: '/side',
  }
]
</script>
<template>
  <UApp>
    <UHeader title="Matteo Secco" class="flex-none">
      <template #right>
        <UNavigationMenu :items="items" class="hidden lg:flex"/>
        <UColorModeSwitch/>
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
