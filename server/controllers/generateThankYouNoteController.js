import { Configuration, OpenAIApi } from "openai";

export const generateThankYouNote = async (req, res) => {
  const { company, position } = req.body;
  try {
    // Primer prompta:
    const prompt = `Write a short thank you note for applying to the position of ${position} at ${company}.`;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
    });

    const thankYouNote = completion.data.choices[0].message.content;
    res.json({ thankYouNote });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate thank you note" });
  }
};
