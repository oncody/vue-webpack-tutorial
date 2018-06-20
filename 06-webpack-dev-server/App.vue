<template>
    <div> <!-- Always put HTML inside a single outermost HTML component -->
        {{ message }}
    </div>
</template>

<script>
    module.exports = {
        data: function () { // The 'data' option should always return a function
            return {
                message: 'webpack-dev-server is working' // Once you see this message in your browser, then change this string, save it, and instantly see your changes!
            }
        }
    }
</script>

<style scoped>
    div {
        color: red;
    }
</style>

<style>
    div {
        text-align: center;
    }
</style>
