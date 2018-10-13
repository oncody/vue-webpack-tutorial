<!-- Include HTML here -->
<template>
  <div>
    <div>
      <div> <!-- Always put HTML inside a single outermost HTML component -->
        {{ message }}
      </div>

    </div>
  </div>
</template>

<!-- Put javascript here -->
<script>
  module.exports = {
    data: () => { // The 'data' option should always return a function
      return {
        message: 'Vue-loader is working with html-webpack-plugin!'
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
