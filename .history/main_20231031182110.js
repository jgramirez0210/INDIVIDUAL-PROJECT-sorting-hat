// *********  DATA  ********* //
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const students = [];

// *********  UTILITY FUNCTIONS  ********* //
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML += textToRender;
}
let isFormDisplayed = false;
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
const filterByHouse = (house) => {
  return students.filter(student => student.house.toLowerCase() === house.toLowerCase())
}
const renderStudents = (studentsArray) => {
  let studentHtml = '';
  studentsArray.forEach(student => {
    studentHtml += `<div class="student-card">
    <p>First Name: ${student.firstName}</p>
    <p>Last Name: ${student.lastName}</p>
    <p>House: ${student.house}</p>
    <button class="btn btn-danger" id="delete--${student.id}">X</button>
  </div>`;
  })
  const selectedElement = document.querySelector('#cardsContainer');
  selectedElement.innerHTML = studentHtml;
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
const filter = () => {
  document.querySelector('#filterBtns').addEventListener('click', (e) => {
  const house = e.target.value;
  if (houses.includes(house)) {
    console.log("You clicked a filter button", house);
    const filteredStudents = filterByHouse(house);
    renderStudents(filteredStudents);
  }
});
}
// *********  FUNCTION TO START APPLICATION  *********  //s
const startApp = () => {
  introToHatBtn();
  introButton();
  filterButtons();
  filter();
};
startApp();
