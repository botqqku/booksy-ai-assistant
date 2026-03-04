// src/ai/parseMessage.js
import dotenv from "dotenv";
dotenv.config();

export async function parseBooking(message) {
  console.log("Tryb DYNAMIC MOCK AI – wiadomość:", message);

  // Zwracamy zawsze poprawny obiekt, żeby saveBooking działał
  const mockResponse = {
    service: "haircut",
    date: "2026-03-05",
    time: "17:00",
  };

  return mockResponse;
}