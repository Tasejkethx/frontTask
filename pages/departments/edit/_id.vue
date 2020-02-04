
<template>
  <div class="container">
    <formComponent
      :myName="department.name"
      v-model="department.name"
    >
    </formComponent>
    <div class="button-wrapper-send-form">
      <button type='submit' class="btn btn-primary mt-3 form-width-button" :disabled="loadSpinner"
              @click="editDepartment"><i
        v-if="loadSpinner" class="fa fa-spin fa-spinner"></i> Редактировать
      </button>
    </div>
  </div>
</template>

<script>
 /* import SwalAlerts from '../../Swal';
  import validationErrors from '../../validationErrors';*/
 import formComponent from "../formComponent";

  export default {
    components: {formComponent},
    data() {
      return {
        department: {
          id: null,
          name: '',
        },
        loadSpinner: false,
      };
    },
    mounted() {
      this.fetch();
    },
    methods: {
     async editDepartment() {
       await this.$axios.put('http://127.0.0.1:8000/department/' + this.department.id, this.department);
      },
    async  fetch() {
        this.loadSpinner = true;
       this.department= await this.$axios.$get('http://127.0.0.1:8000/department/' + this.$route.params.id + '/edit');
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
