import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"));

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const products = [
  {
    name: "Murukku",
    desc: "Crispy spicy snack"
  },
  {
    name: "Banana Chips",
    desc: "Perfect for travel"
  },
  {
    name: "Mixture",
    desc: "Best with tea"
  }
];

app.post("/chat", async (req, res) => {

  try {

    const { query } = req.body;

    const context = products
      .map(p => `${p.name}: ${p.desc}`)
      .join("\n");

    const prompt = `
You are an AI shopping assistant.

Available Products:
${context}

Customer Query:
${query}

Answer professionally.
`;

    const result = await model.generateContent(prompt);

    const response =
      result.response.text();

    res.json({
      reply: response
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: "Server Error"
    });
  }
});

app.listen(5000, () => {
  console.log("Running on 5000");
});