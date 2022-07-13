<template>
  <div class="container">
    <p class="h3">Посты</p>

    <ul>
      <li v-for="post in posts.data" :key="post.id">
        <a href="#" @click.prevent="openPost(post.id)"
          >Post #{{ post.id }}: {{ post.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
const postEndpoint = "https://jsonplaceholder.typicode.com/posts";

export default {
  name: "PostsPage",
  data: () => ({
    posts: [],
  }),
  async mounted() {
    this.posts = await this.$axios.get(postEndpoint);
  },
  methods: {
    openPost(postID) {
      this.$router.push("/posts/" + postID);
    },
  },
};
</script>
