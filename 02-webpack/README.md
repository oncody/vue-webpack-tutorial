# Instead of using a CDN, let's add vue from NPM and bundle our modules with webpack

# Notice that our 'index.html' file is under the 'dist' directory

# Globally add 'http-server'
yarn global add http-server

# Add our NPM dependencies
yarn

# This will create a 'node_modules' directory with our NPM dependencies

# Run webpack to bundle our dependencies
yarn build

# This will package our 'main.js' file and its dependencies into a single 'main.js' file in our 'dist' directory

# Run 'http-server'
yarn start

# Open a browser to the address and port outputted from the last command

# If you see our message from 'main.js', then vue is working!