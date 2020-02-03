<template>
  <section>
 HELLO
  </section>
</template>
<!--

<script>
  export default {
    data() {
      return {
        employees: {},
        departments: {},
        loadSpinner: false,
      };
    },
    mounted() {
      this.fetch();
    },
    methods: {
      fetch() {
        this.loadSpinner = true;
        Promise.all([Axios.get('../department'), Axios.get('../employee')]).
            then(([departmentResponse, employeeResponse]) => {
              this.departments = departmentResponse.data;
              this.employees = employeeResponse.data;
              this.loadSpinner = false;
            }).
            catch(error => {
              console.log(error);
            });

      },
      nextPageEmployees(page = 1) {
        Axios.get('../employee?page=' + page).then(response => {
          this.employees = response.data;
        });
      },
    },
  };
</script>
-->

<style scoped>
  .myclass {
    padding: 2%;
  }

  .flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
  }
</style>
