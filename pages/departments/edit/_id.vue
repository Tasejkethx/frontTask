<template>
  <div class="container">
    <div class="text-center py-3 mb-2">
      <h4>Изменение отдела</h4>
    </div>
    <form @submit.prevent="editDepartment">
      <div class="flex-center">
        <formComponent
          :department="department"
          :errorMessage="errorMessage"
          @onChangeDepartments="department = $event"
          @onChangeErrors="errorMessage = $event"
        >
        </formComponent>
      </div>
      <div class="button-wrapper-send-form">
        <button class="btn btn-primary mt-3 form-width-button" type="submit">
          Редактировать
        </button>
      </div>
    </form>
  </div>
</template>

<script>

  import SweetAlerts from '../../../plugins/SweetAlerts';
  import formComponent from '../../../components/FormComponents/DepartmentFormComponent';

  export default {

    async asyncData({$axios, params}) {
      const department = await $axios.$get('http://127.0.0.1:8000/department/' + params.id + '/edit');
      return {department};
    },
    validate({params}) {
      return /^\d+$/.test(params.id);
    },
    components: {
      formComponent,
    },
    data() {
      return {
        errorMessage: {},
      };
    },
    methods: {
      async editDepartment() {
        try {
          await this.$store.dispatch('departments/updateDepartment', this.department);
          await this.$router.push('/departments');
          SweetAlerts.departmentSuccessUpdated();
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
