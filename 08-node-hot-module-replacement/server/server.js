const express = require('express');
const developmentServer = require('./development-server');
const productionServer = require('./production-server');

const app = express();

if (process.env.NODE_ENV === 'production') {
  productionServer(app);
} else {
  developmentServer(app);
}

app.use((request, response, next) => {
  // this require statement needs to be inline here, NOT at the top of the file
  require('./routes/routes')(request, response, next);
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080!\n');
});
