Install Node.js and npm:
Make sure you have Node.js installed, as it includes npm. You can download it here.
Create a new React app:
Open your terminal and run:

npx create-react-app mindmingle-app
cd mindmingle-app

Replace the content of src/App.js with:




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
