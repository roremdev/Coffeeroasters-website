const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
    addComponents({
        '.gallery': {
            '@apply grid-columns-[4] gap-x-4': {},

            '&-item': {
                '@apply min-w-[223px] max-w-[250px]': {},
                '@apply flex-column-[2]': {},

                '&__body': {
                    '@apply flex-column-[1] text-center': {},
                },
            },
        },
    })
})
