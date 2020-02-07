<template>
  <div class="container">
    <nuxt-link class="btn btn-dark mb-5" to="/employees/create">
      <i class="fas fa-plus"></i> Добавить сотрудника
    </nuxt-link>
    <div class="table-responsive" id="success_message">
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
          <td>{{employee.salary}}$</td>
          <td> {{getDepartmentNames(employee.departments)}}</td>
          <td>
            <a @click.prevent="openEmployee(employee.id)" class="btn btn-sm btn-info" href="#">
              <i class="fas fa-edit"></i> Редактировать
            </a>
            <a @click.prevent="confirmDelete(employee.id)" class="btn btn-sm btn-danger" href="#">
              <i class="fas fa-trash-alt"></i> Удалить
            </a>
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

  export default {
    components: {pagination},
    async asyncData({$axios}) {
      const employees = await $axios.$get('http://127.0.0.1:8000/employee');
      return {employees};
    },
    data() {
      return {
        employees: {},
      };
    },
    methods: {
      async fetch() {
        this.employees = await this.$axios.$get('http://127.0.0.1:8000/employee');
      },
      openEmployee(id) {
        this.$router.push('/employees/edit/' + id);
      },
      async confirmDelete(id) {
        await this.$axios.$delete('http://127.0.0.1:8000/employee/' + id);
        await this.fetch();
      },
      getDepartmentNames(employee) {
        let mass = [];
        employee.forEach(function(element) {
          mass.push(element.name);
        });
        return mass.join(', ');
      },
      async nextPageEmployees(page = 1) {
        let data = await this.$axios.$get('http://127.0.0.1:8000/employee?page=' + page);
        this.employees = data;
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
