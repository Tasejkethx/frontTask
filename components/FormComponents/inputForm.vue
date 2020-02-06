<template>
  <div>
    <label :for="name" class="font-weight-bold"> {{label}} </label>
    <input class="form-control" :type="type" :id="id" :name="name" v-bind:value="value"
           v-on:input="$emit('update:value', $event.target.value)" />
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      id: String,
      label: String,
      value: String,
      type:String,
    },
  };
</script>

<style scoped>

</style>
