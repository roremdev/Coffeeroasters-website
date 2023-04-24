import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
    const products = await getCollection('products')
    return rss({
        title: 'Coffeeroasters',
        description: 'Website for coffee lovers',
        site: context.site,
        items: products.map((product) => ({
            title: product.data.title,
            pubDate: Date.now().toString(),
            description: `Coffee: ${product.data.title}`,
            link: `/products/${product.slug}`,
        })),
    })
}
