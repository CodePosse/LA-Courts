import "./Icon.css";

export const createIcon = ({ ...args }) => {
  const el = document.createElement("i");
  el.className = "fa fa-" + args.icon;
  return el;
};