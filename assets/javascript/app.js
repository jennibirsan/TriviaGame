const myQuestions = [
  {
    question: "1. What team won the very first NBA game?",
    answers: {
      a: "Chicago Stags",
      b: "Philadelphia Warriors",
      c: "New York Knicks",
      d: "Toronto Huskies"
    },
    correctAnswer: "c"
  },
  {
    question: "2. Who was the first player in NBA history to be elected league MVP by a unanimous vote?",
    answers: {
      a: "Stephen Curry",
      b: "Michael Jordan",
      c: "Lebron James",
      d: "Kobe Bryant"
    },
    correctAnswer: "a"
  },
  {
    question: "3. Who was the youngest player to score 10,000 points in the NBA?",
    answers: {
      a: "Wilt Chamberlain",
      b: "Kareem Abdul-Jabbar",
      c: "Michael Jordan",
      d: "Lebron James"
    },
    correctAnswer: "d"
  },
  {
    question: "4. What team owns the longest winning streak in NBA history?",
    answers: {
      a: "Los Angeles Lakers",
      b: "Chicago Bulls",
      c: "New York Knicks",
      d: "Miami Heat"
    },
    correctAnswer: "a"
  },
  {
    question: "5. What NBA player has won the most league MVPs?",
    answers: {
      a: "Michael Jordan",
      b: "Kobe Bryant",
      c: "Lebron James",
      d: "Kareem Abdul-Jabbar"
    },
    correctAnswer: "d"
  },
  {
    question: "6. Which NBA Team Has Won The Most Championships?",
    answers: {
      a: "Golden State Warriors",
      b: "Boston Celtics",
      c: "Los Angeles Lakers",
      d: "Chicago Bulls"
    },
    correctAnswer: "b"
  },
  {
    question: "7. How many points did LeBron James score in his first NBA game?",
    answers: {
      a: "21",
      b: "14",
      c: "25",
      d: "42"
    },
    correctAnswer: "c"
  },
  {
    question: "8. Which player holds the most NBA Championship titles?",
    answers: {
      a: "K.C. Jones",
      b: "Sam Jones",
      c: "Bill Russell",
      d: "Tom Heinsohn"
    },
    correctAnswer: "c"
  },
  {
    question: "9. Which NBA Coach holds the most Championship titles?",
    answers: {
      a: "Phil Jackson",
      b: "Red Auerbach",
      c: "John Kundla",
      d: "Pat Riley"
    },
    correctAnswer: "a"
  },
  {
    question: "10. Which NBA player has the most blocks in history?",
    answers: {
      a: "Shaquille O'Neal",
      b: "Hakeem Olajuwon",
      c: "Tim Duncan",
      d: "Kevin Garnett"
    },
    correctAnswer: "b"
  },

];

// my global variables
var rightA = 0;
var wrongA = 0;
var noA = 0;
var seconds;


// showing the questions

function showquestions() {

  for (i = 0; i < myQuestions.length; i++) {

    $("#quiz").append("<h3>" + myQuestions[i].question + "</h3>")

    for (key in myQuestions[i].answers) {
      $("#quiz").append("<input type='radio' name=" + i + " value=" + key + ">" + myQuestions[i].answers[key] + "</>")
    }

  }

  $("#submit").on("click", function () {
    var input = $("#quiz").children("input:checked")
    console.log(input)
    for (index = 0; index < input.length; index++) {
      var q = $(input[index]).attr("name")
      var userA = $(input[index]).attr("value")
      console.log(q, userA)

      if (userA === myQuestions[q].correctAnswer) {
        rightA++;
      }
      else {
        wrongA++;
      }
    }
    noA = myQuestions.length - rightA - wrongA;

    showresults()

  })

}

// show the results
function showresults() {
  $("#quiz").empty();
  $("#results").append("<p>" + "Right Answers: <b> " + rightA + "</p>")
  $("#results").append("<p>" + "Wrong Answers: <b> " + wrongA + "</p>")
  $("#results").append("<p>" + "Unanswered: <b> " + noA + "</p>")

}

/* I copied and heavily tweaked this countdown code from: https://codepen.io/mattlitzinger/pen/ysowF */

function startGame(){
var target_date = new Date().getTime() + (1000 * 3600 * 48); // set the countdown date
var countdown = document.getElementById("tiles"); // get tag element

getCountdown();
setInterval(function () { getCountdown(); }, 1000);
showquestions()
function getCountdown() {
  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  days = pad(parseInt(seconds_left / 86400));
  seconds_left = seconds_left % 86400;

  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;

  minutes = pad(parseInt(seconds_left / 30));
  seconds = pad(parseInt(seconds_left % 30));

  // format countdown string + set tag value
  countdown.innerHTML = "<span>" + seconds + "</span>";
}

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}
// function getCountdown() {
//   // decrease the counterTimer
//   // show in the screen the counterTimer
//   if (getCountdown === 0) {
//     clearInterval(seconds).showresults
//     // timeout 
//     // showresults
//   }
// }
}

startGame()
