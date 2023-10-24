function generateQuestionsButton() {
  const userInput = document.getElementById("user-input").value;
  const generatedQuestions = generateQuestions(userInput);
  displayBotMessage(generatedQuestions);
  document.getElementById("user-input").value = "";
}

function generateQuestions(text) {
  const sentences = text.split(/[.!?]+/);

  const questions = sentences.map((sentence) => {
    const words = sentence.split(" ");
    const selectedWordIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[selectedWordIndex];
    const choices = sentences.filter((s) => s !== sentence);
    const shuffledChoices = shuffle(choices);
    const incorrectAnswers = shuffledChoices.slice(0, 3);

    const question = {
      sentence: sentence,
      choices: [],
      answer: '',
      selectedWord: selectedWord
    };

    const replaceWordWithBlank = (word) => {
      const regex = new RegExp(`\\b${selectedWord}\\b`, 'gi');
      return word.replace(regex, '______');
    };

    const correctAnswer = replaceWordWithBlank(sentence);
    const incorrectAnswer = replaceWordWithBlank(incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)]);

    question.choices.push(correctAnswer);
    question.choices.push(incorrectAnswer);

    if (Math.random() < 0.5) {
      question.choices.reverse();
      question.answer = 'B';
    } else {
      question.answer = 'A';
    }

    return question;
  });

  const formattedQuestions = questions.map((question, index) => {
    let formattedQuestion = `${index + 1}. ${question.sentence}<br>`;
    formattedQuestion += `A. ${question.choices[0]}<br>`;
    formattedQuestion += `B. ${question.choices[1]}<br><br>`;
    return formattedQuestion;
  });

  return formattedQuestions.join('');
}

function displayBotMessage(message) {
  const chatLog = document.getElementById("chat-log");
  chatLog.innerHTML += `<div class="message bot-message"><p>${message}</p></div>`;
  chatLog.scrollTop = chatLog.scrollHeight;
}

function shuffle(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}