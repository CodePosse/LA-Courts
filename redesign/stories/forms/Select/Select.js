import "./Select.css";
import errorIcon from "../../assets/error_icon.svg";
import { Dropdown } from "bootstrap";

export const createSelect = ({ ...args }) => {
  const el = document.createElement("div");
  el.className = "dropdown";

  if (args.error) {
    el.classList.add("error");
  }

  // Create label
  if (args.label) {
    const label = document.createElement("label");
    label.className = "form-label";
    label.htmlFor = "select";
    label.innerText = args.label;

    if (args.required) {
      const span = document.createElement("span");
      span.innerText = " (required)";
      label.appendChild(span);
    }

    el.appendChild(label);
  }

  // Create dropdown
  const dropdown = document.createElement("button");
  dropdown.className = "btn w-100 btn-light border-1 bg-white dropdown-toggle";
  dropdown.type = "button";
  dropdown.dataset.bsToggle = "dropdown";
  dropdown.setAttribute("aria-expanded", "false");
  dropdown.innerText = args.placeholder || "Select";

  if (args.disabled) {
    dropdown.disabled = true;
  }

  el.appendChild(dropdown);

  // Create dropdown menu
  const dropdownMenu = document.createElement("ul");
  dropdownMenu.className = "dropdown-menu border-0 w-100";
  el.appendChild(dropdownMenu);

  args?.options?.forEach((text) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = "dropdown-item";
    button.innerText = text;
    li.appendChild(button);
    dropdownMenu.appendChild(li);
  });

  // Create help text
  if (args.helpText) {
    const helpText = document.createElement("div");
    helpText.className = "select-help-text mt-1";
    const span = document.createElement("span");
    span.innerText = args.helpText;
    helpText.appendChild(span);
    el.appendChild(helpText);
  }

  // Create error message
  if (args.error) {
    const errorMessage = document.createElement("div");
    errorMessage.className = "select-error-message mt-1";
    const img = document.createElement("img");
    img.src = errorIcon;
    img.alt = "error icon";
    img.style.width = "16px";
    const span = document.createElement("span");
    span.className = "error-message";
    span.innerText = args.error;
    errorMessage.appendChild(img);
    errorMessage.appendChild(span);
    el.appendChild(errorMessage);
  }

  new Dropdown(el.querySelector(".dropdown-toggle"));

  return el;
};