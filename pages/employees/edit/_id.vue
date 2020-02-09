<template>
  <div class="container">
    <div class="text-center py-3 mb-2">
      <h4> Изменение сотрудника</h4>
    </div>
    <form @submit.prevent="editEmployee">
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
      <div class="button-wrapper-send-form">
        <button class="btn btn-primary mt-3 mr-2 form-width-button" type="submit"> Редактировать</button>
      </div>
    </form>
  </div>
</template>

<script>
  import formComponent from '../formComponent';
  import SweetAlerts from '../../../plugins/SweetAlerts';

  export default {
    components: {
      formComponent,
    },
    async asyncData({$axios, params}) {
      const employee = await $axios.$get(`http://127.0.0.1:8000/employee/${params.id}/edit`);
      const departments = await $axios.$get('http://127.0.0.1:8000/department');
      let mass = [];
      employee.departments.forEach((element) => {
        mass.push(Number(element.id));
      });
      employee.department_id = mass;
      return {employee, departments};
    },
    validate({params}) {
      return /^\d+$/.test(params.id);
    },
    data() {
      return {
        errorMessage: {},
      };
    },
    methods: {
      async editEmployee() {
        try {
          await this.$store.dispatch('employees/updateEmployee', this.employee);
          await this.$router.push('/employees');
          SweetAlerts.employeeSuccessUpdated();
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

  .flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .button-wrapper-send-form {
    display: flex;
    justify-content: center;
  }
</style>
