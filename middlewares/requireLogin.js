module.exports = (req, res, next) => {
  if (!req.user) {
    // if the user is not logged in stop the process
    return res.status(401).send({ error: "You must log in!" });
  }

  next(); // if the user is logged in just go to the next middleware
};
