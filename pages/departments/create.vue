<template>
  <div class="container">
    <div class="text-center py-3 mb-2">
      <h4> Добавление нового отдела</h4>
    </div>
    <form id="newForm">
      <div class="flex-center">
        <div class="mb-3">
          <inputNameForm
            :errorMessage="errorMessage.name && errorMessage.name[0]"
            :value.sync="department.name"
            @onChangeMessage="errorMessage.name = $event"
            id="name"
            label="Название отдела"
            name="name"
          >
          </inputNameForm>
        </div>
      </div>
    </form>
    <div class="button-wrapper-send-form mt-2">
      <button @click="create" class="btn btn-primary mt-3 form-width-button"> Создать</button>
    </div>
  </div>
</template>

<script>

  import inputNameForm from '../../components/FormComponents/inputForm';
  import SweetAlerts from '../../plugins/SweetAlerts';

  export default {
    components: {
      inputNameForm,
    },
    data() {
      return {
        department: {
          name: '',
        },
        errorMessage: {},
      };
    },
    methods: {
      async create() {
        try {
          await this.$axios.$post('http://127.0.0.1:8000/department', this.department);
          this.$router.push('/departments');
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
    width: calc(25% - 120px);
  }

  .button-wrapper-send-form {
    display: flex;
    justify-content: center;
  }
</style>

