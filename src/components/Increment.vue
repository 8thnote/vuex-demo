<template>
    <div class="hello">
        <button @click='increment'>Increment +{{ amount }}</button>
    </div>
</template>

<script>
import { getAmount } from '../vuex/getters'
import { incrementCounter } from '../vuex/actions'

export default {
    data () {
        return {

        }
    },
    vuex: {
        getters: {
            amount: getAmount
        },
        actions: {
            increment: incrementCounter
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
