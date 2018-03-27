# In our previous examples we had our 'index.html' file manually include generated files from the 'dist' directory

# We should not manually include files in the 'dist' directory

# Globally add 'http-server'
yarn global add http-server

# Add NPM dependencies
yarn

# Run webpack 
yarn build

# Also notice that the html-webpack-plugin created an 'index.html' file in our 'dist' directory

# This new index.html includes the new index.js in the 'dist' directory that is bundled with its dependencies

# Run 'http-server'
yarn start

# Open a browser to the address and port outputted from the last command

# If you see our message from 'App.vue', then the html webpack plugin is working!
