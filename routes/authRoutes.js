const passport = require('passport');

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/', (req, res) => {
    res.send('<h1>Hello this is inside of the server :5000</h1>');
  });

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => res.redirect('/surveys'));


  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  })

};

