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

// Exercício 1 – Crie um calendário dinamicamente:
function days() {
  const tagUlD = getElementById('days');

  for (let i = 0; i < decemberDaysList.length; i +=1) {
    const itemDay = decemberDaysList[i];
    const liDays = document.createElement('li');
    liDays.innerHTML = itemDay;
    liDays.className = 'day';
    
    if (itemDay === 24 || itemDay === 25 || itemDay === 31) {
      liDays.classList.add = 'hodiday';
    }else if (itemDay === 4 || itemDay === 11 ||itemDay === 18 || itemDay === 25) {
      liDays.classList.add = 'friday';
    };
  };
  tagUlD.appendChild('liDays');
};

days();
