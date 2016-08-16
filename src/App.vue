<template>
    <div id="app">
        <h1>Hello World!</h1>
        <Display></Display>
        <Increment-Amount></Increment-Amount>
        <Increment></Increment>
        <Decrement></Decrement>
    </div>
</template>

<script>
    import Display from './components/Display'
    import IncrementAmount from './components/IncrementAmount'
    import Increment from './components/Increment'
    import Decrement from './components/Decrement'
    import store from './vuex/store'

    export default {
        components: {
            Display,
            IncrementAmount,
            Increment,
            Decrement
        },
        store
    }
</script>

<style>

</style>
