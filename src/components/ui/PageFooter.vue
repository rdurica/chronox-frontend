<template>
  <div class="footer">
    <p>Robert Durica &copy; {{ year }}</p>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
}
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 1em;
  width: 100%;
  text-align: center;
}
</style>