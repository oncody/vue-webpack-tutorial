<!-- In this one vue component file we can include our HTML, javascript, and CSS -->
<!-- This is called a single-file component and is the recommended way to develop your vue application -->

<!-- Include HTML here -->
<template>
    <div> <!-- Always put HTML inside a single outermost HTML component -->
        {{ message }}
    </div>
</template>

<!-- Put javascript here -->
<script>
    module.exports = {
        data: () => { // The 'data' option should always return a function
            return {
                message: 'Vue-loader is working!'
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
