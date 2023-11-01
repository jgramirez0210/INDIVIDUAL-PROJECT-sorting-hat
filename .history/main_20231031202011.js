// *********  DATA  ********* //
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const students = [];
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
    displayCard(students)   
}
const displayCard = (array) => {
  let domstring = "";
  array.forEach((student) => {
    domstring += `<div class="student-card">
    <p>First Name: ${student.firstName}</p>
    <p>Last Name: ${student.lastName}</p>
    <p>House: ${student.house}</p>
    <button class="btn btn-danger" id="delete--${student.id}">X</button>
  </div>`;
  })
  const selectedElement = document.querySelector('#cardsContainer');
  selectedElement.innerHTML = domstring
  document.querySelector('#first-name').value ='';
  document.querySelector('#last-name').value ='';
}

const filterByHouse = (house) => {
  console.log()
  students.filter(student => student.house.toLowerCase() === house.toLowerCase())
};

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
};
// *********  FUNCTION TO START APPLICATION  *********  //s
const startApp = () => {
  introToHatBtn();
  introButton();
  filterButtons();
  houseButtonListeners(); 
};
startApp();
