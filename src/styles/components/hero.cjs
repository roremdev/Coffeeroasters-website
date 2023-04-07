const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
    addComponents({
        '.hero': {
            '@apply h-[604px]': {},
            '@apply mt-4 mx-6 px-[110px]': {},
            '@apply flex flex-col justify-center': {},
            '@apply rounded-lg bg-cover bg-center': {},
            '@apply text-white': {},

            '&__title': {
                '@apply w-[416px] mb-2': {},
            },

            '&__description': {
                '@apply w-[416px] mb-4': {},
            },
        },
    })
})
