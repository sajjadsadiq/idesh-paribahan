function setBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add(
    ...["bg-primary-clr", "text-white", "hover:bg-primary-clr"]
  );
}

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function createNewElement(element, value) {
  const newElement = document.createElement(element);
  newElement.innerText = value;
  return newElement;
}
