import "./Menu.css";
import { Dropdown } from "bootstrap";

export const createMenu = ({ ...args }) => {
  const el = document.createElement("div");
  el.className = "menu dropdown";

  const button = document.createElement("button");
  button.textContent = args.text;
  button.className = "menu-button";
  button.setAttribute("data-bs-toggle", "dropdown");

  if (args.disabled) {
    button.disabled = true;
  }

  el.appendChild(button);

  const dropdownMenu = document.createElement("div");
  dropdownMenu.className = "dropdown-menu";

  args.options?.forEach((option) => {
    const title = document.createElement("span");
    title.className = "menu-title";
    title.textContent = option.title;
    dropdownMenu.appendChild(title);

    const ul = document.createElement("ul");
    ul.className = "mb-0";
    option.items.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "dropdown-item";
      a.textContent = item.text;
      a.href = item.href;
      li.appendChild(a);
      ul.appendChild(li);
    });

    dropdownMenu.appendChild(ul);
  });

  el.appendChild(dropdownMenu);

  new Dropdown(el.querySelector(".dropdown-menu"));

  return el;
};