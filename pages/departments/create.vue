<template>
  <div class="container">
    <div class="text-center py-3 mb-2">
      <h4> Добавление нового отдела</h4>
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
    <div class="button-wrapper-send-form mt-2">
      <button @click="create" class="btn btn-primary mt-3 form-width-button"> Создать</button>
    </div>
  </div>
</template>

<script>

  import inputNameForm from '../../components/FormComponents/inputForm';

  export default {
    components: {inputNameForm},
    data() {
      return {
        department: {
          name: '',
        },
      };
    },
    methods: {
      create() {
        this.$axios.$post('http://127.0.0.1:8000/department', this.department);
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
    width: calc(35% - 60px);
  }

  .button-wrapper-send-form {
    display: flex;
    justify-content: center;
  }
</style>

