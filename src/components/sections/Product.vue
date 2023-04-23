<script setup lang='ts'>
import { defineProps, ref } from 'vue'
import Button from '@components/shared/Button.vue'

type Product = {
    title: string
    description: string
    image: string
    price: number
}
const product = defineProps<Product>()
const count = ref(1)
const price = ref(product.price)

const handleSubtractClick = () => {
    if (count.value > 1) {
        --count.value
        price.value -= product.price
    }
}

const handleAdditionClick = () => {
    if (count.value < 10) {
        ++count.value
        price.value += product.price
    }
}

</script>

<template>
    <div class='col-span-8 grid-columns-[8]'>
        <img class='col-span-4' :src='product.image' alt='{product.title}' />

        <div class='col-span-4 flex-column-[3]'>
            <div class='flex-column-[1]'>
                <h2>{{ product.title }}</h2>
                <p>{{ product.description }}</p>
            </div>

            <div class='flex-column-[1]'>
                <h3>Quantity</h3>
                <div class='grid-columns-[2]'>
                    <div class='flex items-center border-gray-light border-2 rounded-lg'>
                        <div
                            class='p-1 bg-gray-light rounded-l-md cursor-pointer'
                            @click='handleSubtractClick'
                        >
                            -
                        </div>
                        <span class='grow text-center'>{{ count }}</span>
                        <div
                            class='p-1 bg-gray-light rounded-r-md cursor-pointer'
                            @click='handleAdditionClick'
                        >
                            +
                        </div>
                    </div>
                    <span class='flex items-center'>${{ price.toFixed(2) }}</span>
                </div>
            </div>
            <div class='grid-columns-[2]'>
                <Button>Buy it now</Button>
                <Button variant='outline'>Add to cart</Button>
            </div>
        </div>
    </div>
</template>