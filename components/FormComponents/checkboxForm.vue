<template>
  <div>
    <div class="mb-3 mt-3 font-weight-bold"> {{title}}</div>
    <div class="custom-control custom-checkbox mb-1" v-for="checkButton in checkButtons"
         :key="checkButton.id">
      <input type="checkbox" class="custom-control-input" :id="checkButton.id" :value="checkButton.id"
             v-on:change="onDepChange"
             v-model="isSelected"
      />
      <label class="custom-control-label" :for="checkButton.id"> {{checkButton.name}}</label>
    </div>
    <span class="mb-2 mt-2" id="department_id"></span>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      checkButtons: Array,
      selected: Array,
    },
    data() {
      return {
        isSelected: this.selected,
      };
    },
    methods: {
      onDepChange: function() {
        this.$emit('onDepChange', this.isSelected);
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
