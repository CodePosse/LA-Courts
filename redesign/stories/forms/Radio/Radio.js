import "./Radio.css";

import errorIcon from "../../assets/error_icon.svg";

export const createRadio = ({ ...args }) => {
  // Create the main container div
  const el = document.createElement("div");
  el.classList.add("form-check");

  // Create the radio input
  const inputElement = document.createElement("input");
  inputElement.classList.add("form-check-input");
  inputElement.type = "radio";
  inputElement.name = args.name;
  inputElement.id = args.id;
  inputElement.checked = args.checked;
  inputElement.disabled = args.disabled;

  // Create the label
  const labelElement = document.createElement("label");
  labelElement.classList.add("form-check-label");
  labelElement.setAttribute("for", args.id);
  labelElement.innerText = args.label;

  // Create the error message container
  if (args.error) {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");

    const errorIconImg = document.createElement("img");
    errorIconImg.src = errorIcon;

    errorDiv.appendChild(errorIconImg);
    errorDiv.appendChild(document.createTextNode(` ${args.error}`));

    labelElement.appendChild(errorDiv);
  }

  // Create the help text container
  if (args.helpText) {
    const helpTextDiv = document.createElement("div");
    helpTextDiv.classList.add("help-text");
    helpTextDiv.innerText = args.helpText;

    labelElement.appendChild(helpTextDiv);
  }

  // Append the input and label to the main container
  el.appendChild(inputElement);
  el.appendChild(labelElement);

  return el;
};