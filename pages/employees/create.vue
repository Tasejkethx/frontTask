<template>
  <div class="container">
    <employeeFormComponent
      :name.sync="employee.name"
      :surname.sync="employee.surname"
      :patronymic.sync="employee.patronymic"
      :sex.sync="employee.sex"
      :salary.sync="employee.salary"
      :department_id.sync="employee.department_id"
      :departments="departments"
    >
    </employeeFormComponent>
    <div class="button-wrapper-send-form mt-2">
      <button type='submit' class="btn btn-primary mt-3 mr-2 form-width-button" :disabled="loadSpinner"
              @click="create"><i
        v-if="loadSpinner" class="fa fa-spin fa-spinner"></i> Создать
      </button>
    </div>
  </div>
</template>

<script>

 /* import SwalAlerts from '../../Swal';
  import validationErrors from '../../validationErrors';*/

import employeeFormComponent from "./formComponent";
  export default {
    components: {employeeFormComponent},
    data() {
      return {
        employee: {
          name: null,
          surname: null,
          patronymic: null,
          sex: null,
          salary: null,
          department_id: [],
        },
        departments: [],
        loadSpinner: false,
      };
    },
    mounted() {
      this.fetch();
    },
    methods: {
    async  create() {
  let status = await this.$axios.$post('http://127.0.0.1:8000/employee', this.employee);
      },
     async fetch() {
        this.loadSpinner = true;
        this.departments = await this.$axios.$get('http://127.0.0.1:8000/department');
        this.loadSpinner = false;
      },
    },
  };
</script>

<style scoped>
  .form-width-button {
    width: calc(35% - 60px);
  }

  .button-wrapper-send-form {
    display: flex;
    justify-content: center;
  }
</style>

