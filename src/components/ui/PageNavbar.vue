<template>
  <div class="navbar" @click="toggleMenu">
    <div class="hamburger" >
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="menu" :class="{ active: isMenuOpen }">
      <router-link to="/">Home</router-link>
      <a @click="logout" style="color: red">Logout</a>
    </div>
  </div>
</template>

<script>
import {RouteNames, RoutePaths} from "@/router/constants.js";

export default {
  name: "PageNavbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch(RouteNames.LOGOUT);
      this.$router.push(RoutePaths.LOGIN);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Přepíná stav menu
    },
    closeMenuOnClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isMenuOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.closeMenuOnClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeMenuOnClickOutside);
  },
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  cursor: pointer;
}

.hamburger {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.hamburger .line {
  width: 25px;
  height: 3px;
  background-color: #333;
}

.menu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 10px;
  background-color: #222222;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.menu.active {
  display: flex;
}

.menu a {
  padding: 10px 20px;
  text-decoration: none;
  color: #f2f2f2;
}

.menu a:hover {
  background-color: #2c3e50;
}
</style>