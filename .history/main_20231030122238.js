// *********  UTILITY FUNCTIONS  ********* //
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
}

// *********  HTML COMPONENT FUNCTIONS  ********* //
const introToHatBtn = () => {
  const domString = `<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Meet Your Destiny</button>
</div>`;
  renderToDom('#container', domString);
}
const intakeForm = () => {
  const domstring = `<input class="form-control" type="text" placeholder="Students First Name" aria-label="default input example">
  <input class="form-control" type="text" placeholder="Students Last Name" aria-label="default input example">`;
  renderToDom('#container', domstring);
}
// *********  EVENT LISTENERS  *********  //
const

// *********  FUNCTION TO START APPLICATION  *********  //
const startApp = () => {
  introToHatBtn();
  // intakeForm();
};
startApp();
