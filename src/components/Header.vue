<template>
<!-- header component containing logo and dummy-nav-bar -->
    <header>
        <Logo />
        <Nav />
    </header>
</template>

<script>
import Button from './Button.vue'
import Logo from './Logo.vue'
import Nav from './Nav.vue'

export default {
    name:'Header',
    props: {
        title: String,
    },
    components: {
        Button,
        Nav,
        Logo,
    },
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>