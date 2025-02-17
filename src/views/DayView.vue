<template>
  <section class="button-row">
    <button class="green" @click="goBack"><- Back</button>
  </section>
<!--<h1>Day</h1>-->
</template>

<script>
export default {
  name: "DayView",
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.green {
  margin-bottom: 1em;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.green:hover {
  text-shadow: hsla(160, 100%, 37%, 1) 0 0 10px;
}

.button-row {
  margin-top: 2em;
  min-width: 80vw;
}
</style>