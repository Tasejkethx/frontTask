<template>
  <div class="container">
    <nuxt-link to="/employees/create" class="btn btn-dark mb-5" :disable="loadSpinner">
      <i v-if="loadSpinner" class="fa fa-spin fa-spinner"></i>
      <i v-else class="fas fa-plus"></i> Добавить сотрудника
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
        <tr v-for="employee in employees.data" :key="employee.id">
          <td>{{employee.id}}</td>
          <td>{{employee.name}}</td>
          <td>{{employee.surname}}</td>
          <td>{{employee.patronymic}}</td>
          <td v-if="employee.sex=='male'">мужчина</td>
          <td v-else> женщина</td>
          <td>{{employee.salary}}$</td>
          <td> {{getDepartmentNames(employee.departments)}}</td>
          <td>
            <a href="#" @click.prevent="openEmployee(employee.id)" class="btn btn-sm btn-info">
              <i class="fas fa-edit"></i> Редактировать
            </a>
            <a  @click.prevent="confirmDelete(employee.id)" class="btn btn-sm btn-danger">
              <i class="fas fa-trash-alt"></i> Удалить
            </a>
          </td>
        </tr>
        </tbody>
      </table>
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
        this.loadSpinner = false;
      },
      openEmployee(id){
        this.$router.push('/employees/edit/'+id);
      },
     async confirmDelete(id){
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
    },
  }
</script>

<style scoped>
  .flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
  }
</style>
