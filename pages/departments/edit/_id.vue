<template>
  <div class="container">
    <div class="text-center py-3 mb-2">
      <h4>Изменение отдела</h4>
    </div>
    <form @submit.prevent="editDepartment">
      <div class="flex-center">
        <div class="mb-3">
          <inputNameForm
            :errorMessage="errorMessage.name && errorMessage.name[0]"
            :value.sync="department.name"
            @delErrorMessage="errorMessage.name = $event"
            id="name"
            label="Название отдела"
            name="name"
          >
          </inputNameForm>
        </div>
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

  import inputNameForm from '../../../components/FormComponents/inputForm';
  import SweetAlerts from '../../../plugins/SweetAlerts';

  export default {
    async asyncData({$axios, params}) {
      const department = await $axios.$get('http://127.0.0.1:8000/department/' + params.id + '/edit');
      return {department};
    },
    validate({params}) {
      return /^\d+$/.test(params.id);
    },
    components: {
      inputNameForm,
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
