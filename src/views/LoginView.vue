<template>
  <section class="content">
    <login-form />
  </section>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "LoginView",
  components: {
    LoginForm
  }
}
</script>