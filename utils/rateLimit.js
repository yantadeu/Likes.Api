const rateLimit = require("express-rate-limit")

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 50,
    message: "Too many accounts created from this IP, please try again after a minute"
});

module.exports = limiter
