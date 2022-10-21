<template>
  <!-- searchbar component, which is shown on the home-page - was implemented using a form tag -->
  <form>
    <div class="form-control">
      <input type="text" v-model="text" name="text" placeholder="Name" />
      <input type="submit" value="search" class="btn btn-block" />
    </div>
  </form>
</template>

<script>
export default {
  name: "Searchbar",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onSubmit(e) { //search term is emited after pressing the submit button
      e.preventDefault();

      if (!this.text) {
        alert("empty searchbar");
        return;
      }

      this.$emit("search-char", term);

      this.text = "";
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
