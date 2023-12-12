import React, { useState } from 'react';
import './App.css';

function App() {
  const [topics, setTopics] = useState(['Tech Innovations', 'Future of AI', 'Sustainable Living']);

  const startDiscussion = (topic) => {
    // Add logic to start a discussion
    console.log(`Starting discussion on: ${topic}`);
  };

  return (
    <div className="App">
      <div className="topic-container">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="topic-bubble"
            onClick={() => startDiscussion(topic)}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
