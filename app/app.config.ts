export default defineAppConfig({
    ui: {
        colors: {
            primary: 'indigo',
            neutral: 'violet',
        },
        main: {
            base: 'min-h-0 h-[calc(100vh-var(--ui-header-height))] overflow-y-auto overflow-x-hidden'
        },
    },
})
