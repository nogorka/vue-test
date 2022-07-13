<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="row">
        <div class="col">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>
