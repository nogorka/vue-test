export const state = () => ({
    credentials: []
})
export const mutations = {
    setCredentials(state, credentials) {
        state.credentials = credentials;
    },
    clearCredentials(state) {
        state.credentials = []
    }
}
export const actions = {
    login({ commit }, payload) {
        commit('setCredentials', [payload.login, payload.password]);
    },
    logout({ commit }) {
        commit('clearCredentials')
    }
}
export const getters = {
    hasCredentials: s => (s.credentials.length != 0),
    getLogin: s => s.credentials[0]

}