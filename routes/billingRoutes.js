  //exchange the token for an actual charge.
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin')

module.exports = (app) => {
    app.post("/api/stripe", requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            description: "5 email credits for $5",
            source: req.body.id // this is our authorization from the front end.
        })
        console.log(charge)
        req.user.credits += 5
        const user = await req.user.save()
        res.send(user)
    });
};

