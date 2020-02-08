<template>
  <div class="container">
    <div class="text-center py-3 mb-2">
      <h4> Добавление нового сотрудника</h4>
    </div>
    <form id="newForm">
      <div class="flex-center">
        <div class="mb-3">

          <inputNameForm
            :errorMessage="errorMessage.name && errorMessage.name[0]"
            :value.sync="employee.name"
            @onChangeMessage="errorMessage.name = $event"
            id="name"
            label="Имя"
            name="name"
            type="text"
          >
          </inputNameForm>

          <inputSurnameForm
            :errorMessage="errorMessage.surname && errorMessage.surname[0]"
            :value.sync="employee.surname"
            @onChangeMessage="errorMessage.surname = $event"
            id="surname"
            label="Фамилия"
            name="surname"
            type="text"
          >
          </inputSurnameForm>

          <inputPatronymicForm
            :errorMessage="errorMessage.patronymic && errorMessage.patronymic[0]"
            :value.sync="employee.patronymic"
            @onChangeMessage="errorMessage.patronymic = $event"
            id="patronymic"
            label="Отчество"
            name="patronymic"
            type="text"
          >
          </inputPatronymicForm>

          <radioSexForm
            :errorMessage="errorMessage.sex && errorMessage.sex[0]"
            :radio-buttons="radios"
            :selected.sync="employee.sex"
            @onChangeMessage="errorMessage.sex = $event"
            title="Пол"
          >
          </radioSexForm>

          <inputSalaryForm
            :errorMessage="errorMessage.salary && errorMessage.salary[0]"
            :value.sync="employee.salary"
            @onChangeMessage="errorMessage.salary = $event"
            id="salary"
            label="Заработная плата"
            name="salary"
            type="number"
          >
          </inputSalaryForm>

          <inputCheckboxForm
            :check-buttons="departments"
            :errorMessage="errorMessage.department_id && errorMessage.department_id[0]"
            :selected="employee.department_id"
            @onChangeMessage="errorMessage.department_id = $event"
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
  import radioSexForm from '../../components/FormComponents/radioForm';
  import inputSalaryForm from '../../components/FormComponents/inputForm';
  import inputPatronymicForm from '../../components/FormComponents/inputForm';
  import inputSurnameForm from '../../components/FormComponents/inputForm';
  import inputNameForm from '../../components/FormComponents/inputForm';
  import inputCheckboxForm from '../../components/FormComponents/checkboxForm';
  import SweetAlerts from '../../plugins/SweetAlerts';

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
          }],
        errorMessage: {},
      };
    },
    methods: {
      async create() {
        try {
          await this.$axios.$post('http://127.0.0.1:8000/employee', this.employee);
          this.$router.push('/employees');
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

