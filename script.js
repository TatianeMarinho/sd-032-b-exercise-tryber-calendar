const { get } = require("cypress/types/lodash");

const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();


const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.
//1 - Crie um calendário dinamicamente
const ul = document.querySelector('#days'); // capturei a ul.


function numberDays() {
  for (let i of decemberDaysList){
    const li = document.createElement('li');
    li.innerText = i;

    if( i === 24 || i === 25 || i===31){
      li.classList.add = 'hodiday';
    }else if (i === 4 || i === 11 || i === 18 || i === 25){
      li.classList.add = 'friday';
    };
    li.classList.add = 'day';
    ul.appendChild(li);
  };
    
};
numberDays();


 
