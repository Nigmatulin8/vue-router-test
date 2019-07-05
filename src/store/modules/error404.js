export default {
    namespaced: true,
    state: {
        ErrorInfo: 'Error 404.Page not found.'
    },
    getters: {
        getErrorInfo(state) {
            return state.ErrorInfo;
        }
    },
    mutations: {

    }
}