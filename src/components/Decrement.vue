<template>
    <div class="hello">
        <button @click='decrement'>Decrement -{{ amount }}</button>
    </div>
</template>

<script>
import { getAmount } from '../vuex/getters'
import { decrementCounter } from '../vuex/actions'

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
            decrement: decrementCounter
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
