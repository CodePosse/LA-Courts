import "./PK-Cards-1.css";
import "../../Button/Button.css";

export const createPKCards1 = ({ ...args }) => {
  const el = document.createElement("div");

  el.className = "card pk-card-1 border-0";
  el.style.width = "18rem";
  el.style.backgroundColor = args.cardBgColor;

  const img = document.createElement("img");
  img.src = args.imgSrc;
  img.className = "card-img-top";
  img.alt = "...";
  el.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.style.backgroundColor = args.cardBgColor;
  el.appendChild(cardBody);

  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerHTML = args.title;
  cardBody.appendChild(title);

  const text = document.createElement("p");
  text.className = "card-text";
  text.innerHTML = args.text;
  cardBody.appendChild(text);

  const button = document.createElement("button");
  button.className = "button primary sm";
  button.style.background = args.buttonColor;
  cardBody.appendChild(button);

  const span = document.createElement("span");
  span.innerHTML = args.buttonText;
  span.style.color = args.buttonTextColor;
  button.appendChild(span);

  return el;
};