import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const dialogflowEndpoint = "https://<your-region>-<your-project-id>.cloudfunctions.net/dialogflowFirebaseFulfillment"; // Ganti dengan endpoint yang benar

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    // Tambahkan pesan pengguna ke dalam state
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user", timestamp: new Date().toLocaleTimeString() },
    ]);

    try {
      // Kirim pesan ke endpoint Dialogflow
      const response = await axios.post(dialogflowEndpoint, {
        queryInput: {
          text: {
            text: input,
            languageCode: "id", // Ganti dengan kode bahasa yang sesuai
          },
        },
        session: `projects/<your-project-id>/agent/sessions/unique-session-id`, // Gunakan session yang unik
      });

      // Respons dari Dialogflow
      const botResponse = response.data.fulfillmentMessages[0]?.text?.text[0];
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: botResponse || "Maaf, saya tidak memahami pesan Anda.",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } catch (error) {
      console.error("Error communicating with Dialogflow:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Terjadi kesalahan, coba lagi nanti.",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    }

    setInput(""); // Kosongkan input setelah pengiriman
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>Chatbot</h2>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {/* Menghapus elemen avatar */}
            <p>{msg.text}</p>
            <span className="timestamp">{msg.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik pesan..."
        />
        <button onClick={handleSendMessage}>Kirim</button>
      </div>
    </div>
  );
};

export default Chatbot;
