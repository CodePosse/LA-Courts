import "./Typography.css";

const getElement = (variant) => {
  return {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    paragraph: "p",
    "paragraph-large": "p",
    "paragraph-medium": "p",
    "paragraph-small": "p",
    "card-heading": "p",
  }[variant];
};

export const createTypography = ({ ...args }) => {
  const el = document.createElement(getElement(args.variant));
  el.innerText = args.text;
  el.className = `typography ${args.variant}`;
  return el;
};