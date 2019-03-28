const passport = require("passport"); 

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  // logout is a function that is automagically attached to the req object.
  // It takes the cookie and kills it and you are loggedout. 
  app.get('/api/logout', (req, res)=> {
    req.logout();
    //proves that they are signed out as undefined or no content
    res.send(req.user)
  })

  // user is automagically attached to the req object by passport. I love you passport.
  app.get('/api/current_user', (req, res)=> {
    res.send(req.user)
  })
};
