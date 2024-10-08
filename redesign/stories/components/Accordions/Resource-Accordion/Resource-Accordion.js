import "./Resource-Accordion.css";
import { Collapse } from "bootstrap";
import arrowIcon from "../../../assets/arrow_icon.svg";

export const createResourceAccordion = ({ ...args }) => {
  const el = document.createElement("div");

  el.className = "accordion resource-accordion";
  el.id = args.id;

  const accordionItem = document.createElement("div");
  accordionItem.className = "accordion-item mb-4";

  const accordionHeader = document.createElement("h2");
  accordionHeader.className = "accordion-header";

  const accordionButton = document.createElement("button");
  accordionButton.className = "accordion-button p-4";
  accordionButton.type = "button";
  accordionButton.dataset.bsToggle = "collapse";
  accordionButton.dataset.bsTarget = `#${args.id}-collapse`;
  accordionButton.setAttribute("aria-expanded", "true");
  accordionButton.setAttribute("aria-controls", `${args.id}-collapse`);
  accordionButton.innerHTML = args.title;

  const accordionCollapse = document.createElement("div");
  accordionCollapse.id = `${args.id}-collapse`;
  accordionCollapse.className = "accordion-collapse collapse show";
  accordionCollapse.dataset.bsParent = `#${args.id}`;

  const accordionBody = document.createElement("div");
  accordionBody.className = "accordion-body d-flex justify-content-between align-items-center";

  const table = document.createElement("table");
  table.className = "table border-0 m-0";

  const tbody = document.createElement("tbody");

  args.resources.forEach((resource) => {
    const tr = document.createElement("tr");
    tr.className = "border-top accordion-resource";

    if (resource.active) {
      tr.classList.add("active");
    }

    const tdTitle = document.createElement("td");
    tdTitle.className = "bg-transparent py-4 ps-5 pe-1";
    tdTitle.style.fontWeight = "600";
    tdTitle.style.fontSize = "14px";
    tdTitle.innerText = resource.title;

    const tdDescription = document.createElement("td");
    tdDescription.className = "bg-transparent py-4 ps-1";
    tdDescription.innerText = resource.description;

    const tdIcon = document.createElement("td");
    tdIcon.className = "bg-transparent py-4 pe-4";

    const img = document.createElement("img");
    img.src = arrowIcon;

    tdIcon.appendChild(img);

    tr.appendChild(tdTitle);
    tr.appendChild(tdDescription);
    tr.appendChild(tdIcon);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  accordionBody.appendChild(table);
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