<template>
  <div>
    <div class="mb-3 mt-3 font-weight-bold"> {{title}}</div>
    <div class="d-block my-2 mb-2">
      <div :key="radioButton.id" class="custom-control custom-radio" v-for="radioButton in radioButtons">
        <input :id="radioButton.id" :name="radioButton.name" :value="radioButton.value" class="custom-control-input"
               type="radio"
               v-model="selected"
               v-on:input="onChange">
        <label :for="radioButton.id" class="custom-control-label"> {{radioButton.label}} </label>
      </div>
      <span class="mt-2 mb-2 text-danger" v-if="errorMessage"> {{errorMessage}} </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      radioButtons: {
        value: String,
        id: '',
        name: String,
        label: String,
      },
      selected: String,
      errorMessage: '',
    },
    methods: {
      onChange(event) {
        this.$emit('update:selected', event.target.value);
        this.$emit('delErrorMessage', []);
      },
    },
  };
</script>

<style scoped>

</style>
