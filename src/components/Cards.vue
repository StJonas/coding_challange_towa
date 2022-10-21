<template>
<!-- card component which contains individual cards -->
    <div v-for="card in cards" :key="card.char_id"> <!-- entries from the api are looped and displayed -->
        <Card :card="card"/>
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
    name: 'Cards',
    props: {
        cards: Array
    },
    components: {
        Card,
    },
}
</script>