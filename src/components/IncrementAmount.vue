<template>
    <input type="number" :value="amount" @input="setAmount">
</template>

<script>
import { getAmount } from '../vuex/getters'
import { setAmount } from '../vuex/actions'

export default {
    vuex: {
        getters: {
            amount: getAmount
        },
        actions: {
            setAmount: setAmount
        }
    }
}
</script>

<style scoped>
</style>
