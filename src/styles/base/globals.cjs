const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase }) {
    addBase({
        body: {
            '@apply h-full': {},
            '@apply text-dark-blue': {},
        },
        header: {
            '@apply mt-3 mx-6': {},
            '@apply flex justify-between': {},
        },
        h1: {
            '@apply font-fraunces text-display-large': {},
        },
        p: {
            '@apply font-barlow text-body-large': {},
        },
        a: {
            '@apply font-barlow text-label-large': {},
        },
    })
})
