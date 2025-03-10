const express = require("express");
const { generateEmail } = require("../controllers/emailController");

const router = express.Router();

// POST /api/email/generate
router.post("/generate", generateEmail);

module.exports = router;