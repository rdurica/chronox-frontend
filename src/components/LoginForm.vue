<template>
  <section class="content">
    <div class="login-form">
      <h2>Log in</h2>
      <form @submit.prevent="loginNew">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
      <div v-if="hasErrors" class="error-text">{{ errorMessage }}</div>
        <button type="submit" class="btn-green">Log in</button>
      </form>
    </div>
  </section>
</template>

<script>
import {RouteNames, RoutePaths} from "@/router/constants.js";

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  computed: {
    hasErrors() {
      return !!this.errorMessage;
    }
  },
  methods: {
    async loginNew() {
      await this.$store.dispatch(RouteNames.LOGIN, {
        email: this.email,
        password: this.password,
      })
      .then(() => {
        this.$router.push(RoutePaths.DASHBOARD);
      })
      .catch(() => {
        this.errorMessage = 'Login failed. Please check your credentials.';
      });
    }
  }
};
</script>


<style scoped>

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.error-text {
  color: red;
}

.btn-green {
  background-color: #2c3e50;
  padding: 0.8em;
  color: white;
  border: none;
  margin-top: 0.5em;

}

.btn-green:hover {
  background-color: #385675;
  cursor: pointer;
}

button {
  width: 100%;
  padding: 0.8em;
  color: black;
  border: none;
  margin-top: 0.5em;
  box-shadow: #181818 0 0 10px;
}

.login-form {
  position: absolute;
  border: 1px solid #2c3e50;
  margin: auto;
  padding: 2em;
  box-shadow: #2c3e50 0 0 100px;
  border-radius: 8px;
}

input[type=email], input[type=password] {
  width: 100%;
  padding: 6px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: #282828;
  color: white;
  border: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  background-color: #282828 !important; /* Světle modrá barva pozadí */
  color: white !important; /* Barva textu */
  -webkit-text-fill-color: white !important; /* Barva vyplněného textu */
  transition: background-color 5000s ease-in-out 1s; /* Zabrání přepsání stylů */
  box-sizing: border-box;
}
</style>