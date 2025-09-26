let flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Who wrote Hamlet?", answer: "William Shakespeare" }
];

let currentIndex = 0;
let showingAnswer = false;

const cardContent = document.getElementById("card-content");
const showBtn = document.getElementById("show");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const addBtn = document.getElementById("add");
const editBtn = document.getElementById("edit");
const deleteBtn = document.getElementById("delete");

const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");

function displayCard() {
  if (flashcards.length === 0) {
    cardContent.textContent = "No flashcards available. Add one!";
    return;
  }
  showingAnswer = false;
  cardContent.textContent = flashcards[currentIndex].question;
}

showBtn.addEventListener("click", () => {
  if (flashcards.length > 0) {
    if (showingAnswer) {
      cardContent.textContent = flashcards[currentIndex].question;
    } else {
      cardContent.textContent = flashcards[currentIndex].answer;
    }
    showingAnswer = !showingAnswer;
  }
});

nextBtn.addEventListener("click", () => {
  if (flashcards.length > 0) {
    currentIndex = (currentIndex + 1) % flashcards.length;
    displayCard();
  }
});

prevBtn.addEventListener("click", () => {
  if (flashcards.length > 0) {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    displayCard();
  }
});

addBtn.addEventListener("click", () => {
  const q = questionInput.value.trim();
  const a = answerInput.value.trim();
  if (q && a) {
    flashcards.push({ question: q, answer: a });
    currentIndex = flashcards.length - 1;
    displayCard();
    questionInput.value = "";
    answerInput.value = "";
  }
});

editBtn.addEventListener("click", () => {
  if (flashcards.length > 0) {
    const q = questionInput.value.trim();
    const a = answerInput.value.trim();
    if (q && a) {
      flashcards[currentIndex] = { question: q, answer: a };
      displayCard();
      questionInput.value = "";
      answerInput.value = "";
    }
  }
});

deleteBtn.addEventListener("click", () => {
  if (flashcards.length > 0) {
    flashcards.splice(currentIndex, 1);
    if (currentIndex >= flashcards.length) {
      currentIndex = 0;
    }
    displayCard();
  }
});

displayCard();