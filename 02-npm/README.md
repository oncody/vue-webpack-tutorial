# In this tutorial you'll learn how to include Vue from NPM

# Notice we have a package.json file

# This is the entry point for Node Package Manager or NPM for short

# NPM is the package manager for javascript browser and Node.js packages

# We need NPM to bring in our vue dependency

# That is why our package.json file lists vue as a dependency

# The 'dependencies' and 'devDependencies' section of package.json tell NPM of packages our project depends on

# If you need dependencies at runtime, then put these in the 'dependencies' section of your package.json

# However, if you only need your dependencies to build your code, then put these in the 'devDependencies' section of your package.json

# Another interesting thing is our index.html includes vue.js from the 'node_modules' directory that does not exist yet

# This is intentional and NPM will create that directory and file for us when it runs

# Globally add 'http-server'
yarn global add http-server

# Add our vue NPM dependency
yarn

# This will create a 'node_modules' directory with our vue NPM dependency

# Run 'http-server'
yarn start

# Navigate to our app

# Look for our message from index.js
