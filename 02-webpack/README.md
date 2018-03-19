# Instead of using a CDN, let's download vue from NPM and bundle our modules with webpack.

# Notice that our 'index.html' file is under our 'dist' directory

# Globally add the 'http-server' package to NPM
yarn global add http-server

# Add our NPM dependencies
yarn

# This will create a 'node_modules' directory with our dependencies

# Run webpack to bundle our dependencies. 
yarn build

# This will package our 'main.js' file and its dependencies into a single 'main.js' file in our 'dist' directory

# Have 'http-server' serve our 'index.html' file
yarn start

# Open a browser to the address and port outputted from the last command

# If you see a message in your browser, then vue is working!