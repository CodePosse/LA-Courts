import "./Checkbox.css";

export const createCheckbox = ({ ...args }) => {
  // Create the main container div
  const el = document.createElement("div");
  el.classList.add("form-check");

  // Create the checkbox input
  const inputElement = document.createElement("input");
  inputElement.classList.add("form-check-input");
  inputElement.type = "checkbox";
  inputElement.id = args.id;
  inputElement.value = args.value || "";
  inputElement.checked = args.checked;
  inputElement.disabled = args.disabled;
  inputElement.name = args.name;
  inputElement.indeterminate = args.indeterminate;

  // Create the label
  const labelElement = document.createElement("label");
  labelElement.classList.add("form-check-label");
  labelElement.setAttribute("for", args.id);
  labelElement.innerText = args.label;

  // Append the input and label to the main container
  el.appendChild(inputElement);
  el.appendChild(labelElement);

  return el;
};