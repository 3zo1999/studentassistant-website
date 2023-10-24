// Array of greetings
const greetings = [
    "Hello!",
    "Hi there!",
    "Greetings!",
    "Nice to meet you!",
  ];
  
  // Array of question words
  const questionWords = [
    "What",
    "When",
    "Where",
    "Who",
    "Why",
    "How",
  ];
  
  // Function to generate a random greeting
  function getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
  }
  
  // Function to generate questions from a given text
  function generateQuestions(text) {
    const sentences = text.split(/[.!?]+/);
  
    const questions = sentences.map((sentence) => {
      const words = sentence.trim().split(/\s+/);
      const firstWord = words[0].toLowerCase();
  
      if (questionWords.includes(firstWord)) {
        return sentence.trim() + "?";
      }
  
      return "What is " + sentence.trim() + "?";
    });
  
    return questions.join(" ");
  }
  
 
  
  // Add an event listener to the "Generate Questions" button
  document.getElementById("generate-button").addEventListener("click", generateQuestionsButton);