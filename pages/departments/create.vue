
<template>
  <div class="container">
    <formComponent
      v-model="department.name"
    >
    </formComponent>
    <div class="button-wrapper-send-form mt-2">
      <button class="btn btn-primary mt-3 form-width-button" @click="create"> Создать</button>
    </div>
  </div>
</template>

<script>

  import formComponent from './formComponent';
  export default {
    components :{ formComponent},
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
  .form-width-button {
    width: calc(35% - 60px);
  }

  .button-wrapper-send-form {
    display: flex;
    justify-content: center;
  }
</style>

