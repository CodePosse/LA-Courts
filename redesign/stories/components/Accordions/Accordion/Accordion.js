import "./Accordion.css";
import { Collapse } from "bootstrap";

export const createAccordion = ({ ...args }) => {
  const el = document.createElement("div");

  el.className = "accordion plain-accordion";
  el.id = args.id;

  const accordionItem = document.createElement("div");
  accordionItem.className = "accordion-item mb-4 border-top border-bottom";

  const accordionHeader = document.createElement("h2");
  accordionHeader.className = "accordion-header";

  const accordionButton = document.createElement("button");
  accordionButton.className = "accordion-button px-4 pb-3";
  accordionButton.type = "button";
  accordionButton.dataset.bsToggle = "collapse";
  accordionButton.dataset.bsTarget = `#${args.id}-collapse`;
  accordionButton.setAttribute("aria-expanded", "true");
  accordionButton.setAttribute("aria-controls", `${args.id}-collapse`);
  accordionButton.innerHTML = args.title;

  const accordionCollapse = document.createElement("div");
  accordionCollapse.id = `${args.id}-collapse`;
  accordionCollapse.className = "accordion-collapse collapse show px-4";
  accordionCollapse.dataset.bsParent = `#${args.id}`;

  const accordionBody = document.createElement("div");
  accordionBody.className = "accordion-body mb-3";
  accordionBody.innerHTML = args.content;

  accordionCollapse.appendChild(accordionBody);
  accordionHeader.appendChild(accordionButton);
  accordionItem.appendChild(accordionHeader);
  accordionItem.appendChild(accordionCollapse);
  el.appendChild(accordionItem);

  new Collapse(el, {
    toggle: false,
  });

  return el;
};