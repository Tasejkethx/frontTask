export const state = () => ({
  departments: []
});

export const mutations = {
  setDepartments(state,departments){
    state.departments = departments;
  }
};

export const actions = {
  async fetch({commit}){
    const departments = await this.$axios.$get('http://127.0.0.1:8000/department');
    commit('setDepartments', departments);
  },

  async createDepartment({dispatch},department){
    await this.$axios.$post('http://127.0.0.1:8000/department', department);
    dispatch('fetch');
  },
  async updateDepartment({dispatch}, department){
    await this.$axios.$put('http://127.0.0.1:8000/department/'+ department.id, department);
    dispatch('fetch');
  },
};

export const getters = {
  departments: s=> s.departments,
};
