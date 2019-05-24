const myQuestions = [
    {
      question: "What team won the very first NBA game?",
      answers: {
        a: "Chicago Stags",
        b: "Philadelphia Warriors",
        c: "New York Knicks",
        d: "Toronto Huskies"
      },
      correctAnswer: "c"
    },
    {
      question: "Who was the first player in NBA history to be elected league MVP by a unanimous vote?",
      answers: {
        a: "Stephen Curry",
        b: "Michael Jordan",
        c: "Lebron James",
        d: "Kobe Bryant"
      },
      correctAnswer: "a"
    },
    {
      question: "Who was the youngest player to score 10,000 points in the NBA?",
      answers: {
        a: "Wilt Chamberlain",
        b: "Kareem Abdul-Jabbar",
        c: "Michael Jordan",
        d: "Lebron James"
      },
      correctAnswer: "d"
    },
    {
    question: "What team owns the longest winning streak in NBA history?",
      answers: {
        a: "Los Angeles Lakers",
        b: "Chicago Bulls",
        c: "New York Knicks",
        d: "Miami Heat"
      },
      correctAnswer: "a"
    },
    {
      question: "What NBA player has won the most league MVPs?",
        answers: {
          a: "Michael Jordan",
          b: "Kobe Bryant",
          c: "Lebron James",
          d: "Kareem Abdul-Jabbar"
        },
        correctAnswer: "d"
      },
      {
        question: "Which NBA Team Has Won The Most Championships?",
          answers: {
            a: "Golden State Warriors",
            b: "Boston Celtics",
            c: "Los Angeles Lakers",
            d: "Chicago Bulls"
          },
          correctAnswer: "b"
        }
  ];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

function buildQuiz(){
    // we'll need a place to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  myQuestions.forEach( (currentQuestion, questionNumber) => {
    // here goes the code we want to run for each question
  });

  // we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for(letter in currentQuestion.answers){

  // ...add an html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

quizContainer.innerHTML = output.join('');