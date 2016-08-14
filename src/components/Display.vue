<template>
    <div class="hello">
        <h3>Count is {{ counterValue }}</h3>
        <p>Testing...</p>
    </div>
</template>

<script>
import { getCount } from '../vuex/getters'

export default {
    data () {
        return {

        }
    },
    vuex: {
        getters: {
            counterValue: getCount
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
