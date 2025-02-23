<template>
  <div class="card">
    <div class="card-body">
      <h3><slot name="icon"></slot>&nbsp;&nbsp;<slot name="date"></slot></h3>
      <br>
      <div class="card-stats">
        <div class="stat-row">
          <span class="title">Tasks:</span>
          <span class="value"><slot name="taskCount"></slot></span>
        </div>
        <div class="stat-row">
          <span class="title">Total:</span>
          <span class="value"><slot name="taskTotalTime"></slot> h</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayCard",
}
</script>

<style scoped>
h3{
  color: rgba(172, 172, 172, 0.96);
}
.card {
  display: inline-flex; /* Změněno na inline-flex pro lepší zarovnání */
  justify-content: center;
  align-items: center;
  margin: 0 1rem 0 0;
  max-width: 270px;
  flex-wrap: wrap;
}

.card-body {
  background-color: #282828;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #282828;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-body:hover {
  box-shadow: hsla(160, 100%, 37%, 0.2) 0 0 30px;
  border: 1px solid hsla(160, 100%, 37%, 0.2);
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 0.1);
  transition: box-shadow 0.1s ease-in-out 0s;
}

.card-stats {
  width: 100%; /* Šírka kontajnera */
}

.stat-row {
  display: flex;
  justify-content: space-between; /* Rozloží priestor medzi prvkami */
  align-items: center; /* Zarovná prvky vertikálne */
  margin-bottom: 0.2em; /* Medzera medzi riadkami */
}

.title {
  text-align: left;
}

.value {
  text-align: right;
}
</style>