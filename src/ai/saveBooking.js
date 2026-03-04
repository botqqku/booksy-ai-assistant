// src/ai/saveBooking.js
import fs from "fs";
import path from "path";

const bookingsFile = path.resolve("bookings.json");

/**
 * Zapisuje nową rezerwację do pliku bookings.json
 * @param {Object} booking - obiekt rezerwacji { service, date, time }
 */
export function saveBooking(booking) {
  let bookings = [];

  // Jeśli plik istnieje, wczytaj istniejące rezerwacje
  if (fs.existsSync(bookingsFile)) {
    const data = fs.readFileSync(bookingsFile, "utf-8");

    try {
      bookings = JSON.parse(data);
    } catch (err) {
      console.warn("Niepoprawny JSON w bookings.json – nadpisanie nowym obiektem");
      bookings = [];
    }
  }

  // Dodaj nową rezerwację
  bookings.push(booking);

  // Zapisz z powrotem do pliku
  fs.writeFileSync(bookingsFile, JSON.stringify(bookings, null, 2));
  console.log("✅ Rezerwacja zapisana:", booking);
}