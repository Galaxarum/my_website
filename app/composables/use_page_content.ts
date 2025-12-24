import type {PagesCollectionItem} from "@nuxt/content";

export default function usePageContent() {
    const path = useRoute().path;
    const page = ref<PagesCollectionItem|null>(null)
    return queryCollection('pages').path(path).first();
}