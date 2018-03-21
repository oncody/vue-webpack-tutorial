# Instead of using a CDN, let's add vue from NPM and bundle our modules with webpack

# Notice that index.html includes main.js from the 'dist' directory that does not exist yet

# Webpack will generate this directory and file for us

# Globally add 'http-server'
yarn global add http-server

# Add our NPM dependencies
yarn

# This will create a 'node_modules' directory with our NPM dependencies

# Run webpack to bundle our dependencies
yarn build

# This will first create the 'dist' directory

# Then it bundle main.js and all its dependencies into a single 'main.js' file inside 'dist'

# Run 'http-server'
yarn start

# Open a browser to the address and port outputted from the last command

# If you see our message from 'main.js', then vue is working!