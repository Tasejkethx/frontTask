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
    <div class='mt-3 flex-center'>
      <pagination :data="employees" @pagination-change-page="nextPageEmployees"></pagination>
    </div>
  </div>
</template>

<script>
  import pagination from 'laravel-vue-pagination';

  export default {
    components: {
      pagination,
    },
    async fetch({store}) {
      await store.dispatch('departments/fetch');
      await store.dispatch('employees/fetch');
    },
    computed: {
      employees() {
        return this.$store.getters['employees/employees'];
      },
      departments() {
        return this.$store.getters['departments/departments'];
      },
    },
    methods: {
      async nextPageEmployees(page = 1) {
        await this.$store.dispatch('employees/updatePagination', page);
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
