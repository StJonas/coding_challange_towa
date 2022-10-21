<template>
<!-- footer displaying the logo, dummy-nav-bar and info -->
    <footer>
        <Logo />
        <Nav />
        <Info />
    </footer>
</template>

<script>
import Info from './Info.vue'
import Logo from './Logo.vue'
import Nav from './Nav.vue'

export default {
    name:'Footer',
    props: {
        title: String,
    },
    components: {
        Nav,
        Logo,
        Info,
    },
}
</script>

<style scoped>
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 20px;
    }
</style>