# In this tutorial we'll show you how to include vue from NPM, and bundle it into your project using webpack

# Notice we have a package.json file

# This is the entry point for NPM

# NPM is the package manager for Node.js and javascript browser packages

# We need NPM to bring in our vue and webpack dependencies

# Our package.json file has some dependencies in it

# This tells NPM of packages our project depends on

# If you need dependencies at runtime, then put these in the 'dependencies' section of your package.json

# However, if you only need your dependencies at compile-time, then put these in the 'devDependencies' section of your package.json

# We also now have a webpack configuration file with a couple basic settings in it

# Webpack allows us to bundle dependencies into simple files for a web server to serve

# We need webpack to bundle our main.js file with vue

# Another interesting thing is our index.html includes main.js from the 'dist' directory that does not exist yet

# While that initially seems strange, that is intentional and webpack will create that directory and file for us when it runs

# Globally add 'http-server'
yarn global add http-server

# Add our NPM dependencies
yarn

# This will create a 'node_modules' directory with our NPM dependencies

# Run webpack
yarn build

# This will first create the 'dist' directory

# Then it bundle main.js and all its dependencies into a single 'main.js' file inside 'dist'

# Run 'http-server'
yarn start

# Navigate to our app

# Look for our message from main.js