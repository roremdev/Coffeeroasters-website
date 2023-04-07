const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
    addComponents({
        '.menu-navigation': {
            '@apply flex gap-2': {},

            '&__item': {
                '@apply py-0.5 px-0.25': {},
                '@apply text-gray hover:text-dark-blue': {},
                '@apply hover:border-jade-500 hover:border-b-2 hover:border-solid':
                    {},

                '&--active': {
                    '@apply py-0.5 px-0.25': {},
                    '@apply border-jade-500 border-b-2 border-solid': {},
                },
            },
        },
    })
})
