<template>
  <div class="container">
    <div class="text-center py-3 mb-2">
      <h4>Изменение отдела</h4>
    </div>
    <form id="newForm">
      <div class="flex-center">
        <div class="mb-3">
          <inputNameForm
            :value.sync="department.name"
            id="name"
            label="Название отдела"
            name="name"
          >
          </inputNameForm>
        </div>
      </div>
    </form>
    <div class="button-wrapper-send-form">
      <button :disabled="loadSpinner" @click="editDepartment" class="btn btn-primary mt-3 form-width-button"
              type='submit'>
        <i class="fa fa-spin fa-spinner" v-if="loadSpinner"></i> Редактировать
      </button>
    </div>
  </div>
</template>

<script>
  /* import SwalAlerts from '../../Swal';
import validationErrors from '../../validationErrors';*/
  import inputNameForm from '../../../components/FormComponents/inputForm';

  export default {
    async asyncData({$axios, params}) {
      const department = await $axios.$get('http://127.0.0.1:8000/department/' + params.id + '/edit');
      return {department};
    },
    validate({params}) {
      return /^\d+$/.test(params.id);
    },
    components: {inputNameForm},
    data() {
      return {
        department: {
          id: null,
          name: '',
        },
        loadSpinner: false,
      };
    },
    methods: {
      async editDepartment() {
        await this.$axios.put('http://127.0.0.1:8000/department/' + this.department.id, this.department);
      },
    },
  };
</script>

<style scoped>
  .form-width-button {
    width: calc(35% - 60px);
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
