module.exports = {
  entry: './index.js',
  mode: 'development',
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {fix: true}
            }
        ]
    },
};
