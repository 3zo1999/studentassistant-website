// Function to split text into sentences using a robust sentence splitting algorithm
function splitIntoSentences(text) {
    const sentenceRegex = /[.!?]+/g;
    const sentences = text.split(sentenceRegex);
    return sentences.map((sentence) => sentence.trim());
  }
  
  // Function to shuffle an array randomly
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Function to handle the "Generate Questions" button click
  document.getElementById("generate-button").addEventListener("click", generateQuestionsButton);