const express = require("express");
const router = express.Router();

router.post("/login", async (req, res, next) => {

    try {
        // take the users email and password and attempt to authenticate them
    } catch(err) {
        next(err);
    }
});

router.post("/register", async (req, res, next) => {
    try {
        // take the user email, password, rsvp status, and the number of guests and create a new user in the database


    } catch(err) {
        next(err);
    }
});




module.exports = router;