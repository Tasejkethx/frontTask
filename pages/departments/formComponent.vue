
<template>
  <div class="container">
    <div class="flex-center">
      <form id="newForm">
        <div class="text-center py-3 mb-2">
          <h4> Добавление нового отдела</h4>
        </div>
        <div class="mb-3">
          <label for="name" class="font-weight-bold"> Название отдела </label>
          <input class="form-control" type="text" id="name" name='name' v-bind:value="myName"
                 v-on:input="$emit('input', $event.target.value)" >
        </div>
      </form>
    </div>
  </div>
</template>

<script>


  export default {
    props: {
      myName: {
        type: String,
      },
    },
    methods: {

    },
  };
</script>

<style scoped>
  .flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
  }
</style>

