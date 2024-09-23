import "./Badge.css";

export const createBadge = ({ ...args }) => {
  const el = document.createElement("div");
  el.innerText = args.text;
  el.className = `badge`;

  el.style.textTransform = args.textTransform;

  if (args.filled) {
    el.classList.add(`${args.variant}-filled`);
  } else {
    el.classList.add(args.variant);
  }

  el.classList.add(args.size || "lg");

  return el;
};