import React, { useState } from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Statusni ko'rsatish uchun

  const sendMessageToTelegram = async () => {
    const botToken = "7924102102:AAHUlZvPSG2-SRBzC8UwFpFc6JWbQc4kiEo";
    const chatId = "6182945552";
    const text = `📩 *Yangi Xabar!*\n\n👤 *Ism*: ${name}\n📧 *Email*: ${email}\n📝 *Xabar*: ${message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      const result = await response.json();
      if (result.ok) {
        setStatus("✅ Xabar muvaffaqiyatli yuborildi!");
      } else {
        setStatus(`❌ Xatolik: ${result.description}`);
      }
    } catch (error) {
      console.error("Xatolik:", error);
      setStatus("❌ Xatolik yuz berdi. Qaytadan urinib ko‘ring.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("⏳ Xabaringiz yuborilmoqda...");
    sendMessageToTelegram();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {status && <p>{status}</p>} {/* Xabar yuborilish statusi */}
    </section>
  );
}

export default Contact;
