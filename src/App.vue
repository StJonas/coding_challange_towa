<template>
  <!-- app only contains header and footer - routes have been implemented for the other pages -->
  <div class="container">
    <Header title="Coding Challange" />
    <router-view :showSearchBar="showSearchBar"></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showSearchBar: true, //search bar should only be seen on the home-page
    };
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 700px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid purple;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}

.outer {
  display: grid;
  grid-template-rows: 1fr;
}

/* responsiveness was achieved through using the screen size - either one, two or three columns are shown */
@media only screen and (min-width: 360px) {
  .outer {
    grid-template-columns: 1fr;
  }
}

@media only screen and (min-width: 641px) {
  .outer {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (min-width: 1025px) {
  .outer {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

img {
  border-radius: 8px;
}


</style>
