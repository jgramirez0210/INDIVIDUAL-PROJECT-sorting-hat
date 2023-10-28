// *********  UTILITY FUNCTIONS  ********* //
const renderToDom = (divId, textToRendere) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
}
// *********  HTML COMPONENT FUNCTIONS  ********* //
const introToHat = () => {
  const domString = `<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Meet Your Destiny</button>
</div>`;
renderToDom('#container')
}
// *********  FUNCTION TO START APPLICATION  *********  //
const startApp = () => {

;}