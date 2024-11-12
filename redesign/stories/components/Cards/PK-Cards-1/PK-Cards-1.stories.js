import { createPKCards1 } from "./PK-Cards-1";
import cardSample from "../../../assets/card_sample.svg";

export default {
  title: "components/Cards/PK Cards 1",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createPKCards1({ ...args });
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
    buttonText: {
      name: "Button Text",
      control: "text",
    },
    buttonColor: {
      name: "Button Color",
      control: "color",
    },
    buttonTextColor: {
      name: "Button Text Color",
      control: "color",
    },
    imgSrc: {
      name: "Image Source",
      control: "text",
    },
    cardBgColor: {
      name: "Card Background Color",
      control: "color",
    },
  },
  args: {},
};

export const Style1 = {
  args: {
    title: "Alternative Dispute Resolution",
    imgSrc: cardSample,
    text: "Learn about settlement programs to resolve your case.",
    buttonText: "Learn More",
    buttonColor: "#12205C",
    cardBgColor: "#F5E49D",
    buttonTextColor: "#FFFFFF",
  },
};

export const Style2 = {
  args: {
    title: "Alternative Dispute Resolution",
    imgSrc: cardSample,
    text: "Learn about settlement programs to resolve your case.",
    buttonText: "Learn More",
    buttonColor: "#12205C",
    cardBgColor: "#DBE4E7",
    buttonTextColor: "#FFFFFF",
  },
};

export const Style3 = {
  args: {
    title: "Alternative Dispute Resolution",
    imgSrc: cardSample,
    text: "Learn about settlement programs to resolve your case.",
    buttonText: "Learn More",
    buttonColor: "#F3C629",
    cardBgColor: "#F5E49D",
    buttonTextColor: "#1B273A",
  },
};

export const Style4 = {
  args: {
    title: "Alternative Dispute Resolution",
    imgSrc: cardSample,
    text: "Learn about settlement programs to resolve your case.",
    buttonText: "Learn More",
    buttonColor: "#F3C629",
    cardBgColor: "#DBE4E7",
    buttonTextColor: "#1B273A",
  },
};

export const Style5 = {
  args: {
    title: "Alternative Dispute Resolution",
    imgSrc: cardSample,
    text: "Learn about settlement programs to resolve your case.",
    buttonText: "Learn More",
    buttonColor: "#12205C",
    cardBgColor: "#CEDDED",
    buttonTextColor: "#FFFFFF",
  },
};

export const Style6 = {
  args: {
    title: "Alternative Dispute Resolution",
    imgSrc: cardSample,
    text: "Learn about settlement programs to resolve your case.",
    buttonText: "Learn More",
    buttonColor: "#F3C629",
    cardBgColor: "#CEDDED",
    buttonTextColor: "#1B273A",
  },
};

