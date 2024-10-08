import "./Autocomplete.css";

import arrowDownIcon from "../../assets/arrow_down_icon.svg";

export const createAutocomplete = ({ ...args }) => {
  const el = document.createElement("div");

  el.className = "form-group autocomplete";

  if (args.label) {
    const label = document.createElement("label");
    label.htmlFor = `${args.id}-datalist`;
    label.textContent = args.label;
    el.appendChild(label);
  }

  const input = document.createElement("input");
  input.type = "text";
  input.className = "form-control";
  input.placeholder = args.placeholder;
  input.setAttribute("list", `list-${args.id}`);
  input.id = `${args.id}-datalist`;

  if (args.disabled) {
    input.disabled = true;
  }

  el.appendChild(input);

  const datalist = document.createElement("datalist");
  datalist.id = `list-${args.id}`;
  el.appendChild(datalist);

  const arrowDown = document.createElement("img");
  arrowDown.src = arrowDownIcon;
  arrowDown.className = "arrow-icon";
  arrowDown.style.top = args.label ? "50%" : "calc(50% - 15px)";
  el.appendChild(arrowDown);

  args.options.forEach((option) => {
    const optionEl = document.createElement("option");
    optionEl.textContent = option;
    datalist.appendChild(optionEl);
  });

  setTimeout(() => {
    // eslint-disable-next-line no-undef
    $(`#${args.id}-datalist`).autocomplete();
  }, 100);

  return el;
};