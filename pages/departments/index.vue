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
        <tbody>
        <tr :key="department.id" v-for="department in departments">
          <td> {{department.id}}</td>
          <td> {{department.name}}</td>
          <td> {{department.amount}}</td>
          <td> {{department.max_salary}} $</td>
          <td>
            <nuxt-link :to="'departments/edit/'+department.id" class="btn btn-sm btn-info">
              <i class="fas fa-edit"></i> Редактировать
            </nuxt-link>
            <button @click.prevent="confirmDelete(department.id)" class="btn btn-sm btn-danger">
              <i class="fas fa-trash-alt"></i> Удалить
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

  import SweetAlerts from '../../plugins/SweetAlerts';

  export default {
    async fetch({store}) {
      await store.dispatch('departments/fetch');
    },
    computed: {
      departments() {
        return this.$store.getters['departments/departments'];
      },
    },
    methods: {
      async confirmDelete(id) {
        const status = await this.$axios.$delete('http://127.0.0.1:8000/department/' + id);
        await this.$store.dispatch('departments/fetch');
        SweetAlerts.departmentDeleteMessage(status);
      },
    },
  };
</script>

<style scoped>

</style>
