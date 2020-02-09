<template>
  <div>
    <div class="mb-3 mt-3 font-weight-bold"> {{title}}</div>
    <div :key="checkButton.id" class="custom-control custom-checkbox mb-1"
         v-for="checkButton in checkButtons">
      <input :id="checkButton.id" :value="checkButton.id" class="custom-control-input" type="checkbox"
             v-model="isSelected"
             v-on:change="onDepChange"
      />
      <label :for="checkButton.id" class="custom-control-label"> {{checkButton.name}}</label>
    </div>
    <span class="mt-2 mb-2 text-danger position-absolute" v-if="errorMessage"> {{errorMessage}} </span>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      checkButtons: Array,
      selected: Array,
      errorMessage: '',
    },
    data() {
      return {
        isSelected: this.selected,
      };
    },
    methods: {
      onDepChange: function() {
        this.$emit('onDepChange', this.isSelected);
        this.$emit('delErrorMessage', []);
      },
    },
    watch: {
      'selected': function(value) {
        this.isSelected = value;
      },
    },
  };
</script>

<style scoped>

</style>
