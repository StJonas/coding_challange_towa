<template>
<!-- button component - only used in nav bar in this application -->
    <button 
    @click="onClick()"
    :style="{background: color}" 
    class="btn">
    {{text}}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props:{
        text: String,
        color: String
    },
    methods:{
        onClick() { //dummy on click method
            console.log('clicked')
        },
    },
}
</script>