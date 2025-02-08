<template>
  <div class="card">
    <div class="card-body">
      <slot>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis felis non ex egestas placerat.
          Aenean tempus nisi ac nisi cursus fringilla. Praesent mattis varius orci, non ultricies risus euismod pulvinar.
          In ultrices, orci at interdum facilisis, justo lorem hendrerit sapien, in elementum nisi leo sed mauris.
          Suspendisse mauris massa, euismod in commodo at, tincidunt et elit. Nunc vel dolor aliquam, hendrerit velit in,
          malesuada ipsum. Quisque semper pretium sem in tristique.
        </p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayCard"
}
</script>

<style scoped>

.card {
  display: inline-flex; /* Změněno na inline-flex pro lepší zarovnání */
  justify-content: center;
  align-items: center;
  margin: 0.8em 0.8em 0.8em 0;
  max-width: 270px;
  flex-wrap: wrap;
}

.card-body {
  min-width: 180px;
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

</style>