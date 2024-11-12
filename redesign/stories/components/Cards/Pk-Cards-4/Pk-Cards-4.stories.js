import { createPkCards4 } from "./Pk-Cards-4.js";

export default {
  title: "components/Cards/PK Cards 4",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createPkCards4({ ...args });
  },
  argTypes: {
    title: {
      name: "Title",
      control: "text",
    },
    text: {
      name: "Text",
      control: "text",
    },
  },
  args: {},
};

export const Style1 = {
  args: {
    title: "Child Custody Mediation",
    text: `
      <p>Family Law Online Dispute Resolution Program</p>
      <p>Family Court Services-Child Custody Mediation</p>
    `,
  },
};