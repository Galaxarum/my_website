<script setup lang="ts">
const route = useRoute().path;
const page = await usePageContent();
const subpages = await queryCollectionItemSurroundings('pages',route,{fields: ['title','description','headline']}).then(l=>l.filter(p=>p.path.startsWith(route)))
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
    <UPageHeader :title="page?.title"
                 :description="page?.description"
                 :headline="page?.headline"
    />
    <UPageBody>
      <UPageGrid>
        <UPageCard v-for="subpage of subpages"
                   :title="subpage.title"
                   :description="subpage.headline"
                   :image="subpage.image"
                   :to="subpage.path"
        />
      </UPageGrid>
    </UPageBody>
  </UPage>
</template>

<style scoped>

</style>