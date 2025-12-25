<script setup lang="ts">
const USER_ID = 13656671;

interface Item {
  title: string;
  DOI: string | undefined;
  URL: string | undefined;
  type: string | undefined;
  'container-title'?: string;
  publisher?: string;
  event?: string;
  issued?: {'date-parts': number[][]};
  abstract?: string;
}

function parse_item(item: Item) {
  return {
    title: item.title,
    venue: (item['container-title'] ?? item['publisher'] ?? item['event'] ?? undefined) as string | undefined,
    year: item.issued?.['date-parts']?.[0]?.[0] ?? undefined as number|undefined,
    link: item.DOI ? `https://doi.org/${item.DOI}` : (item.URL ?? '#'),
    type: item.type,
    abstract: item.abstract,
  }

}

const { data, status, error } = await useFetch(`https://api.zotero.org/users/${USER_ID}/publications/items`, {
  query: {
    format: 'csljson',
    sort: 'date',
    direction: 'desc',
    limit: 100,
  },
  transform: (response: { items: any[] }) => response.items.map(parse_item),
})

const papers = computed(() => data.value?.filter(o => o.year).sort(o=>o.year!))

useSeoMeta({
  title: 'Publications',
  ogTitle: 'Publications',
  description: 'Research publications I written by Matteo Secco',
  ogDescription: 'Research publications I written by Matteo Secco'
})
</script>

<template>
  <UPageList v-if="!error">
    <UTooltip v-for="p of papers" :key="p.title"
              :text="p.abstract"
              class="h-auto"
              :ui="{
                content: 'h-auto',
                text: 'max-w-[60vw] !text-wrap text-center text-sm'
    //whitespace: 'whitespace-normal',
    //base: 'h-auto text-center'
  }"
    >
      <UPageCard
          variant="soft"
          :description="p.venue"
          :to="p.link"
          target="_blank"
          :ui="{body: 'w-full',title: 'w-full'}"
      >
        <template #title>
          <div class="w-100% flex justify-between items-start">
            {{p.title}}
            <UBadge :label="p.type"/>
          </div>
        </template>
      </UPageCard>
    </UTooltip>
  </UPageList>
</template>

<style scoped>

</style>