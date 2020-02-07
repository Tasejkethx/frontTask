<template>
  <div class="myclass">
    <div class="row " v-if="departments.length">
      <div class="col py-2 px-lg-2 border"></div>
      <div :key="department.id" class="col py-2 px-lg-2 border text-center" v-for="department in departments">
        {{department.name}}
      </div>
    </div>
    <div :key="employee.id" class="row " v-for="employee in employees.data">
      <div class="col py-2 px-lg-2 border"> {{employee.name}} {{employee.surname}}</div>
      <div :key="department.id" class="col py-2 px-lg-2 border" v-for="department in departments">
        <div :key="dep.id" class="text-center" v-for="dep in employee.departments" v-if="dep.id===department.id">
          <i class="fas fa-check"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({$axios}) {
      const employees = await $axios.$get('http://127.0.0.1:8000/employee');
      const departments = await $axios.$get('http://127.0.0.1:8000/department');
      return {employees, departments};
    },
  };
</script>

<style scoped>
  .myclass {
    padding: 2%;
  }
</style>
