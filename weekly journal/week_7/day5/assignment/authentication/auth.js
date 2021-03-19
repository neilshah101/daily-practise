function authenticate(req, res, next) {

    if (req.session) {
        if (req.session.username) {
            next()
        }
    } else {
        res.render("home", { message: "Username or password is incorrect" })
    }
}

module.exports = authenticate