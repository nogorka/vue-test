<template>
  <div class="container">
    <p class="h3">Посты</p>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <a href="#" @click.prevent="openPost(post.id)">
          Post #{{ post.id }}: {{ post.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostsPage",
  middleware: ["auth"],

  async fetch({ store }) {
    if (store.getters["posts/posts"].length === 0) {
      await store.dispatch("posts/fetch");
    }
  },
  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    },
  },

  methods: {
    openPost(postID) {
      this.$router.push("/posts/" + postID);
    },
  },
};
</script>
