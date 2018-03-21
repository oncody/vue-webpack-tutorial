<!-- In this one vue component file we can include our HTML, javascript, and CSS -->
<!-- This is called a single-file component and is the recommended way to develop your vue application -->

<!-- Include HTML here -->
<template>
    <div> <!-- Always put your HTML inside a single outermost HTML component -->
        {{ message }}
    </div>
</template>

<!-- Put javascript here -->
<script>
    module.exports = {
        // Component options go here
        data: function () { // The 'data' option should always return a function
            return {
                message: 'Vue is successfully working with single-file components!'
            }
        }
    }
</script>

<!-- Put CSS that only applies to this file here -->
<style scoped>
    div {
        color: red;
    }
</style>

<!-- Put CSS that should apply globally to your application here -->
<style>
    div {
        text-align: center;
    }
</style>