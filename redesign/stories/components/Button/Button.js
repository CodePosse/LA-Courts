import "./Button.css";

export const createButton = ({ ...args }) => {
  const el = document.createElement("button");

  const buttonText = document.createElement("span");
  buttonText.innerText = args.text;

  el.className = "button";
  el.classList.add(args.variant);
  el.classList.add(args.size || "md");

  if (args.disabled) {
    el.disabled = true;
  }

  if (args.prefixIcon) {
    const icon = document.createElement("i");
    icon.className = args.prefixIcon;
    icon.classList.add("prefix-icon");
    el.appendChild(icon);

    el.appendChild(buttonText);
  }
  if (args.suffixIcon) {
    el.appendChild(buttonText);

    const icon = document.createElement("i");
    icon.className = args.suffixIcon;
    icon.classList.add("suffix-icon");
    el.appendChild(icon);
  }

  if (!args.prefixIcon && !args.suffixIcon) {
    el.appendChild(buttonText);
  }

  return el;
};