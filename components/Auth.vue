<template>
  <form action="">
    <p class="h3">Авторизация</p>
    <input
      class="form-control"
      type="text"
      name="login"
      required
      placeholder="myemail@inbox.com"
    />
    <br />
    <input
      class="form-control"
      type="password"
      name="password"
      required
      placeholder="password"
    />
    <br />
    <input type="submit" value="Отправить" />
  </form>
</template>

<script>
export default {
  name: "Auth",
};
</script>
