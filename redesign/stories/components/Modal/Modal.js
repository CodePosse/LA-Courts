import "./Modal.css";
import "../Button/Button.css";
import { Modal } from "bootstrap";
import { MODAL_SIZES } from "./ModalSizes.js";

export const createModal = ({ ...args }) => {
  const el = document.createElement("div");

  // Create demo button
  const launchButton = document.createElement("button");
  launchButton.type = "button";
  launchButton.className = "btn btn-primary";
  launchButton.dataset.bsToggle = "modal";
  launchButton.dataset.bsTarget = `#${args.id}`;
  launchButton.textContent = `Launch ${MODAL_SIZES[args.size] || "demo"} modal`;
  el.appendChild(launchButton);

  // Create modal
  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = args.id;
  modal.tabIndex = -1;
  el.appendChild(modal);

  // Create modal dialog
  const modalDialog = document.createElement("div");
  modalDialog.className = `modal-dialog ${args.size}`;
  modal.appendChild(modalDialog);

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modalDialog.appendChild(modalContent);

  // Create modal header
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalContent.appendChild(modalHeader);

  // Create modal title
  const modalTitle = document.createElement("h5");
  modalTitle.className = "modal-title";
  modalTitle.textContent = args.title;
  modalHeader.appendChild(modalTitle);

  // Create modal close button
  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "btn-close";
  closeButton.dataset.bsDismiss = "modal";
  closeButton.setAttribute("aria-label", "Close");
  modalHeader.appendChild(closeButton);

  // Create modal body
  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";
  modalBody.innerHTML = args.body;
  modalContent.appendChild(modalBody);

  // Create modal footer
  const modalFooter = document.createElement("div");
  modalFooter.className = "modal-footer border-0";
  modalContent.appendChild(modalFooter);

  // Create secondary button
  const secondaryButton = document.createElement("button");
  secondaryButton.className = "button secondary sm";
  secondaryButton.innerHTML = `<span>${args.secondaryButton}</span>`;
  modalFooter.appendChild(secondaryButton);

  // Create positive button
  const positiveButton = document.createElement("button");
  positiveButton.className = "button positive sm";
  positiveButton.innerHTML = `<span>${args.positiveButton}</span>`;
  modalFooter.appendChild(positiveButton);

  new Modal(modal);

  return el;
};