<template>
  <div class="container">
    <div class="text-center py-3 mb-2">
      <h4> Добавление нового сотрудника</h4>
    </div>
    <form @submit.prevent="create">
      <div class="flex-center">
        <div class="mb-3">

          <inputNameForm
            :errorMessage="errorMessage.name && errorMessage.name[0]"
            :value.sync="employee.name"
            @delErrorMessage="errorMessage.name = $event"
            id="name"
            label="Имя"
            name="name"
            type="text"
          >
          </inputNameForm>

          <inputSurnameForm
            :errorMessage="errorMessage.surname && errorMessage.surname[0]"
            :value.sync="employee.surname"
            @delErrorMessage="errorMessage.surname = $event"
            id="surname"
            label="Фамилия"
            name="surname"
            type="text"
          >
          </inputSurnameForm>

          <inputPatronymicForm
            :errorMessage="errorMessage.patronymic && errorMessage.patronymic[0]"
            :value.sync="employee.patronymic"
            @delErrorMessage="errorMessage.patronymic = $event"
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
            @delErrorMessage="errorMessage.sex = $event"
            title="Пол"
          >
          </radioSexForm>

          <inputSalaryForm
            :errorMessage="errorMessage.salary && errorMessage.salary[0]"
            :value.sync="employee.salary"
            @delErrorMessage="errorMessage.salary = $event"
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
            @delErrorMessage="errorMessage.department_id = $event"
            @onDepChange="employee.department_id=$event"
            title="Отделения"
          >
          </inputCheckboxForm>
        </div>
      </div>
      <div class="button-wrapper-send-form mt-2">
        <button class="btn btn-primary mt-3 mr-2 form-width-button" type="submit"> Создать</button>
      </div>
    </form>
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
          await this.$store.dispatch('employees/createEmployee', this.employee);
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

