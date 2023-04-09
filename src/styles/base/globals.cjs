const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase }) {
    addBase({
        body: {
            '@apply h-full': {},
            '@apply text-dark-blue': {},
        },
        header: {
            '@apply mt-3': {},
            '@apply flex justify-between': {},
        },
        section: { '@apply my-7': {} },

        h1: { '@apply text-display-large': {} },
        h2: { '@apply text-headline-large': {} },
        h3: { '@apply text-title-large': {} },
        p: { '@apply text-body-large': {} },
        a: { '@apply text-label-large': {} },

        'header, section': {
            '@apply mx-[7.2vw]': {},
        },
        'h1, h2, h3': {
            '@apply font-fraunces': {},
        },
        'p, a': {
            '@apply font-barlow': {},
        },
    })
})
