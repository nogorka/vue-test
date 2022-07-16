<template>
  <div class="container card">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">
        {{ post.body }}
      </p>
      <div class="btn btn-light">
        <nuxt-link to="/posts/">Назад</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePostPage",
  middleware: ["auth"],

  validate({ params }) {
    return /^\d+$/.test(params.id);
  },

  computed: {
    post() {
      const postID = this.$route.params.id - 1;
      return this.$store.getters["posts/postById"](postID);
    },
  },
};
</script>
