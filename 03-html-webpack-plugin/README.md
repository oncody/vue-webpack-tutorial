# In our last example we had our 'index.html' file in the 'dist' directory

# We should not manually add files to the 'dist' directory

# Globally add 'http-server'
yarn global add http-server

# Add dependencies
yarn

# Bundle dependencies with webpack 
yarn build

# Notice that webpack created a 'dist' directory for us

# Also notice that the html-webpack-plugin moved our 'index.html' file to the 'dist' directory

# The plugin also modified our 'index.html' file to include the new 'main.js' file that is bundled with its dependencies

# Run 'http-server'
yarn start

# Open a browser to the address and port outputted from the last command

# If you see our message from 'main.js', then vue is working!