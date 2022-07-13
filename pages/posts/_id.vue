<template>
  <div class="container card">
    <div class="card-body">
      <h5 class="card-title">{{ post.data.title }}</h5>
      <p class="card-text">
        {{ post.data.body }}
      </p>
      <div class="btn btn-light">
        <nuxt-link to="/posts/">Назад</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
const postEndpoint = "https://jsonplaceholder.typicode.com/posts";

export default {
  name: "SinglePostPage",
  data: () => {
    return {
      post: {},
    };
  },
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    const post = await $axios.get(postEndpoint + "/" + params.id);
    return { post };
  },
};
</script>
