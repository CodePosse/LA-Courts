import "./Date-Picker.css";

import calendarIcon from "../../assets/calendar_icon.svg";

export const createDatePicker = ({ ...args }) => {
  const el = document.createElement("div");
  el.className = "date-picker";

  if (args.label) {
    const label = document.createElement("label");
    label.className = "mb-1";
    label.htmlFor = args.id;
    label.innerText = args.label;
    el.appendChild(label);
  }

  const inputGroup = document.createElement("div");
  inputGroup.className = "input-group mb-3";
  el.appendChild(inputGroup);

  const input = document.createElement("input");
  input.type = "text";
  input.id = args.id;
  input.className = "form-control";
  input.placeholder = args.placeholder;
  inputGroup.appendChild(input);

  const span = document.createElement("span");
  span.className = "input-group-text";
  inputGroup.appendChild(span);

  const img = document.createElement("img");
  img.src = calendarIcon;
  img.alt = "calendar icon";
  span.appendChild(img);

  setTimeout(() => {
    $(`#${args.id}`).datepicker({
      format: args.format,
      todayHighlight: args.highlightToday,
    });
  }, 100);

  return el;
};