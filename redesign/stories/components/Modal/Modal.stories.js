import { createModal } from "./Modal.js";
import { MODAL_SIZES } from "./ModalSizes.js";

export default {
  title: "components/Modal",
  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component: "Modal may not correctly render in Storybook due to the way Storybook renders components. You can go to individual component stories to see the correct rendering.",
      },
    },
  },

  render: ({ ...args }) => {
    return createModal({ ...args });
  },
  argTypes: {
    id: {
      name: "ID",
      control: "text",
    },
    title: {
      name: "Title",
      control: "text",
    },
    body: {
      name: "Body",
      control: "text",
    },
    secondaryButton: {
      name: "Secondary Button",
      control: "text",
    },
    positiveButton: {
      name: "Positive Button",
      control: "text",
    },
    size: {
      name: "Size",
      control: {
        type: "select",
        labels: MODAL_SIZES,
      },
      options: ["modal-sm", "modal-md", "modal-lg", "modal-xl"],
    },
  },
  args: {},
};

export const Small = {
  args: {
    id: "small-modal",
    title: "Small Modal",
    body: "<p>Modal body text goes here.</p>",
    secondaryButton: "Close",
    positiveButton: "Save changes",
    size: "modal-sm",
  },
};

export const Medium = {
  args: {
    id: "medium-modal",
    title: "Medium Modal",
    body: "<p>Modal body text goes here.</p>",
    secondaryButton: "Close",
    positiveButton: "Save changes",
    size: "modal-md",
  },
};

export const Large = {
  args: {
    id: "large-modal",
    title: "Large Modal",
    body: "<p>Modal body text goes here.</p>",
    secondaryButton: "Close",
    positiveButton: "Save changes",
    size: "modal-lg",
  },
};

export const FullWidth = {
  args: {
    id: "full-width-modal",
    title: "Full Width Modal",
    body: "<p>Modal body text goes here.</p>",
    secondaryButton: "Close",
    positiveButton: "Save changes",
    size: "modal-xl",
  },
};