import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateThankYouNote = async (req, res) => {
  const { company, position } = req.body;
  try {
    const prompt = `Write a short thank you note for applying to the position of ${position} at ${company}.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
    });

    const thankYouNote = completion.choices[0].message.content;
    res.json({ thankYouNote });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate thank you note" });
  }
};
