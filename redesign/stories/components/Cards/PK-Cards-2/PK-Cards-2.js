import "./PK-Cards-2.css";

export const createPKCards2 = ({ ...args }) => {
  const el = document.createElement("div");

  el.className = "card pk-card-2";
  el.style.width = "18rem";
  el.style.backgroundColor = args.cardBgColor;
  el.style.border = `1px solid ${args.cardBorderColor}`;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.style.backgroundColor = args.cardBgColor;
  el.appendChild(cardBody);

  const title = document.createElement("h5");
  title.className = "card-title d-flex align-items-center";
  cardBody.appendChild(title);

  const img = document.createElement("img");
  img.src = args.iconSrc;
  img.className = "me-1";
  img.style.width = "20px";
  img.alt = "...";
  title.appendChild(img);

  const span = document.createElement("span");
  span.innerHTML = args.title;
  title.appendChild(span);

  const text = document.createElement("p");
  text.className = "card-text";
  text.innerHTML = args.text;
  cardBody.appendChild(text);

  return el;
};