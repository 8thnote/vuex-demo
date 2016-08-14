export const incrementCounter = function ({ dispatch, state }) {
    dispatch('INCREMENT', state.amount)
}

export const decrementCounter = function ({ dispatch, state }) {
    dispatch('DECREMENT', state.amount)
}

export const setAmount = function ({ dispatch }, e) {
    dispatch('SETAMOUNT', parseInt(e.target.value))
}
