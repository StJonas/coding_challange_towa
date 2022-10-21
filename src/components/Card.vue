<template>
  <!-- individual card of a character - name, image and nickname are displayed -->
  <div class="card-container" id="card">
    <router-link class="link" to="/details">
      <h3>{{ card.name }}</h3>
      <img :src="card.img" height="150" width="150" />
      <p>{{ card.nickname }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object,
  },
};
</script>

<style scope>
.card {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.card-container {
  align: center;
  height: 300px;
  width: 200px;
}
.card h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.link {
  text-decoration: none;
  color: inherit;
}
</style>
