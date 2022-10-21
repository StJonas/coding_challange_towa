<template>
  <!-- home-page - contains search bar and character cards -->
  <Searchbar v-show="showSearchBar" @search-char="searchChar" /> <!-- only component, not the functionality, was implemented -->
  <div class="outer">
    <Cards :cards="cards" />
  </div>
</template>

<script>
import Searchbar from "../components/Searchbar.vue";
import Cards from "../components/Cards.vue";

export default {
  name: "Home",
  props: {
    showSearchBar: Boolean,
  },
  components: {
    Cards,
    Searchbar,
  },
  data() {
    return {
      cards: [],
    };
  },
  computed: {
    
  },
  methods: {
    async fetchChars() {
      //data from the api is gathered using fetch - proxy was implemented in vue.config
      const res = await fetch("api/characters/");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    //array is filled with fetched data
    this.cards = await this.fetchChars();
  },
};
</script>
