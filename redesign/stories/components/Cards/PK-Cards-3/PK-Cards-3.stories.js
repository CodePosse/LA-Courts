import { createPKCards3 } from "./PK-Cards-3";

import cardImageSample2 from "../../../assets/card_image_sample_2.svg";

export default {
  title: "components/Cards/PK Cards 3",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createPKCards3({ ...args });
  },
  argTypes: {
    imgSrc: {
      name: "Image Source",
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
  },
  args: {},
};

export const Style1 = {
  args: {
    imgSrc: cardImageSample2,
    buttonText: "Internet Access Options",
    buttonColor: "rgba(22, 51, 104, 0.8)",
    buttonTextColor: "#FFFFFF",
  },
};

export const Style2 = {
  args: {
    imgSrc: cardImageSample2,
    buttonText: "Internet Access Options",
    buttonColor: "#F3C629",
    buttonTextColor: "#000000",
  },
};
