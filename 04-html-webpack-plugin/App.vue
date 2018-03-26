<template>
    <div> <!-- Always put HTML inside a single outermost HTML component -->
        {{ message }}
    </div>
</template>

<script>
    module.exports = {
        data: function () { // The 'data' option should always return a function
            return {
                message: 'HtmlWebpackPlugin is working!'
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