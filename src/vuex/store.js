import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    amount: 5
}

const mutations = {
    INCREMENT (state, amount) {
        state.count = state.count + amount
    },

    DECREMENT (state, amount) {
        state.count = state.count - amount
    },

    SETAMOUNT (state, amount) {
        state.amount = amount
    }
}

export default new Vuex.Store({
    state,
    mutations
})
