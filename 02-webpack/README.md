# In this tutorial we'll show you how to include vue from NPM, and bundle it into your project using webpack

# Notice our index.html includes main.js from the 'dist' directory that does not exist yet

# Everything is fine

# Webpack will create that directory and file when it runs

# Globally add 'http-server'
yarn global add http-server

# Add our NPM dependencies
yarn

# This will create a 'node_modules' directory with our NPM dependencies

# Run webpack to bundle the dependencies of main.js into a new 'main.js' file
yarn build

# This will first create the 'dist' directory

# Then it bundle main.js and all its dependencies into a single 'main.js' file inside 'dist'

# Run 'http-server'
yarn start

# Open a browser to the address and port outputted from the last command

# If you see our message from 'main.js', then vue is working with NPM and webpack!