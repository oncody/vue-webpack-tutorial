# In this example we show how to configure vue-loader in webpack to use single file components

# Single file components are great because all related code for your component is in the same place! 

# To have webpack support this, we need to configure vue-loader to process all *.vue files

# Globally add 'http-server'
yarn global add http-server

# Add NPM dependencies
yarn

# Run webpack
yarn build

# Run 'http-server'
yarn start

# Open a browser to the address and port outputted from the last command

# If you see our message from 'App.vue', then vue-loader is working!
