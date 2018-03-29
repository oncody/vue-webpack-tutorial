# In this tutorial you'll learn how to use the html webpack plugin to generate our html file for us that will automatically include our bundled javascript code

# In our previous tutorials we had our 'index.html' file manually include generated files from the 'dist' directory

# We should not manually include files in the 'dist' directory

# Globally add 'http-server'
yarn global add http-server

# Add NPM dependencies
yarn

# Run webpack 
yarn build

# Also notice that the html webpack plugin created an 'index.html' file in our 'dist' directory

# This new index.html includes the new index.js in the 'dist' directory that is bundled with its dependencies

# Run http-server
yarn start

# Navigate to our app

# If you see our message from 'App.vue', then the html webpack plugin is working!
