const state = () => ({
  loggedIn: false,
  authState: undefined,
  user: undefined
});

const actions = {
  login({ commit }, { authState, user }) {
    commit('setLoggedIn', true);
    commit('setAuthState', authState);
    commit('setUser', user);
  },
  logout({ commit }, { authState, user }) {
    commit('setLoggedIn', false);
    commit('setAuthState', authState);
    commit('setUser', user);
  }
};

const mutations = {
  setLoggedIn(state, loggedIn) {
    state.loggedIn = loggedIn;
  },
  setAuthState(state, authState) {
    state.authState = authState;
  },
  setUser(state, user) {
    state.user = user;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
