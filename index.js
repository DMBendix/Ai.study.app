import React, { useState } from "react";

export default function FlashcardGenerator() {
  const [inputText, setInputText] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateFlashcards = async () => {
    setLoading(true);
    setFlashcards([]);

    // Simuleret AI-response
    setTimeout(() => {
      const mockResponse = [
        { question: "Hvad er fotosyntese?", answer: "En proces hvor planter omdanner lys til energi." },
        { question: "Hvad er DNA?", answer: "Molekylet der indeholder genetisk information." },
      ];
      setFlashcards(mockResponse);
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1>AI Flashcard Generator</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Indsæt din tekst her..."
        style={{ width: '100%', minHeight: 120, marginBottom: 10 }}
      />
      <button onClick={generateFlashcards} disabled={loading || !inputText}>
        {loading ? "Genererer..." : "Lav Flashcards"}
      </button>

      <div style={{ marginTop: 20 }}>
        {flashcards.map((card, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: 10, borderRadius: 6, marginBottom: 10 }}>
            <p><strong>Q:</strong> {card.question}</p>
            <p><strong>A:</strong> {card.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
