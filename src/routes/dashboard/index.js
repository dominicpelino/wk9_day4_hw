const MainDashboardRouter = require("express").Router()

MainDashboardRouter.route("/")
    .get(require("./dashboard.view.js"))
    .get(require("../post/submit.js"))

MainDashboardRouter.route("/profile")
    .get(require("./profile.view.js"))

module.exports = MainDashboardRouter