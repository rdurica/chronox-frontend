<template>
  <div class="card">
    <div class="card-body">
      <h3><slot name="icon"></slot>&nbsp;&nbsp;<slot name="date"></slot></h3>
      <br>
      <div class="card-stats">
        <div class="stat-row">
          <span class="title">Tasks:</span>
          <span class="value">3</span>
        </div>
        <div class="stat-row">
          <span class="title">Total:</span>
          <span class="value">8h</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayCard"
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
  margin: 0.8em 0.8em 0.8em 0;
  max-width: 270px;
  flex-wrap: wrap;
}

.card-body {
  border: 1px solid #2c3e50;
  padding: 1em;
  box-shadow: rgba(44, 62, 80, 0.39) 0 0 10px;
  border-radius: 8px;
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