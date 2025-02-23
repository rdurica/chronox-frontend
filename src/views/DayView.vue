<template>
  <section class="button-row">
    <button class="green" @click="goBack"><- Back</button>
  </section>
  <h1>{{ getFormattedDate() }} ({{ (totalMinutes / 60).toFixed(2) }}h)</h1>
  <button class="green">
    <fa-icon icon="fa-add"/>
    Add task
  </button>

  <div v-for="task in day?.tasks" :key="task.id" class="task-card">
    <h1>{{task.name}} &nbsp; <button>+</button></h1>
    <ul class="subtask-list" v-if="task?.subTasks.length > 0">
      <li class="subtask-item" v-for="subtask in task?.subTasks">
        <span class="subtask-name">{{ subtask.subTaskType.name }} <span class="badge badge-grey"><fa-icon :icon="['far', 'clock']" /> {{ (subtask.minutes / 60).toFixed(2) }} h</span></span>
      </li>
    </ul>
    <div v-else class="center">
      <h2>No sub tasks found.</h2>
    </div>
  </div>
  <div v-if="day?.tasks.length === 0" class="center task-card">
    <h2>No data</h2>
  </div>

</template>

<script>
import axios from "axios";
import {FontAwesomeIcon as FaIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "DayView",
  components: {FaIcon},
  data() {
    return {
      id: this.$route.params.id,
      day: null,
      totalMinutes: 0,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async getDay() {
      const that = this;
      await axios.get('api/days/' + this.id)
          .then(function (response) {
            that.day = response.data;

            that.totalMinutes = that.day.tasks.reduce((total, task) => {
              return total + task.subTasks.reduce((subTotal, subtask) => {
                return subTotal + (subtask.minutes || 0);
              }, 0);
            }, 0);

          }).catch(function (error) {
            console.log('no access!');
            that.$router.push('/');
          });
    },
    getFormattedDate() {
      if (this.day === null) {
        return '';
      }

      const date = new Date(this.day.entryDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${day}.${month}.${year}`;
    }
  },
  beforeMount() {
    this.getDay();
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

.task-card {
  background-color: #282828;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.task-card h1 {
  font-size: 1rem;
  color: hsla(160, 100%, 37%, 1);
  margin-bottom: 1rem;
}

/* Štýly pre zoznam podúloh */
.subtask-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Štýly pre položku podúlohy */
.subtask-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e1e;
  border: 1px solid #1e1e1e;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  margin-bottom: 0.2rem;
  transition: background-color 0.3s ease;
}
.subtask-item:hover {
  border: 1px solid hsla(160, 100%, 37%, 0.2);
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 0.1);
}

.subtask-name {
  font-size: 1rem;
}

.badge{
  border-radius: 3px;
  padding: 0.2rem;
  margin-left: 0.5rem;
  color: #282828;
}
.badge-green{
  background-color: hsla(160, 100%, 37%, 1);
}
.badge-grey{
  background-color: grey;
}

.center {
  left: 0;
  bottom: 1em;
  width: 100%;
  text-align: center;
}

</style>