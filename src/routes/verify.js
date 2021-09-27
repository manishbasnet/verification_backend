const express = require("express");
const router = express.Router();
const verificationService = require('../services/verification');
const dbConnection = require('../db/dbConnection');

/* POST API for verification of code. */
router.post("/verify", async function (req, res, next) {
    console.log("atest", req);
    const db = await dbConnection.connectToDatabase();
    //const body = req.body;
    // const result = await verificationService.verify(db, queryParams);
    
    res.json({
        result
    });
});

module.exports = router;
