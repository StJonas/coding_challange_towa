<template>
<!-- nav bar with 3 dummy buttons - displayed in header and footer -->
    <Button text="Button1" color="purple" />
    <Button text="Button2" color="purple" />
    <Button text="Button3" color="purple" />
</template>

<script>
import Button from './Button.vue'

export default {
    name:'Nav',
    props: {
        title: String,
    },
    components: {
        Button,
    },
}
</script>
