const state = {
  mainColor: {
    rgba: {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }
  },
  secondaryColor: {
    rgba: {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }
  }
};

const getters = {
  mainColorRGB: (state) => {
    return `rgba(${state.mainColor.rgba.r}, ${state.mainColor.rgba.g}, ${state.mainColor.rgba.b}, ${state.mainColor.rgba.a})`;
  },
  secondaryColorRGB: (state) => {
    return `rgba(${state.secondaryColor.rgba.r}, ${state.secondaryColor.rgba.g}, ${state.secondaryColor.rgba.b}, ${state.secondaryColor.rgba.a})`;
  }
};

const actions = {
  updateMainColor({ commit }, mainColor) {
    commit("updateMainColor", { mainColor });
  },
  updateSecondaryColor({ commit }, secondaryColor) {
    commit("updateSecondaryColor", { secondaryColor });
  }
};

const mutations = {
  updateMainColor(state, { mainColor }) {
    state.mainColor = { ...mainColor };
  },
  updateSecondaryColor(state, { secondaryColor }) {
    state.secondaryColor = { ...secondaryColor };
  }
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
};
