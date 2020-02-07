<template>
  <div class="mr-5 ml-5">
    <nuxt-link class="btn btn-dark mb-4" to="/departments/create">
      <i class="fas fa-plus"></i> Добавить отдел
    </nuxt-link>
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
        <tr :key="department.id" v-for="department in departments">
          <td> {{department.id}}</td>
          <td> {{department.name}}</td>
          <td> {{department.amount}}</td>
          <td> {{department.max_salary}}$</td>
          <td>
            <a @click.prevent="openDepartment(department.id)" class="btn btn-sm btn-info" href="#">
              <i class="fas fa-edit"></i> Редактировать
            </a>
            <a @click.prevent="confirmDelete(department.id)" class="btn btn-sm btn-danger"
               href="#">
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
    async asyncData({$axios}) {
      const departments = await $axios.$get('http://127.0.0.1:8000/department');
      return {departments};
    },
    data() {
      return {
        departments: {},
      };
    },
    methods: {
      async fetch() {
        this.departments = await this.$axios.$get('http://127.0.0.1:8000/department');
      },
      openDepartment(id) {
        this.$router.push('/departments/edit/' + id);
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
