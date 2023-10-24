function handleUserInput() {
  const userInput = document.getElementById("user-input").value;
  let response = "";

  if (userInput.toLowerCase().includes("hi") || userInput.toLowerCase().includes("hello")) {
    response = getRandomGreeting();
  } else if (userInput.toLowerCase().includes("how are you")) {
    response = "I'm an AI language model, so I don't have feelings, but thank you for asking!";
  } else if (userInput.toLowerCase().includes("generate questions")) {
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, felis non efficitur posuere, odio mauris consequat mauris, vitae fermentum tellus justo id lectus. Mauris sit amet eros et metus efficitur congue. Phasellus rutrum laoreet justo eget pellentesque. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc lobortis massa non lectus semper feugiat. Curabitur tincidunt augue at risus laoreet, et finibus nunc lobortis. Pellentesque tincidunt orci eu elit cursus, sit amet bibendum est consectetur.";
    response = generateQuestions(text);
  } else if (userInput.toLowerCase().includes("math")) {
    response = "Which year of secondary school are you in? Please specify 'first', 'second', or 'third'.";
  } else if (userInput.toLowerCase().includes("first")) {
    response = "Here are some math resources for the first year of secondary school: ";
    response += "- Math textbook: <a href='https://www.example.com/first-year-math-textbook'>First Year Math Textbook</a><br>";
    response += "- Online math tutorials: <a href='https://example.com/first-year-math-tutorials'>First Year Math Tutorials</a><br>";
    // Add more resources for the first year as needed
  } else if (userInput.toLowerCase().includes("second")) {
    response = "Here are some math resources for the second year of secondary school: ";
    response += "- Math textbook: <a href='https://www.example.com/second-year-math-textbook'>Second Year Math Textbook</a><br>";
    response += "- Online math tutorials: <a href='https://example.com/second-year-math-tutorials'>Second Year Math Tutorials</a><br>";
    // Add more resources for the second year as needed
  } else if (userInput.toLowerCase().includes("third")) {
    response = "Here are some math resources for the third year of secondary school: ";
    response += "- Math textbook: <a href='https://www.example.com/third-year-math-textbook'>Third Year Math Textbook</a><br>";
    response += "- Online math tutorials: <a href='https://example.com/third-year-math-tutorials'>Third Year Math Tutorials</a><br>";
    // Add more resources for the third year as needed
  } else {
    response = "I'm sorry, I don't have information on that subject.";
  }

  const chatLog = document.getElementById("chat-log");
  chatLog.innerHTML += "<div class='message user-message'><p>" + userInput + "</p></div>";
  chatLog.innerHTML += "<div class='message bot-message'><p>" + response + "</p></div>";
  document.getElementById("user-input").value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
}