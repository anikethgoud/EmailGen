const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateEmailUsingOpenAI = async (sender, receiver, context, tone) => {
  const prompt = `Write a ${tone} email from ${sender} to ${receiver} about ${context}.`;
  const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt,
    max_tokens: 150,
  });

  return response.choices[0].text.trim();
};

module.exports = { generateEmailUsingOpenAI };