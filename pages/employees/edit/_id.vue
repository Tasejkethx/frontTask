
<template>
  <div class="container">
    <formComponent
      :name.sync="employee.name"
      :surname.sync="employee.surname"
      :patronymic.sync="employee.patronymic"
      :sex.sync="employee.sex"
      :salary.sync="employee.salary"
      :department_id.sync="employee.department_id"
      :departments="departments"
    >
    </formComponent>
    <div class="button-wrapper-send-form">
      <button type='submit' class="btn btn-primary mt-3 mr-2 form-width-button" :disabled="loadSpinner"
              @click="editEmployee"><i
        v-if="loadSpinner" class="fa fa-spin fa-spinner"></i> Редактировать
      </button>
    </div>
  </div>
</template>

<script>

  /*  import SwalAlerts from '../../Swal';
    import validationErrors from '../../validationErrors';*/

  import formComponent from '../formComponent';

  export default {
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    components: {formComponent},
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
      editEmployee() {
        this.$axios.$put('http://127.0.0.1:8000/employee/' + this.employee.id, this.employee)
      },
      async fetch() {
        this.loadSpinner = true;
        this.employee = await this.$axios.$get('http://127.0.0.1:8000/employee/' + this.$route.params.id + '/edit');
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
