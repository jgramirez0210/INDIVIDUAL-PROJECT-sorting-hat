// *********  DATA  ********* //
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const students = [];
const initializeDefaultStudents = () => {
  const defaultStudents = [
    {firstName: 'Harry', lastName: 'Pogger', house: 'Gryffindor'},
    {firstName: 'Hermione', lastName: 'Granger', house: 'Gryffindor' },
    {firstName: 'Ron', lastName: 'Weasley', house: 'Gryffindor' },
    {firstName: 'Draco', lastName: 'Malfoy', house: 'Slytherin' },
    {firstName: 'Cedric', lastName: 'Diggory', house: 'Hufflepuff' },
    {firstName: 'Luna', lastName: 'Lovegood', house: 'Ravenclaw' },
  ];
}

// *********  UTILITY FUNCTIONS  ********* //
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML += textToRender;
}

const createCard = (e) => {
  e.preventDefault();
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const randomHouseIndex = housesRandomizer(0, 4);
  const assignedHouse = houses[randomHouseIndex];
    const newStudent = {
      id: students.length + 1,
      firstName: firstName,
      lastName: lastName,
      house: assignedHouse
    }
    students.push(newStudent);
    const studentInfo = `<div class="student-card">
    <p>First Name: ${newStudent.firstName}</p>
    <p>Last Name: ${newStudent.lastName}</p>
    <p>House: ${newStudent.house}</p>
    <button class="btn btn-danger" id="delete--${newStudent.id}">X</button>
  </div>`;
  renderToDom('#cardsContainer', studentInfo);
  document.querySelector('#first-name').value ='';
  document.querySelector('#last-name').value ='';
}
const housesRandomizer = (min, max) => {
  return Math.floor(Math.random() * 4 ); 
}
// *********  HTML COMPONENT FUNCTIONS  ********* //
const introToHatBtn = () => {
  const domString = `<div class="d-grid gap-2">
  <button id="introButton" class="btn btn-primary" type="button">Meet Your Destiny</button>
</div>`;
  renderToDom('#introButton', domString);
}
const intakeForm = () => {
  const domstring = ` <form id="studentForm">
  <input class="form-control" id="first-name" type="text" placeholder="Students First Name" aria-label="default input example">
  <input class="form-control" id="last-name" type="text" placeholder="Students Last Name" aria-label="default input example">
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
  renderToDom('#container', domstring);
  document.querySelector('#studentForm').addEventListener('submit', createCard);
}
// *********  EVENT LISTENERS  *********  //
const introButton = () => {
  document.querySelector('#introButton').addEventListener('click',intakeForm);
}

// *********  FUNCTION TO START APPLICATION  *********  //s
const startApp = () => {
  initializeDefaultStudents();
  introToHatBtn();
  introButton();
  
};
startApp();