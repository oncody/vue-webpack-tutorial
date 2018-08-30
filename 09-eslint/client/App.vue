<!-- Always put HTML inside a single outermost HTML component -->
<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
  module.exports = {
    // The 'data' option should always return a function
    data() {
      return {
        message: 'webpack-dev-middleware is working!'
      }
  }
  }
</script>

<style scoped>
  div {
    color: red;
  }
</style>
