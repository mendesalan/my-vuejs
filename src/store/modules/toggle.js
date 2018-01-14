export default {
    state: {
        count: 1,
        toggle: false
    },
    mutations: { // Sync
        increment (state, payload) {    
        state.count += payload
        },
        toggle (state) {
            state.toggle = !state.toggle
        }
    },
    actions: { // Async
        toggle ({commit}) {
            setTimeout(() => {
                commit('toggle')
            }, 3000)            
        }
    },
    getters : {
        getCount: state => {
            return state.count
        }
    }
}