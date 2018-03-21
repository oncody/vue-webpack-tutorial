# In this example we show how convenient single-file components are 

# To have webpack support this, we need to configure vue-loader to process *.vue files

# Globally add 'http-server'
yarn global add http-server

# Add NPM dependencies
yarn

# Run webpack
yarn build

# Run 'http-server'
yarn start

# Open a browser to the address and port outputted from the last command

# If you see our message from 'App.vue', then vue is working!