const express = require("express");
const router = express.Router();
const verificationService = require("../services/verification");
const dbConnection = require("../db/dbConnection");
const { successResponse, failureResponse } = require("../utils/response");

/* POST API for verification of code. */
router.post("/verify", async function (req, res, next) {
  try {
    const db = await dbConnection.connectToDatabase();
    const { body } = req;

    await verificationService.verify(db, body);
    const successMsg = successResponse(200, "Code verified Successfully.");
    res.json(successMsg);
  } catch (err) {
    console.error("Error: " + err, "ns", err.message);

    const failureMsg = failureResponse(err.statusCode, err.message);

    res.status(err.statusCode || 500).send(failureMsg);
  }
});

module.exports = router;
