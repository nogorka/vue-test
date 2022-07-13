<template>
  <div class="container">
    <p class="h3">Пост {{ $route.params.id }}</p>
    <p>Title: {{}}</p>
    <p>Body: {{}}</p>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";

export default {
  name: "SinglePostPage",
  components: { NavBar },
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  mounted(){
    console.log(this.$route.params)
  }
};
</script>
