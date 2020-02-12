<template>
  <div class="mb-3">
    <inputNameForm
      :errorMessage="errorMessages.name && errorMessages.name[0]"
      :value.sync="departments.name"
      @delErrorMessage="errorMessages = $event"
      id="name"
      label="Название отдела"
      name="name"
    >
    </inputNameForm>
  </div>
</template>

<script>
  import inputNameForm from './inputForm';

  export default {
    components: {
      inputNameForm,
    },
    props: {
      errorMessage: {},
      department: {},
    },
    data() {
      return {
        errorMessages: this.errorMessage,
        departments: this.department,
      };
    },
    methods: {
      onDepChange: function() {
        this.$emit('onChangeDepartments', this.departments);
        this.$emit('onChangeErrors', this.errorMessages);
      },
    },
    watch: {
      'errorMessage': function(value) {
        this.errorMessages = value;
      },
      'department': function(value) {
        this.departments = value;
      },
    },
  };
</script>

<style scoped>

</style>
