// *********  DATA  ********* //
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const students = [];
const moldyVoldysArmy = [];
let isFormDisplayed = false;
// *********  UTILITY FUNCTIONS  ********* //\
const housesRandomizer = () => {
  return Math.floor(Math.random() * 4 ); 
}
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML += textToRender;
}
const createCard = (e) => {
  e.preventDefault();
    const newStudent = {
      id: students.length + 1,
      firstName: document.getElementById('first-name').value, 
      lastName: document.getElementById('last-name').value, 
      house: houses[housesRandomizer()] 
    } 
    students.push(newStudent);
    displayCard(students);   
}
const displayCard = (array) => {
  let domstring = "";
  array.forEach((student) => {
    domstring += `<div class="student-card">
    <p>First Name: ${student.firstName}</p>
    <p>Last Name: ${student.lastName}</p>
    <p>House: ${student.house}</p>
    <button class="btn btn-danger expel-button" data-id="${student.id}">Expel</button>
  </div>`;
  })
  const selectedElement = document.querySelector('#cardsContainer');
  selectedElement.innerHTML = domstring
  document.querySelector('#first-name').value ='';
  document.querySelector('#last-name').value ='';
  expelStudent();
}
const filterByHouse = (house) => {
  return students.filter(student => student.house.toLowerCase() === house.toLowerCase())
};
const expel = (studentId) => {
  const studentIndex = students.findIndex(student => student.id === studentId);
  if (studentIndex !== -1) {
    const [expelStudent] = students.splice(studentIndex, 1);
    expelStudent.house = "Lord Moldy Voldy's Army";
    moldyVoldysArmy.push(expelStudent);
    displayCard(students);
    displayCard(moldyVoldysArmy);
  }
  // const student = students.find(student => student.id === studentId);
  // if (student) {
  //   student.house = "Lord Moldy Voldy's Army";
  //   displayCard(students);
  // }
}
// *********  HTML COMPONENT FUNCTIONS  ********* //
const introToHatBtn = () => {
  const domString = `<div class="d-grid gap-2">
  <button id="introButton" class="btn btn-primary" type="button">Meet Your Destiny</button>
</div>`;
  renderToDom('#introButton', domString);
}
const intakeForm = () => {
  if (isFormDisplayed) return;
  const domstring = ` <form id="studentForm">
  <input class="form-control" id="first-name" type="text" placeholder="Students First Name" aria-label="default input example">
  <input class="form-control" id="last-name" type="text" placeholder="Students Last Name" aria-label="default input example">
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
  renderToDom('#container', domstring);
  document.querySelector('#studentForm').addEventListener('submit', createCard);
  isFormDisplayed = true;
}
const filterButtons = () => {
  const domString = `
    <button class="btn btn-secondary btn-lg buttonRow" id="gryffindor">Gryffindor</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="hufflepuff">Hufflepuff</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="ravenclaw">Ravenclaw</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="slytherin">Slytherin</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="showAllHouses">Show All Houses</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="showAll">Show All</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="moldy-voldys-army">Moldy Vold's Army</button>
  `;
    renderToDom('#filterBtns', domString); 
} 
// *********  EVENT LISTENERS  *********  //
const introButton = () => {
  document.querySelector('#introButton').addEventListener('click',intakeForm);
}
const houseButtonListeners = () => {
  document.getElementById('gryffindor').addEventListener('click',() => {
  const filteredHouse = filterByHouse('gryffindor');
  displayCard(filteredHouse);
})
document.getElementById('hufflepuff').addEventListener('click',() => {
  const filteredHouse = filterByHouse('hufflepuff');
  displayCard(filteredHouse);
})
document.getElementById('ravenclaw').addEventListener('click',() => {
  const filteredHouse = filterByHouse('ravenclaw');
  displayCard(filteredHouse);
})
document.getElementById('slytherin').addEventListener('click',() => {
  const filteredHouse = filterByHouse('slytherin');
  displayCard(filteredHouse);
})
document.getElementById('moldy-voldys-army').addEventListener('click', () => {
  displayCard(moldyVoldysArmy)
})
document.getElementById('showAllHouses').addEventListener('click',() => {
  displayCard(students);
})
document.getElementById('showAll').addEventListener('click', ( => {
  const allStudents = students.concat(moldyVoldysArmy)
}))
};
const expelStudent = () => {
  if (event.target.classList.contains('expel-button')) {
      const studentId = parseInt(event.target.getAttribute('data-id'), 10);
      expel(studentId);
  }
}
document.querySelector('#cardsContainer').addEventListener('click', expelStudent);
// *********  FUNCTION TO START APPLICATION  *********  //s
const startApp = () => {
  introToHatBtn();
  introButton();
  filterButtons();
  houseButtonListeners(); 
  displayCard(students);
  displayCard(moldyVoldysArmy);
};
startApp();
