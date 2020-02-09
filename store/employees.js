export const state = () => ({
  employees: []
});

export const mutations = {
  setEmployees(state,employees){
    state.employees = employees;
  },
};

export const actions = {
  async fetch({commit}){
    const employees = await this.$axios.$get('http://127.0.0.1:8000/employee');
    commit('setEmployees', employees);
  },
  async updatePagination ({commit}, page) {
    const employees = await this.$axios.$get('http://127.0.0.1:8000/employee?page=' + page);
    commit('setEmployees', employees);
  },
  async createEmployee({dispatch},employee){
    await this.$axios.$post('http://127.0.0.1:8000/employee', employee);
     dispatch('fetch');
  },
  async updateEmployee({dispatch}, employee){
    await this.$axios.$put('http://127.0.0.1:8000/employee/'+ employee.id, employee);
    dispatch('fetch');
  },
};

export const getters = {
  employees: s=> s.employees
};
