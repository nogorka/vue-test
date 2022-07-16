<template>
  <form @submit.prevent="onSubmit" novalidate="true">
    <p class="h3">Авторизация</p>

    <div v-if="loginRequired" class="alert alert-danger">
      <span><strong>Необходимо войти в ситему</strong></span>
    </div>
    <div v-if="hasError" class="alert alert-danger">
      <span><strong>Ошибка заполнения формы</strong></span>
      <div v-for="msg in messages" :key="msg">
        <span>- {{ msg }}</span>
      </div>
    </div>

    <div class="form-group">
      <input
        class="form-control"
        type="text"
        name="login"
        v-model.trim="login"
        placeholder="email@inbox.com"
        required
      />
    </div>
    <div class="form-group">
      <input
        class="form-control"
        type="password"
        name="password"
        v-model="password"
        placeholder="password"
        required
      />
    </div>

    <input type="submit" value="Отправить" />
  </form>
</template>

<script>
export default {
  name: "Auth",
  data: () => {
    return {
      login: "",
      password: "",
      hasError: false,
      errors: [],
      success: [],
      messages: [],
    };
  },
  computed: {
    loginRequired() {
      return this.$route.query.message == "login";
    },
  },
  methods: {
    validLine(el, name, msg) {
      if (!el) {
        this.errors.push(name);
        this.messages.push(msg);
      } else {
        this.success.push(name);
      }
    },
    checkError() {
      this.errors = [];
      this.messages = [];
      this.success = [];

      this.validLine(this.login, "login", "Необходимо ввести логин");
      this.validLine(this.password, "password", "Необходимо ввести пароль");

      if (this.errors.length > 0) {
        this.hasError = true;
      } else {
        this.hasError = false;
      }
    },
    colorInputs() {
      this.errors.forEach((name) => {
        let query = "[name='" + name + "']";
        document.querySelector(query).classList.add("is-invalid");
      });

      this.success.forEach((name) => {
        let query = "[name='" + name + "']";
        document.querySelector(query).classList.add("is-valid");
        document.querySelector(query).classList.remove("is-invalid");
      });
    },
    onSubmit() {
      this.checkError();
      this.colorInputs();

      if (!this.hasError) {
        this.$store.dispatch("login", {
          login: this.login,
          password: this.password,
        });
        this.$router.push("/posts");
      }
    },
  },
};
</script>
