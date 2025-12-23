export default defineAppConfig({
    ui: {
        colors: {
            primary: 'slatePrimary',
            secondary: 'slateSecondary',
            success: 'slateSuccess',
            info: 'slateInfo',
            warning: 'slateWarning',
            error: 'slateError',
            neutral: 'slateNeutral'
        },
        main: {
            base: 'min-h-0 h-[calc(100vh-var(--ui-header-height))] overflow-y-auto overflow-x-hidden'
        },
        pageGrid: {
            base: 'p-6'
        },
        pageColumns: {
            base: 'p-6'
        },
        pageList: {
            base: 'p-6 gap-3',
        }
    },
})
