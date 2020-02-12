<template>
  <div class="container">
    <div class="text-center py-3 mb-2">
      <h4> Добавление нового сотрудника</h4>
    </div>
    <form @submit.prevent="create">
      <div class="flex-center">
        <formComponent
          :department="departments"
          :employee="employee"
          :errorMessages="errorMessage"
          @onChangeEmployee="employee = $event"
          @onChangeErrors="errorMessage = $event"
        >
        </formComponent>
      </div>
      <div class="button-wrapper-send-form mt-2">
        <button class="btn btn-primary mt-3 mr-2 form-width-button" type="submit"> Создать</button>
      </div>
    </form>
  </div>
</template>

<script>
  import SweetAlerts from '../../plugins/SweetAlerts';
  import formComponent from '../../components/FormComponents/EmployeeFormComponent';

  export default {
    middleware: ['employeeCreateAccess'],
    components: {
      formComponent,
    },
    async fetch({store}) {
      await store.dispatch('departments/fetch');
    },
    computed: {
      departments() {
        return this.$store.getters['departments/departments'];
      },
    },
    data() {
      return {
        employee: {
          department_id: [],
        },
        errorMessage: {},
      };
    },
    methods: {
      async create() {
        try {
          await this.$store.dispatch('employees/createEmployee', this.employee);
          await this.$router.push('/employees');
          SweetAlerts.employeeSuccessAdded();
        } catch (e) {
          this.errorMessage = e.response.data.errors;
        }
      },
    },
  };
</script>

<style scoped>
  .form-width-button {
    width: 19%;
  }

  .button-wrapper-send-form {
    display: flex;
    justify-content: center;
  }

  .flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
  }

</style>

