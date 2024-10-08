import "./Notifications.css";

import checkIcon from "../../assets/check_icon.svg";
import dangerIcon from "../../assets/danger_icon.svg";
import closeIcon from "../../assets/close_icon.svg";
import warningIcon from "../../assets/warning_icon.svg";

const getIcon = (variant) => {
  switch (variant) {
    case "positive":
      return checkIcon;
    case "negative":
      return dangerIcon;
    case "warning":
      return warningIcon;
    default:
      return checkIcon;
  }
};

export const createNotifications = ({ ...args }) => {
  const el = document.createElement("div");

  el.className = "notification d-flex align-items-start justify-content-between p-3";

  el.classList.add(args.variant);

  const div1 = document.createElement("div");
  div1.className = "d-flex";

  if (args.title || (args.link && args.linkText)) {
    div1.classList.add("align-items-start");
  } else {
    div1.classList.add("align-items-center");
  }

  el.appendChild(div1);

  const img = document.createElement("img");
  img.className = "me-3";
  img.src = getIcon(args.variant);
  img.alt = args.variant;
  div1.appendChild(img);

  const div2 = document.createElement("div");
  div1.appendChild(div2);

  if (args.title) {
    const div3 = document.createElement("div");
    div3.className = "notification-title mb-1";
    div3.textContent = args.title;
    div2.appendChild(div3);
  }

  if (args.body) {
    const div4 = document.createElement("div");
    div4.className = "notification-body";

    if (args.title || (args.link && args.linkText)) {
      div4.classList.add("mb-1");
    }

    div4.textContent = args.body;
    div2.appendChild(div4);
  }

  if (args.link && args.linkText) {
    const a = document.createElement("a");
    a.className = "btn btn-link p-0 text-decoration-none";
    a.href = args.link;
    a.textContent = args.linkText;
    div2.appendChild(a);
  }

  const button = document.createElement("button");
  button.className = "btn btn-text btn-sm p-0";
  el.appendChild(button);

  const img2 = document.createElement("img");
  img2.src = closeIcon;
  img2.alt = "Close";
  button.appendChild(img2);

  return el;
};