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
const ul = document.getElementById("days"); // capturei a ul.

const days = () => {
  for (let i = 0; i < decemberDaysList.length; i += 1){
    const day = decemberDaysList[i];
    const li = document.createElement('li');
    li.innerText = day;
    li.className = 'day';
    

    if( day === 24 || day === 25 || day === 31){
      li.classList.add('holiday');
    }if (day === 4 || day === 11 || day === 18 || day === 25){
      li.classList.add('friday');
    }; 
    ul.appendChild(li);
  };
   
};
days();

//Exercício 2 – Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday"
const colorHoliday = () => {
const hodiday = document.getElementById("btn-holiday");




}
 
