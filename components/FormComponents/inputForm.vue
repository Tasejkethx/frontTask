<template>
  <div>
    <label :for="name" class="font-weight-bold"> {{label}} </label>
    <input :id="id" :name="name" :type="type" class="form-control" v-bind:value="value"
           v-on:input="onChange"/>
    <span class="mt-2 mb-2 text-danger" v-if="errorMessage"> {{errorMessage}} </span>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      id: String,
      label: String,
      value: '',
      type: String,
      errorMessage: '',
    },
    methods: {
      onChange(event) {
        this.$emit('update:value', event.target.value);
        this.$emit('delErrorMessage', []);
      },
    },
  };
</script>

<style scoped>

</style>
