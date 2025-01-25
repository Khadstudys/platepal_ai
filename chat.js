// JavaScript for Nutrition Chatbot
document.addEventListener("DOMContentLoaded", () => {
    const chatWindow = document.getElementById("chat-window");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
  
    // Function to add a message to the chat
    const addMessage = (message, sender) => {
      const messageElement = document.createElement("div");
      messageElement.className = sender === "user" ? "user-message" : "bot-message";
      messageElement.textContent = message;
      chatWindow.appendChild(messageElement);
      chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll
    };
  
    // Function to generate a response
    const generateResponse = (input) => {
      input = input.toLowerCase();
      if (input.includes("protein")) {
        return "Protein is essential for muscle repair. Good sources include eggs, chicken, and lentils.";
      } else if (input.includes("vitamin c")) {
        return "Vitamin C boosts immunity. You can find it in oranges, kiwis, and bell peppers.";
      } else if (input.includes("healthy snacks")) {
        return "Healthy snacks include nuts, fruits, yogurt, and whole-grain crackers.";
      } else if (input.includes("hydration")) {
        return "Drink at least 8 glasses of water daily to stay hydrated.";
      } else {
        return "I'm not sure about that. Try asking something like 'What are good sources of protein?'.";
      }
    };
  
    // Event listener for the send button
    sendBtn.addEventListener("click", () => {
      const userMessage = userInput.value.trim();
      if (userMessage) {
        addMessage(userMessage, "user"); // Display user message
        const botResponse = generateResponse(userMessage); // Generate bot response
        setTimeout(() => addMessage(botResponse, "bot"), 500); // Simulate bot typing delay
        userInput.value = ""; // Clear input field
      }
    });
  
    // Allow pressing Enter to send the message
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendBtn.click();
      }
    });
  });
  