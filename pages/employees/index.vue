<template>
  <div class="mr-5 ml-5">
    <nuxt-link class="btn btn-dark mb-4" to="/employees/create">
      <i class="fas fa-plus"></i> Добавить сотрудника
    </nuxt-link>
    <div class="table-responsive">
      <table class="table table-striped table-sm">
        <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Отчество</th>
          <th>Пол</th>
          <th>Заработная плата</th>
          <th>Отделы</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr :key="employee.id" v-for="employee in employees.data">
          <td>{{employee.id}}</td>
          <td>{{employee.name}}</td>
          <td>{{employee.surname}}</td>
          <td>{{employee.patronymic}}</td>
          <td v-if="employee.sex=='male'">мужчина</td>
          <td v-else> женщина</td>
          <td>{{employee.salary}} $</td>
          <td> {{getDepartmentNames(employee.departments)}}</td>
          <td>
            <nuxt-link :to="'/employees/edit/'+employee.id" class="btn btn-sm btn-info">
              <i class="fas fa-edit"></i> Редактировать
            </nuxt-link>
            <button @click.prevent="confirmDelete(employee.id)" class="btn btn-sm btn-danger">
              <i class="fas fa-trash-alt"></i> Удалить
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class='mt-3 flex-center'>
      <pagination :data="employees" @pagination-change-page="nextPageEmployees"></pagination>
    </div>
  </div>
</template>

<script>
  import pagination from 'laravel-vue-pagination';
  import SweetAlerts from '../../plugins/SweetAlerts';

  export default {
    components: {
      pagination,
    },
    async fetch({store}) {
      await store.dispatch('employees/fetch');
    },
    computed: {
      employees() {
        return this.$store.getters['employees/employees'];
      },
    },
    methods: {
      async confirmDelete(id) {
        const status = await this.$axios.$delete('http://127.0.0.1:8000/employee/' + id);
        this.$store.dispatch('employees/fetch');
        SweetAlerts.employeeDeleteMessage(status);
      },
      getDepartmentNames(employee) {
        let mass = [];
        employee.forEach(element => {
          mass.push(element.name);
        });
        return mass.join(', ');
      },
      async nextPageEmployees(page = 1) {
        await this.$store.dispatch('employees/updatePagination', page);
      },
    },
  };
</script>

<style scoped>
  .flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
  }
</style>
