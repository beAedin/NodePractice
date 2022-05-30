const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

// admin/add-product
// app:12 ---> app.use("/admin", adminRoutes);
//

router.get("/add-product", (req, res, next) => {
    //res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.use("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;
