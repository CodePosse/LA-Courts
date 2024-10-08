import { createResourceAccordion } from "./Resource-Accordion.js";

export default {
  title: "components/Accordions/Resources Accordion",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createResourceAccordion({ ...args });
  },
  argTypes: {
    id: {
      name: "ID",
      control: "text",
    },
    title: {
      name: "Resources",
      control: "text",
    },
    resources: {
      name: "Resources",
      control: "object",
    },
  },
  args: {},
};

export const ResourcesAccordion = {
  args: {
    id: "resources-accordion",
    title: "Resources",
    resources: [
      {
        title: "Family Court Service",
        active: false,
        description:
          "Mediation, Parenting Time Agreements and other services involving children.",
      },
      {
        title: "Family Law Facilitator",
        active: true,
        description: "Child Support Form Completion, Guided Interviews and Workshops.",
      },
      {
        title: "Online Services",
        active: false,
        description: "Things I can do without going to a court location.",
      },
    ],
  },
};