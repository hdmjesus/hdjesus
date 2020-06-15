import Form from './Form.js';

const q1 = document.getElementById('question1');
const q2 = document.getElementById('question2');
const q3 = document.getElementById('question3');
const q4 = document.getElementById('question4');
const q5 = document.getElementById('question5');
const q6 = document.getElementById('question6');
const q7 = document.getElementById('question7');
const q8 = document.getElementById('question8');
const fEnd = document.getElementById('form-end');
const producto = [];
const formulario = new Form();

function nextQuestion(hidden, show) {
  hidden.classList.add('data-off');
  show.classList.remove('data-off');
}

function startQuestions() {
  const tags = document.getElementsByClassName('seleccion');
  const tagsI = Array.apply(null, tags);
  let question = 1;

  tagsI.forEach((element) =>
    element.addEventListener('click', (event) => {
      const service = () => {
        const valor = event.target.id;
        producto.push(valor);
        console.log(producto);
        question++;
      };

      switch (question) {
        case 1:
          nextQuestion(q1, q2);
          break;
        case 2:
          nextQuestion(q2, q3);
          break;
        case 3:
          nextQuestion(q3, q4);
          break;
        case 4:
          nextQuestion(q4, q5);
          break;
        case 5:
          nextQuestion(q5, q6);
          break;
        case 6:
          nextQuestion(q6, q7);
          break;
        case 7:
          nextQuestion(q7, q8);
          break;
        case 8:
          nextQuestion(q8, fEnd);
          break;

        default:
          break;
      }

      service();
    })
  );
}

startQuestions();

// if (question == 1) {
//   nextQuestion(q1, q2);
// } else if (question == 2) {
//   nextQuestion(q2, q3);
// } else if (question == 3) {
//   nextQuestion(q3, q4);
// } else if (question == 4) {
//   nextQuestion(q4, q5);
// } else if (question == 5) {
//   nextQuestion(q5, q6);
// } else if (question == 6) {
//   nextQuestion(q6, q7);
// } else if (question == 7) {
//   nextQuestion(q7, q8);
// } else if (question == 8) {
//   nextQuestion(q8, fEnd);
// }
