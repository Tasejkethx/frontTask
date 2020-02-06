<template>

  <div class="myclass">
    <i v-if="loadSpinner" class="flex-center fa fa-spin fa-spinner"></i>
    <div class="row " v-if="departments.length">
      <div class="col py-2 px-lg-2 border"></div>
      <div class="col py-2 px-lg-2 border text-center" v-for="department in departments" :key="department.id">
        {{department.name}}
      </div>
    </div>
    <div class="row " v-for="employee in employees.data" :key="employee.id">
      <div class="col py-2 px-lg-2 border"> {{employee.name}} {{employee.surname}}</div>
      <div class="col py-2 px-lg-2 border" v-for="department in departments" :key="department.id">
        <div v-for="dep in employee.departments" :key="dep.id" v-if="dep.id===department.id" class="text-center">
          <i class="fas fa-check"></i>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        employees: {},
        departments: {},
        loadSpinner: false,
      };
    },
    mounted() {
      this.fetch();
    },
    methods: {
     async fetch() {
        this.loadSpinner = true;
       this.employees = await this.$axios.$get('http://127.0.0.1:8000/employee');
       this.departments = await this.$axios.$get('http://127.0.0.1:8000/department');
       this.loadSpinner = false;
      },
      },
  };
</script>

<style scoped>
  .myclass {
    padding: 2%;
  }

  .flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
  }
</style>
