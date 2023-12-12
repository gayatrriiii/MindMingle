document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app');

    // Dummy data for initial topics
    const topics = ['Tech Innovations', 'Future of AI', 'Sustainable Living'];

    // Function to render topic bubbles
    function renderTopics() {
        appContainer.innerHTML = ''; // Clear previous content

        topics.forEach(topic => {
            const topicBubble = document.createElement('div');
            topicBubble.classList.add('topic-bubble');
            topicBubble.textContent = topic;
            topicBubble.addEventListener('click', () => startDiscussion(topic));

            appContainer.appendChild(topicBubble);
        });
    }

    // Function to start a discussion
    function startDiscussion(topic) {
        // Add your logic for initiating a discussion here
        console.log(`Starting discussion on: ${topic}`);
    }

    // Initial render
    renderTopics();
});
