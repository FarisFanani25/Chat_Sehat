// src/components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css'; // Import file CSS untuk Chatbot

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Menambahkan pesan pengguna ke dalam state
    setMessages([...messages, { text: input, sender: 'user' }]);

    // Simulasi respons dari chatbot
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: 'Terima kasih! Saya akan membantu Anda.', sender: 'bot' }
      ]);
    }, 1000);

    setInput(''); // Mengosongkan input setelah mengirim
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>Chatbot</h2>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
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
