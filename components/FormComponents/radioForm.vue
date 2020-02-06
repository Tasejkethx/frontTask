<template>
  <div>
    <div class="mb-3 mt-3 font-weight-bold"> {{title}}</div>
    <div class="d-block my-2 mb-2">
      <div class="custom-control custom-radio" v-for="radioButton in radioButtons" :key="radioButton.id">
        <input type="radio" class="custom-control-input" :id="radioButton.id" :name="radioButton.name"
               :value="radioButton.value"
               v-on:input="$emit('update:selected', $event.target.value)"
               v-model="selected">
        <label class="custom-control-label" :for="radioButton.id"> {{radioButton.label}} </label>
      </div>
      <span class="mb-2 mt-2" id="sex"></span>
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
    },
  };
</script>

<style scoped>

</style>
