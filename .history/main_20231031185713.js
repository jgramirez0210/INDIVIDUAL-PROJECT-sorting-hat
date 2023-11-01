// *********  DATA  ********* //
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const students = [];

// *********  UTILITY FUNCTIONS  ********* //\
const housesRandomizer = (min, max) => {
  return Math.floor(Math.random() * 4 ); 
}
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML += textToRender;
}
let isFormDisplayed = false;
// Create Card 
const createCard = (e) => {
  e.preventDefault();
  // const firstName = document.querySelector('#first-name').value;
  // const lastName = document.querySelector('#last-name').value;
  // const randomHouseIndex = housesRandomizer(0, 4);
  // const assignedHouse = houses[randomHouseIndex];
    const newStudent = {
      id: students.length + 1,
      firstName: document.getElementById('first-name').value, 
      lastName: document.getElementById('last-name').value, 
      house: document.getElementById('assignedHouse'), 
    } 
    students.push(newStudent);   
}
const displayCard = (array) => {
  let domstring = ""
}
const studentInfo = `<div class="student-card">
    <p>First Name: ${newStudent.firstName}</p>
    <p>Last Name: ${newStudent.lastName}</p>
    <p>House: ${newStudent.house}</p>
    <button class="btn btn-danger" id="delete--${newStudent.id}">X</button>
  </div>`;
  renderToDom('#cardsContainer', studentInfo);
  document.querySelector('#first-name').value ='';
  document.querySelector('#last-name').value ='';

const filterByHouse = (houses) => {
  return students.filter(newStudent => newStudent.houses === houses)
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
  const domString = `  // Corrected variable name case
    <button class="btn btn-secondary btn-lg buttonRow" value="gryffindor" id="gryffindor">Gryffindor</button>
    <button class="btn btn-secondary btn-lg buttonRow" value="hufflepuff" id="hufflepuff">Hufflepuff</button>
    <button class="btn btn-secondary btn-lg buttonRow" value="ravenclaw" id="ravenclaw">Ravenclaw</button>
    <button class="btn btn-secondary btn-lg buttonRow" value="slytherin" id="slytherin">Slytherin</button>
  `;
    renderToDom('#filterBtns', domString); 
} 
// *********  EVENT LISTENERS  *********  //
const introButton = () => {
  document.querySelector('#introButton').addEventListener('click',intakeForm);
}
gryffindor.addEventListener('click',() => {
  const filteredHouse = filterByHouse('gryffindor');

})
// *********  FUNCTION TO START APPLICATION  *********  //s
const startApp = () => {
  introToHatBtn();
  introButton();
  filterButtons();
  filter();
};
startApp();
