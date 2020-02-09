<template>
  <div class="container">
    <div class="text-center py-3 mb-2">
      <h4> Добавление нового отдела</h4>
    </div>
    <form @submit.prevent="create">
      <div class="flex-center">
        <formComponent
          :department="department"
          :errorMessage="errorMessage"
          @onChangeDepartments="department = $event"
          @onChangeErrors="errorMessage = $event"
        >
        </formComponent>
      </div>
      <div class="button-wrapper-send-form mt-2">
        <button class="btn btn-primary mt-3 form-width-button" type="submit"> Создать</button>
      </div>
    </form>
  </div>
</template>

<script>

  import SweetAlerts from '../../plugins/SweetAlerts';
  import formComponent from './formComponent';

  export default {
    components: {
      formComponent,
    },
    data() {
      return {
        department: {},
        errorMessage: {},
      };
    },
    methods: {
      async create() {
        try {
          await this.$store.dispatch('departments/createDepartment', this.department);
          await this.$router.push('/departments');
          SweetAlerts.departmentSuccessAdded();
        } catch (e) {
          this.errorMessage = e.response.data.errors;
        }
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

  .form-width-button {
    width: 19%;
  }

  .button-wrapper-send-form {
    display: flex;
    justify-content: center;
  }
</style>

