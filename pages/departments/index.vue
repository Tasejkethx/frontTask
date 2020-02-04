<template>
  <div class="container">
    <router-link to="/departments/create" class="btn btn-dark mb-5" :disabled="loadSpinner">
      <i v-if="loadSpinner" class="fa fa-spin fa-spinner"></i>
      <i v-else class="fas fa-plus"></i> Добавить отдел
    </router-link>
    <div class="table-responsive">
      <table class="table table-striped table-sm">
        <thead>
        <tr>
          <th> ID</th>
          <th> Название отдела</th>
          <th> Количество сотрудников</th>
          <th> Максимальная з/п</th>
          <th></th>
        </tr>
        </thead>
        <tbody v-if="departments.length">
        <tr v-for="department in departments" :key="department.id">
          <td> {{department.id}}</td>
          <td> {{department.name}}</td>
          <td> {{department.amount}}</td>
          <td> {{department.max_salary}}$</td>
          <td>
            <a  href="#" @click.prevent="openDepartment(department.id)" class="btn btn-sm btn-info">
              <i class="fas fa-edit"></i> Редактировать
            </a>
            <a href="#" @click.prevent="confirmDelete(department.id)"
               class="btn btn-sm btn-danger">
              <i class="fas fa-trash-alt"></i> Удалить </a>
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
        this.departments = await this.$axios.$get('http://127.0.0.1:8000/department');
        this.loadSpinner = false;
            },
       openDepartment(id){
         this.$router.push('/departments/edit/'+id);
       },
      async confirmDelete(id) {
            await this.$axios.$delete('http://127.0.0.1:8000/department/' + id);
            await this.fetch();
          },
      },
  };
</script>

<style scoped>

</style>
