import { createTypography } from "./Typography.js";

export default {
  title: "Content/Typography",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createTypography({ ...args });
  },
  argTypes: {
    text: {
      name: "Text",
      control: "text",
    },
    variant: {
      name: "Variant",
      control: {
        type: "select",
        labels: {
          h1: "H1",
          h2: "H2",
          h3: "H3",
          h4: "H4",
          h5: "H5",
          h6: "H6",
          paragraph: "Paragraph",
          "paragraph-large": "Paragraph Large",
          "paragraph-medium": "Paragraph Medium",
          "paragraph-small": "Paragraph Small",
          "card-heading": "Card Heading",
        },
      },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "paragraph",
        "paragraph-large",
        "paragraph-medium",
        "paragraph-small",
        "card-heading",
        "paragraph",
      ],
    },
  },
};

export const H1 = {
  args: {
    variant: "h1",
    text: "H1 - Newsreader",
  },
};

export const H2 = {
  args: {
    variant: "h2",
    text: "H2 - Newsreader",
  },
};

export const H3 = {
  args: {
    variant: "h3",
    text: "H3 - Newsreader",
  },
};

export const H4 = {
  args: {
    variant: "h4",
    text: "H4 - Hanken Grotesk",
  },
};

export const H5 = {
  args: {
    variant: "h5",
    text: "H5 - Hanken Grotesk",
  },
};

export const H6 = {
  args: {
    variant: "h6",
    text: "H6 - Hanken Grotesk",
  },
};

export const Paragraph = {
  args: {
    variant: "paragraph",
    text: "Paragraph - Hanken Grotesk",
  },
};

export const ParagraphLarge = {
  args: {
    variant: "paragraph-large",
    text: "Paragraph Large - Hanken Grotesk",
  },
};

export const ParagraphMedium = {
  args: {
    variant: "paragraph-medium",
    text: "Paragraph Medium - Hanken Grotesk",
  },
};

export const ParagraphSmall = {
  args: {
    variant: "paragraph-small",
    text: "Paragraph Small - Hanken Grotesk",
  },
};

export const CardHeading = {
  args: {
    variant: "card-heading",
    text: "Card Heading - Hanken Grotesk",
  },
};