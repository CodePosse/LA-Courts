import "./PK-Cards-3.css";
import "../../Button/Button.css";

export const createPKCards3 = ({ ...args }) => {
  const el = document.createElement("div");

  el.className = "card pk-card-3 border-0";
  el.style.width = "18rem";
  el.style.backgroundColor = args.cardBgColor;

  if (args.imgSrc) {
    const img = document.createElement("img");
    img.src = args.imgSrc;
    img.className = "card-img-top";
    img.alt = "...";
    el.appendChild(img);
  }

  const button = document.createElement("button");
  button.className = "button primary sm border-0";
  button.style.background = args.buttonColor;
  el.appendChild(button);

  const span = document.createElement("span");
  span.innerHTML = args.buttonText;
  span.style.color = args.buttonTextColor;
  button.appendChild(span);

  return el;
};