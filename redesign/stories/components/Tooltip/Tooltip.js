import "./Tooltip.css";
import { Tooltip } from "bootstrap";

export const createTooltip = ({ ...args }) => {
  const el = document.createElement("span");

  el.setAttribute("data-bs-toggle", "tooltip");
  el.setAttribute("data-bs-placement", args.placement);
  el.setAttribute("data-bs-title", args.text);

  el.textContent = "Hover over me";

  new Tooltip(el, {
    placement: args.placement,
    title: args.text,
  });

  return el;
};