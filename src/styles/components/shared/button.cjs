const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase }) {
    addBase({
        button: {
            '@apply min-w-[161px] max-w-[196px]': {},
            '@apply py-1 px-2': {},
            '@apply font-fraunces text-body-large font-bold': {},
            '@apply rounded-lg': {},

            '&.filled': {
                '@apply text-white': {},
                '@apply bg-jade-500 hover:bg-jade-600': {},
            },

            '&.outline': {
                '@apply text-jade-500 hover:text-jade-600': {},
                '@apply bg-white border-2 border-jade-500': {},
            },
        },
    })
})
