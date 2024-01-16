
const questionFormEl =document.getElementById("questionForm");
const questionEl =document.getElementById("question");
const scoreEl = document.getElementById("score");

let storedAnswer;
let score = 0;

const randomNumber = (max,min) =>{
 return Math.floor(Math.random()*(max - min +1) +min);

}
// console.log("number" ,randomNumber(0,9))

const generateQuestion = () =>{

  const randomNumber1 =randomNumber(0,9);
  const randomNumber2 =randomNumber(0,9);
  const question = `Q. What is ${randomNumber1} multiply by  ${randomNumber2} ?`
  const answer = randomNumber1*randomNumber2;
  // console.log(answer,question)
  return {answer,question}
  
 
}

const showQuestion = () => {
  const {question,answer} = generateQuestion();
  // console.log(question)
  questionEl.innerHTML = question;
 storedAnswer =answer;
//  console.log(storedAnswer)
}

showQuestion()

const checkAnswer = (event) => {
 event.preventDefault();
 const formData = new FormData(questionFormEl);
 const userAnswer = +formData.get("answer")
//  console.log(userAnswer)
 if(userAnswer === storedAnswer){
 score += 1;
 }
 else{
  score -= 1;
 }


 scoreEl.innerText = score;
 event.target.reset();
 showQuestion();
//  console.log('userAnswer',userAnswer)
}


