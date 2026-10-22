const questionInput = document.getElementById("question");
const askButton = document.getElementById("askButton");
const answerArea = document.getElementById("answer");

askButton.addEventListener("click", function () {
    const question = questionInput.value.trim();

    if (question === "") {
        answerArea.textContent = "Please enter a question.";
        return;
    }

    answerArea.textContent =
        "You asked: " + question +
        ". An AI-generated answer will appear here in a future stage.";
});

