const passport = require("passport"); 

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //passport.authenticate is a middleware. 
  app.get(
    "/auth/google/callback", 
    passport.authenticate("google"), 
    (req, res)=> {
      res.redirect('/surveys')
  });

  // logout is a function that is automagically attached to the req object.
  // It takes the cookie and kills it and you are loggedout. 
  app.get('/api/logout', (req, res)=> {
    req.logout();
    res.redirect('/')
  })

  // user is automagically attached to the req object by passport. I love you passport.
  app.get('/api/current_user', (req, res)=> {
    res.send(req.user)
    console.log(req.user)
  })
};
