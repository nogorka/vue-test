<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">Авторизация</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/posts">Посты</nuxt-link>
        </li>
      </ul>

      <div>
        <span v-if="!hasCredentials">Войдите в систему</span>
        <a v-else href="#" @click.prevent="logout"> {{ username }} || Выйти </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    hasCredentials() {
      return this.$store.getters.hasCredentials;
    },
    username() {
      return this.$store.getters.getLogin;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
