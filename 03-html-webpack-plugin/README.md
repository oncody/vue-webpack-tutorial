# In our last example we had our 'index.html' file in our 'dist' directory

# We should not manually add files to our 'dist' directory

# Globally add the 'http-server' package to NPM
yarn global add http-server

# Add our NPM dependencies
yarn

# Run webpack to bundle our dependencies. 
yarn build

# Have 'http-server' serve our 'index.html' file
yarn start

# Open a browser to the address and port outputted from the last command

# If you see a message in your browser, then vue is working!