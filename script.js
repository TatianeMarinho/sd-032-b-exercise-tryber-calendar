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
  const buttonHoliday = document.getElementById("btn-holiday");
  const listHolidays = document.getElementsByClassName('holiday');
  const colorStart = "rgb(238,238,238)";
  const colorOn = 'orange';

  buttonHoliday.addEventListener('click',() =>{
      for (let i = 0; i < listHolidays.length; i += 1) {
        const holiday = listHolidays[i];
        const elementNewColor = holiday.style.backgroundColor === colorOn;

        if(elementNewColor) {
          listHolidays[i].style.backgroundColor = colorStart; 
        }else {
          listHolidays[i].style.backgroundColor = colorOn;
        }
      }
    });
};
colorHoliday();

//Exercício 3 – Implemente uma função que modifica o texto exibido nos dias que são sextas-feiras
const friday = () => {
  const arrayFriday = [4, 11, 18, 25];
  const buttonFriday = document.getElementById("btn-friday");
  const listFridays = document.getElementsByClassName('friday');
  const newText = "Uhul!";

  buttonFriday.addEventListener('click',() =>{
    for (let i = 0; i < listFridays.length; i += 1) {
      if(listFridays[i].innerText === newText) {
        listFridays[i].innerText = arrayFriday[i]; 
      }else {
        listFridays[i].innerText = newText;
      }
    }
  });
};
friday();

//Exercício 4 – Implemente duas funções que criam um efeito de "zoom"
const mouseOver = () => {
  const days = document.querySelector('#days');
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
  });
}
const mouseOut = () => {
  const days = document.querySelector('#days');
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
  });
}
mouseOver();
mouseOut(); 

 // Exercício 5 - Implemente uma função que seleciona uma tarefa e atribui a cor da tarefa ao dia do calendário
const selectTask = () => {//atribuindo a classe selected a tarefa selecionada
  let classTask = document.getElementsByClassName('task');

  for (const task of classTask) {
    task.addEventListener('click', (event) => {
      let selectedElement = document.querySelector('.selected');

      event.target.classList.add('selected');

      if (selectedElement !== null) {
        selectedElement.classList.remove('selected');
      }
    });
  }
};
selectTask();

const selectColor = () => { //atribuindo cor da tarefa ao dia
  let days = document.querySelector('#days');

  days.addEventListener('click', (event) =>{
    let taskSelect = document.querySelector('selected');

    if(taskSelect === null || event.target.style.color === taskSelect.style.backgroundColor){
      event.target.style.color = 'rgb(119,119,119)';
    } else {
      event.target.style.color = taskSelect.style.backgroundColor;
    }
  });
};
selectColor();
