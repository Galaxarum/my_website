<script setup lang="ts">
const ORCID_ID = '0009-0006-5009-4369'
const url = `https://pub.orcid.org/v3.0/${ORCID_ID}/works`;

const response = await $fetch(url, {
  headers: {
    "Accept": "application/json"
  }
});
const papers = computed(()=>response?.group?.map((o)=>({
  title: o['work-summary'][0].title?.title?.value,
  url: o['work-summary'][0].url?.value,
  type: o['work-summary'][0].type,
  venue: o['work-summary'][0]['journal-title']?.value,
  date: new Date(
      o['work-summary'][0]['publication-date']?.year?.value,
      o['work-summary'][0]['publication-date']?.month?.value,
      o['work-summary'][0]['publication-date']?.day?.value,
  ),
})))

</script>

<template>
  <UPageList>
    <UPageCard v-for="p of papers"
               :description="p.venue"
               :to="p.url"
               :ui="{body: 'w-full',title: 'w-full'}"
    >
      <template #title>
        <div class="w-100% flex justify-between items-start">
          {{p.title}}
          <UBadge :label="p.type"/>
        </div>
      </template>
    </UPageCard>

  </UPageList>
</template>

<style scoped>

</style>