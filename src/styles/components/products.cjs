const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
    addComponents({
        'section.products': {
            '@apply flex flex-col gap-4 text-center': {},
        },

        '.products-gallery': {
            '@apply grid grid-cols-4 gap-x-4 justify-items-center': {},

            '.product-item': {
                '@apply min-w-[223px] max-w-[250px]': {},
                '@apply flex flex-col gap-2': {},

                '&__body': {
                    '@apply flex flex-col gap-1': {},
                    '@apply text-center': {},
                },
            },
        },
    })
})
