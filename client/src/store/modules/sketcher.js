/* eslint-disable no-console */
const state = {
  colors: {
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
  }
};

const getters = {
  mainColor: (state) => {
    const mainColor = { ...state.colors.mainColor };
    return { mainColor };
  },
  secondaryColor: (state) => {
    const secondaryColor = { ...state.colors.secondaryColor };
    return { secondaryColor };
  },
  mainColorRGB: (state) => {
    const { r, g, b, a } = state.colors.mainColor.rgba;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  },
  secondaryColorRGB: (state) => {
    const { r, g, b, a } = state.colors.secondaryColor.rgba;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
};

const actions = {
  updateColor({ commit }, color) {
    commit("UPDATE_COLOR", { color });
  }
};

const mutations = {
  UPDATE_COLOR(state, { color }) {
    state.colors = { ...state.colors, ...color };
  }
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
};
