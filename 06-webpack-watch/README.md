# In this tutorial you'll learn how to use the webpack watch flag to watch for code changes and automatically rebundle your code to speed up development

# This is significantly better than manually running webpack again each time you make a code change like we have had to do in the past tutorials

# Globally add 'http-server'
yarn global add http-server

# Add NPM dependencies
yarn

# Run webpack with the watch flag enabled
yarn build

# Run 'http-server'
yarn start

# Open a browser to the address and port outputted from the last command

# Change our message in 'App.vue' and save the changes

# Refresh your web browser 

# (You may also need to clear your cache)

# If you see our new message in 'App.vue', then webpack watch is working!
