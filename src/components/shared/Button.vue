<script setup lang='ts'>
defineProps({
    variant: {
        type: String,
        default: 'filled'
    },
    onClick: { type: Function }
})
</script>

<template>
    <button :class='variant' @click='onClick'>
        <slot>Click Me</slot>
    </button>
</template>