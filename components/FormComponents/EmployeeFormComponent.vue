<template>
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
</template>

<script>
  import radioSexForm from './radioForm';
  import inputSalaryForm from './inputForm';
  import inputPatronymicForm from './inputForm';
  import inputSurnameForm from './inputForm';
  import inputNameForm from './inputForm';
  import inputCheckboxForm from './checkboxForm';

  export default {
    components: {
      inputNameForm,
      inputSurnameForm,
      inputPatronymicForm,
      inputSalaryForm,
      radioSexForm,
      inputCheckboxForm,
    },
    props: {
      errorMessages: {},
      department: {},
      employee: {},
    },
    data() {
      return {
        errorMessage: this.errorMessages,
        departments: this.department,
        employees: this.employees,
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
      };
    },
    methods: {
      onDepChange: function() {
        this.$emit('onChangeEmployee', this.employees);
        this.$emit('onChangeErrors', this.errorMessage);
      },
    },
    watch: {
      'errorMessages': function(value) {
        this.errorMessage = value;
      },
      'department': function(value) {
        this.departments = value;
      },
      'employee': function(value) {
        this.employees = value;
      },

    },
  };
</script>

<style scoped>

</style>
