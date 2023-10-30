// *********  UTILITY FUNCTIONS  ********* //
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
}
const createCard = (e) => {
  e.preventDefault();
  const firstName: document.querySelector('.form-control[type="text"]').value;
    const newStudent = {
      id: student.length + 1,
      
    }
}

// *********  HTML COMPONENT FUNCTIONS  ********* //
const introToHatBtn = () => {
  const domString = `<div class="d-grid gap-2">
  <button id="introButton" class="btn btn-primary" type="button">Meet Your Destiny</button>
</div>`;
  renderToDom('#container', domString);
}
const intakeForm = () => {
  const domstring = ` <form id="studentForm">
  <input class="form-control" type="text" placeholder="Students First Name" aria-label="default input example">
  <input class="form-control" type="text" placeholder="Students Last Name" aria-label="default input example">
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
  renderToDom('#container', domstring);
}
// *********  EVENT LISTENERS  *********  //
const introButton = () => {
  document.querySelector('#introButton').addEventListener('click',intakeForm);
}
const formSubmit = () => {
  document.querySelector('#studentForm').addEventListener('submit', createCard)
}

// *********  FUNCTION TO START APPLICATION  *********  //
const startApp = () => {
  introToHatBtn();
  introButton();
};
startApp();
