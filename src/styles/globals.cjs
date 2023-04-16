const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, matchUtilities, theme }) {
    addBase({
        body: {
            '@apply h-full max-w-[1500px] mx-auto': {},
            '@apply text-dark-blue': {},

            header: {
                '@apply mt-3 mx-[72px]': {},
                '@apply flex justify-between': {},
            },

            section: { '@apply mx-[72px] my-7': {} },

            h1: { '@apply text-display-large': {} },
            h2: { '@apply text-headline-large': {} },
            h3: { '@apply text-title-large': {} },

            'h1, h2, h3': {
                '@apply font-fraunces': {},
            },

            p: { '@apply text-body-large': {} },
            a: { '@apply text-label-large': {} },

            'p, a': {
                '@apply font-barlow': {},
            },
        },
    })

    matchUtilities({
        'grid-columns': (value) => ({
            display: 'grid',
            gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))`,
            columnGap: theme(`spacing.2`),
            placeContent: 'center',
        }),

        'flex-column': (value) => ({
            display: 'flex',
            flexDirection: 'column',
            gap: theme(`spacing.${value}`),
        }),
        'flex-row': (value) => ({
            display: 'flex',
            gap: theme(`spacing.${value}`),
        }),
    })
})
