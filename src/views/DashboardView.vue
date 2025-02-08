<template>
  <button class="green">+ Add new entry</button>
  <section class="month-section">
  <p>February </p>
    <section class="week-section">
      <day-card>Monday 20.3.2024</day-card>
      <day-card>Tuesday 20.3.2024</day-card>
      <day-card>Wendsday 20.3.2024</day-card>
      <day-card>Thursday 20.3.2024</day-card>
      <day-card>Friday 20.3.2024</day-card>
      <day-card>Saturday 20.3.2024</day-card>
      <day-card>Sunday 20.3.2024</day-card>
    </section>
    <section class="week-section">
      <day-card>Monday 20.3.2024</day-card>
      <day-card>Tuesday 20.3.2024</day-card>
      <day-card>Wendsday 20.3.2024</day-card>
      <day-card>Thursday 20.3.2024</day-card>
      <day-card>Friday 20.3.2024</day-card>
    </section>
    <section class="week-section">
      <day-card>Monday 20.3.2024</day-card>
      <day-card>Tuesday 20.3.2024</day-card>
      <day-card>Wendsday 20.3.2024</day-card>
      <day-card>Thursday 20.3.2024</day-card>
      <day-card>Friday 20.3.2024</day-card>
    </section>
</section>
</template>
<script setup>
import DayCard from "@/components/ui/DayCard.vue";
</script>

<style scoped>
.month-section {
  margin-bottom: 1em;
}

.green{
  margin-bottom: 1em;
  cursor: pointer;
  background-color: transparent;
  border: none;
}
.green:hover{
  text-shadow: hsla(160, 100%, 37%, 1) 0 0 10px;
}
</style>