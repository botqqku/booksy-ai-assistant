// src/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { parseBooking } from "./ai/parseMessage.js";
import { saveBooking } from "./ai/saveBooking.js";

// Ładujemy .env (mock AI też potrzebuje tego dla kompatybilności)
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Booking Assistant is running");
});

app.post("/message", async (req, res) => {
  const { message } = req.body;

  try {
    // parseBooking zwraca obiekt
    const parsed = await parseBooking(message);

    // zapis do bookings.json
    saveBooking(parsed);

    res.json({
      reply: parsed, // obiekt JSON
    });
  } catch (error) {
    console.error("Błąd AI:", error);
    res.status(500).json({ error: "AI processing failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});