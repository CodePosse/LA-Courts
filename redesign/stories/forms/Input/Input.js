import "./Input.css";
import copyIcon from "../../assets/copy_icon.svg";
import errorIcon from "../../assets/error_icon.svg";
import eyeIcon from "../../assets/eye_icon.svg";

export const createInput = ({ ...args }) => {
  const el = document.createElement("div");

  el.className = "input";

  if (args.errorMessage) {
    el.classList.add("error");
  }

  // Label
  const label = document.createElement("label");
  label.className = "form-label";
  label.htmlFor = args.id;
  el.appendChild(label);

  const labelLeft = document.createElement("span");
  labelLeft.className = "label-left";
  labelLeft.textContent = args.label;
  label.appendChild(labelLeft);

  if (args.required) {
    const labelRequired = document.createElement("span");
    labelRequired.textContent = " (required)";
    labelLeft.appendChild(labelRequired);
  }

  if (args.linkText && args.linkUrl) {
    const labelRight = document.createElement("span");
    labelRight.className = "label-right";

    const labelLink = document.createElement("a");
    labelLink.className = "label-link";
    labelLink.href = args.linkUrl;

    const labelLinkIcon = document.createElement("img");
    labelLinkIcon.src = eyeIcon;
    labelLinkIcon.alt = "";

    const labelLinkText = document.createElement("span");
    labelLinkText.textContent = args.linkText;

    labelLink.appendChild(labelLinkIcon);
    labelLink.appendChild(labelLinkText);
    labelRight.appendChild(labelLink);
    label.appendChild(labelRight);
  }

  const inputGroupId = `input-group-${args.id}`;

  const inputGroup = document.createElement("div");
  inputGroup.className = "input-group";
  inputGroup.id = inputGroupId;
  
  const inputType = args.type === "textarea" ? "textarea" : "input";

  const input = document.createElement(inputType);
  input.className = "form-control";
  input.id = args.id;
  input.placeholder = args.placeholder;
  input.onfocus = () => {
    document.querySelector(`#${inputGroupId}`).classList.add("focus");
  };
  input.onblur = () => {
    document.querySelector(`#${inputGroupId}`).classList.remove("focus");
  };
  inputGroup.appendChild(input);
  el.appendChild(inputGroup);

  if (args.showCopy) {
    const button = document.createElement("button");
    button.className = "input-group-text bg-white";

    const buttonIcon = document.createElement("img");
    buttonIcon.src = copyIcon;
    buttonIcon.alt = "";

    button.appendChild(buttonIcon);
    inputGroup.appendChild(button);
  }

  const formText = document.createElement("div");
  formText.className = "form-text";

  const inputLeft = document.createElement("div");
  inputLeft.className = "input-left";
  formText.appendChild(inputLeft);

  if (args.inputLeftText) {
    const inputLeftText = document.createElement("div");
    inputLeftText.className = "mb-2";
    inputLeftText.textContent = args.inputLeftText;
    inputLeft.appendChild(inputLeftText);
  }

  if (args.errorMessage) {
    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    inputLeft.appendChild(errorMessage);

    const errorMessageIcon = document.createElement("img");
    errorMessageIcon.src = errorIcon;
    errorMessageIcon.alt = "";
    errorMessage.appendChild(errorMessageIcon);

    const errorMessageText = document.createElement("span");
    errorMessageText.textContent = args.errorMessage;
    errorMessage.appendChild(errorMessageText);
  }

  const inputRight = document.createElement("div");
  inputRight.className = "input-right";
  inputRight.textContent = args.inputRightText;

  formText.appendChild(inputRight);
  el.appendChild(formText);

  return el;
};