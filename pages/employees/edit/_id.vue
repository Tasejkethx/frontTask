<template>
  <div class="container">
    <div class="text-center py-3 mb-2">
      <h4> Изменение сотрудника</h4>
    </div>
    <inputNameForm
      name="name"
      id="name"
      label="Имя"
      type="text"
      :value.sync="employee.name"
    >
    </inputNameForm>

    <inputSurnameForm
      name="surname"
      id="surname"
      label="Фамилия"
      type="text"
      :value.sync="employee.surname"
    >
    </inputSurnameForm>

    <inputPatronymicForm
      name="patronymic"
      id="patronymic"
      label="Отчество"
      type="text"
      :value.sync="employee.patronymic"
    >
    </inputPatronymicForm>

    <radioSexForm
      title="Пол"
      :selected.sync="employee.sex"
      :radio-buttons="radios"
    >
    </radioSexForm>

    <inputSalaryForm
      name="salary"
      id="salary"
      label="Заработная плата"
      type="number"
      :value.sync="employee.salary"
    >
    </inputSalaryForm>

    <inputCheckboxForm
      title="Отделения"
      :selected="employee.department_id"
      @onDepChange="employee.department_id=$event"
      :check-buttons="departments"
    >
    </inputCheckboxForm>

    <div class="button-wrapper-send-form">
      <button type='submit' class="btn btn-primary mt-3 mr-2 form-width-button" :disabled="loadSpinner"
              @click="editEmployee"><i
        v-if="loadSpinner" class="fa fa-spin fa-spinner"></i> Редактировать
      </button>
    </div>
  </div>
</template>

<script>

  /*  import SwalAlerts from '../../Swal';
    import validationErrors from '../../validationErrors';*/
  import radioSexForm from '../../../components/FormComponents/radioForm';
  import inputSalaryForm from '../../../components/FormComponents/inputForm';
  import inputPatronymicForm from '../../../components/FormComponents/inputForm';
  import inputSurnameForm from '../../../components/FormComponents/inputForm';
  import inputNameForm from '../../../components/FormComponents/inputForm';
  import inputCheckboxForm from '../../../components/FormComponents/checkboxForm';

  export default {
    components: {
      inputNameForm,
      inputSurnameForm,
      inputPatronymicForm,
      inputSalaryForm,
      radioSexForm,
      inputCheckboxForm,
    },

    validate({params}) {
      return /^\d+$/.test(params.id);
    },

    data() {
      return {
        employee: {
          name: String,
          surname: String,
          patronymic: String,
          sex: null,
          salary: Number,
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
        departments: [],
        loadSpinner: false,
      };
    },
    mounted() {
      this.fetch();
    },
    methods: {
      editEmployee() {
        this.$axios.$put('http://127.0.0.1:8000/employee/' + this.employee.id, this.employee);
      },
      async fetch() {
        this.loadSpinner = true;
        this.employee = await this.$axios.$get('http://127.0.0.1:8000/employee/' + this.$route.params.id + '/edit');
        this.departments = await this.$axios.$get('http://127.0.0.1:8000/department');
        let mass = [];
        this.employee.departments.forEach((element) => {
          mass.push(Number(element.id));
        });
        this.employee.department_id = mass;
        this.loadSpinner = false;
      },

    },
  };
</script>

<style scoped>
  .form-width-button {
    width: calc(35% - 60px);
  }

  .button-wrapper-send-form {
    display: flex;
    justify-content: center;
  }
</style>
