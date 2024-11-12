import "./Pk-Cards-4.css";

export const createPkCards4 = ({ ...args }) => {
  const el = document.createElement("div");

  el.className = "card pk-card-4";

  const title = document.createElement("h5");
  title.className = "card-title p-4";
  title.innerHTML = args.title;
  el.appendChild(title);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.style.backgroundColor = args.cardBgColor;
  el.appendChild(cardBody);

  const text = document.createElement("p");
  text.className = "card-text";
  text.innerHTML = args.text;
  cardBody.appendChild(text);

  return el;
};