# In the past every time we made a change to our code, we had to manually run the build step again

# Using webpack's watch flag will automatically watch for file changes and rebuild the code 

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
