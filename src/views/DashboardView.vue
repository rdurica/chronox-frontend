<template>
  <base-dialog v-if="onAdd" title="Add new entry" @close-modal="closeModal">
    <template #default>
      <p>Date</p>
      <p>
        <input type="date" class="date-picker" v-model="today"/>
      </p>
      <p v-if="newDayError !== ''" class="text-danger">{{ newDayError }}</p>
    </template>
    <template #actions>
      <button @click="createNewDay" class="green">Add</button>
    </template>
  </base-dialog>
  <section class="nav-buttons">
    <button class="green" @click="openModal"><fa-icon icon="fa-add" /> Add new entry</button>
    <button class="green" @click="reload"> <fa-icon icon="fa-refresh" /> Reload</button>
  </section>
  <section class="month-section">
    <day-card v-for="day in days" key="day.id" @click="goToNewDay(day.id)">
        <template v-slot:icon>
          <fa-icon icon="fa-calendar-days" />
        </template>
        <template v-slot:date>
          {{ formatDate(day.entryDate) }}
        </template>
    </day-card>
  </section>
  <button class="green load-more" @click="loadData(true)"><fa-icon icon="fa-download" /> Load data</button>
</template>
<script>
import DayCard from "@/components/DayCard.vue";
import BaseDialog from "@/components/BaseDialog.vue";
import axios from "axios";
import {FontAwesomeIcon as FaIcon} from "@fortawesome/vue-fontawesome";
export default {
  components: {
    FaIcon,
    DayCard,
    BaseDialog,
  },
  data() {
    return {
      onAdd: false,
      today: this.getFormattedDate(new Date()),
      newDay: new Date(),
      newDayError: '',
      actualPage: 1,
      days: []
    }
  },
  methods: {
    openModal() {
      this.onAdd = true;
    },
    closeModal() {
      this.onAdd = false;
    },
    goToNewDay(id) {
      this.$router.push({name: 'day', params: {id: id}});
    },
    reload(){
      localStorage.removeItem('dashboard_view_data');
      localStorage.removeItem('dashboard_view_page');

      this.loadData(true);
    },
    getFormattedDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    },
    async loadData(add) {
      this.days = JSON.parse(localStorage.getItem('dashboard_view_data')) || [];
      this.actualPage = JSON.parse(localStorage.getItem('dashboard_view_page')) || 1;

      if (add === true) {
        const that = this;

        await axios.get('api/days?page=' + this.actualPage)
          .then(function (response) {
            that.days.push(...response.data);
            that.actualPage++;

            localStorage.setItem('dashboard_view_data', JSON.stringify(that.days));
            localStorage.setItem('dashboard_view_page', JSON.stringify(that.actualPage));
          });
      }
    },
    async createNewDay() {
      const postData = {
        entryDate: this.today,
      };

      const that = this;
      await axios.post('api/days', postData)
          .then(function (response) {
            that.$router.push({name: 'day', params: {id: response.data.id}});
          }).catch(function (error) {
            that.newDayError = error;
          });
    },
    formatDate(dateTime) {
      const date = new Date(dateTime);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}`;
    }
  },
  mounted() {
    this.loadData(false);
  }
}
</script>

<style scoped>
.month-section {
  margin-bottom: 1em;
}

.load-more {
  bottom: 1em;
  width: 100%;
  text-align: center;
}
</style>