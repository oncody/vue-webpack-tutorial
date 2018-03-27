# In this tutorial we'll show you how to use webpack to bundle your project's dependencies

# We now have a webpack configuration file (webpack.config.js)

# Webpack allows us to bundle dependencies into simple files for a web server to serve

# We need webpack to bundle our index.js file with vue

# Another interesting thing is our index.html includes index.js from the 'dist' directory that does not exist yet

# This is intentional and webpack will create that directory and file for us when it runs

# Globally add 'http-server'
yarn global add http-server

# Add our NPM dependencies
yarn

# This will create a 'node_modules' directory with our NPM dependencies

# Run webpack
yarn build

# This will first create the 'dist' directory

# Then it bundle index.js and all its dependencies into a single 'index.js' file inside 'dist'

# Run 'http-server'
yarn start

# Navigate to our app

# Look for our message from index.js
