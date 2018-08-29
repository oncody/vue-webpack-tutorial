module.exports = router => {
  router.get('/hi', (request, response) => {
    response.send('You can hot reload your server!');
  });
};
