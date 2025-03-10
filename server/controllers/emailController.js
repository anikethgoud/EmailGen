const { generateEmailUsingOpenAI } = require("../utils/openai");

const generateEmail = async (req, res) => {
  const { sender, receiver, context, tone } = req.body;

  try {
    const email = await generateEmailUsingOpenAI(sender, receiver, context, tone);
    res.status(200).json({ email });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate email" });
  }
};

module.exports = { generateEmail };