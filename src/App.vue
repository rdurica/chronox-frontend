<template>
  <page-navbar v-if="showNavbar" />

  <div class="container">
    <router-view/>
  </div>

  <page-footer/>
</template>

<script>
import PageNavbar from "@/components/ui/PageNavbar.vue";
import PageFooter from "@/components/ui/PageFooter.vue";
import {RouteNames} from "@/router/constants.js";

export default {
  components: {PageFooter, PageNavbar},
  computed: {
    showNavbar() {
      return this.$route.name !== RouteNames.LOGIN;
    }
  },
}
</script>

<style scoped>
.container {
  margin-top: 2em;
}
</style>