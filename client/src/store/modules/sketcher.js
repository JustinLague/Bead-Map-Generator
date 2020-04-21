const state = {
  color: {
    rgba: {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }
  }
};

const actions = {
  updateColor({ commit }, color) {
    commit("updateColor", { color });
  }
};

const mutations = {
  updateColor(state, { color }) {
    state.color = { ...color };
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
