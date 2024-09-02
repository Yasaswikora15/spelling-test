import React, { useState } from 'react';
import './APP.css';

const words = [
  { id: 1, word: 'accommodate' },
  { id: 2, word: 'definitely' },
  { id: 3, word: 'embarrassment' },
  { id: 4, word: 'government' },
  { id: 5, word: 'independent' }
];

function App() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (event, id) => {
    setAnswers({
      ...answers,
      [id]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let correctCount = 0;

    words.forEach(word => {
      if (answers[word.id] && answers[word.id].toLowerCase() === word.word.toLowerCase()) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Spelling Test</h1>
      <form onSubmit={handleSubmit}>
        {words.map(word => (
          <div key={word.id} className="word-input">
            <label>
              Spell the word: <strong>{word.word}</strong>
              <input
                type="text"
                onChange={(e) => handleChange(e, word.id)}
                value={answers[word.id] || ''}
              />
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="results">
          <h2>Results</h2>
          <p>You spelled {score} out of {words.length} words correctly!</p>
        </div>
      )}
    </div>
  );
}

export default App;