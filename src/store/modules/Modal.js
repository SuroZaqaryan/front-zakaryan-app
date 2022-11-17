export default {
  state: {
    showModal: false,
  },

  actions: {
    openModal({ commit }) {
      commit("OPEN_MODAL");
    },

    closeModal({ commit }) {
      commit("CLOSE_MODAL");
    },
  },

  mutations: {
    OPEN_MODAL(state) {
      state.showModal = true;
    },

    CLOSE_MODAL(state) {
      state.showModal = false;
    },

    UPDATED_MODAL(state) {
      state.showModal = state;
    },
  },

  getters: {
    showModal: (state) => {
      return state.showModal;
    },
  },
};
