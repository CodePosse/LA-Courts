import { createAccordion } from "./Accordion.js";

export default {
  title: "components/Accordions/Accordion",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createAccordion({ ...args });
  },
  argTypes: {
    title: {
      name: "Title",
      control: "text",
    },
    content: {
      name: "Content",
      control: "text",
    },
  },
  args: {},
};

export const Accordion = {
  args: {
    title: "What spaces can I use Compose + Launch on?",
    content: "Once you have purchased Compose + Launch, they can be installed on all of your spaces, or only the ones you want to have them on. There is no extra cost to install Compose + Launch on multiple spaces.",
  },
};