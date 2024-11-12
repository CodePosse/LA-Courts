import { createPKCards2 } from "./PK-Cards-2";
import scaleIcon from "../../../assets/scale_icon.svg";

export default {
  title: "components/Cards/PK Cards 2",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createPKCards2({ ...args });
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
    iconSrc: {
      name: "Image Source",
      control: "text",
    },
    cardBgColor: {
      name: "Card Background Color",
      control: "color",
    },
    cardBorderColor: {
      name: "Card Border Color",
      control: "color",
    },
  },
  args: {},
};

export const Style1 = {
  args: {
    title: "Civil",
    iconSrc: scaleIcon,
    text: "Lorem ipsum dolor sit amet consectetur. At vestibulum ultricies adipiscing consectetur.",
    cardBorderColor: "#005994",
    cardBgColor: "#FFFFFF",
  },
};

export const Style2 = {
  args: {
    title: "Civil",
    iconSrc: scaleIcon,
    text: "Lorem ipsum dolor sit amet consectetur. At vestibulum ultricies adipiscing consectetur.",
    cardBorderColor: "#BFCDEA",
    cardBgColor: "#F2F6FB",
  },
};