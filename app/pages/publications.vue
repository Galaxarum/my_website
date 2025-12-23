<script setup lang="ts">
const papers = await queryCollection<PublicationT>('publications')
    .where('DOI', '<>','""')
    .order('Publication Year','DESC')
    .all()
</script>

<template>
  <UPageList>
    <UPageCard v-for="p of papers"
               variant="subtle"
               :description="p.Venue"
               :to="p.DOI"
               :ui="{body: 'w-full',title: 'w-full'}"
    >
      <template #title>
        <div class="w-100% flex justify-between items-start">
          {{p.Name}}
          <UBadge :label="p.Type"/>
        </div>
      </template>
    </UPageCard>

  </UPageList>
</template>

<style scoped>

</style>