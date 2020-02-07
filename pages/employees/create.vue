<template>
  <div class="container">
    <div class="text-center py-3 mb-2">
      <h4> Добавление нового сотрудника</h4>
    </div>
    <form  id="newForm">
      <div class="flex-center">
        <div class="mb-3">
    <inputNameForm
      :value.sync="employee.name"
      id="name"
      label="Имя"
      name="name"
      type="text"
    >
    </inputNameForm>

    <inputSurnameForm
      :value.sync="employee.surname"
      id="surname"
      label="Фамилия"
      name="surname"
      type="text"
    >
    </inputSurnameForm>

    <inputPatronymicForm
      :value.sync="employee.patronymic"
      id="patronymic"
      label="Отчество"
      name="patronymic"
      type="text"
    >
    </inputPatronymicForm>

    <radioSexForm
      :radio-buttons="radios"
      :selected.sync="employee.sex"
      title="Пол"
    >
    </radioSexForm>

    <inputSalaryForm
      :value.sync="employee.salary"
      id="salary"
      label="Заработная плата"
      name="salary"
      type="number"
    >
    </inputSalaryForm>

    <inputCheckboxForm
      :check-buttons="departments"
      :selected="employee.department_id"
      @onDepChange="employee.department_id=$event"
      title="Отделения"
    >
    </inputCheckboxForm>
    </div>
      </div>
    </form>
    <div class="button-wrapper-send-form mt-2">
      <button @click="create" class="btn btn-primary mt-3 mr-2 form-width-button"
              type='submit'>
        Создать
      </button>
    </div>

  </div>
</template>

<script>

  /* import SwalAlerts from '../../Swal';
import validationErrors from '../../validationErrors';*/
  import radioSexForm from '../../components/FormComponents/radioForm';
  import inputSalaryForm from '../../components/FormComponents/inputForm';
  import inputPatronymicForm from '../../components/FormComponents/inputForm';
  import inputSurnameForm from '../../components/FormComponents/inputForm';
  import inputNameForm from '../../components/FormComponents/inputForm';
  import inputCheckboxForm from '../../components/FormComponents/checkboxForm';

  export default {
    components: {
      inputNameForm,
      inputSurnameForm,
      inputPatronymicForm,
      inputSalaryForm,
      radioSexForm,
      inputCheckboxForm,
    },
    async asyncData({$axios}) {
      const departments = await $axios.$get('http://127.0.0.1:8000/department');
      return {departments};
    },
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
        radios: [
          {
            name: 'sex',
            id: 'male',
            label: 'Мужчина',
            value: 'male',
          },
          {
            name: 'sex',
            id: 'female',
            label: 'Женщина',
            value: 'female',
          }]
        ,

      };
    },
    methods: {
      async create() {
        let status = await this.$axios.$post('http://127.0.0.1:8000/employee', this.employee);
      },
    },
  };
</script>

<style scoped>
  .form-width-button {
    width: calc(25% - 120px);
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

