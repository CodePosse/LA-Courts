import { createButton } from "./Button.js";

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createButton({ ...args });
  },
  argTypes: {
    text: {
      name: "Text",
      control: "text",
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
    },
    prefixIcon: {
      name: "Prefix Icon",
      control: "text",
    },
    suffixIcon: {
      name: "Suffix Icon",
      control: "text",
    },
    size: {
      name: "Size",
      control: {
        type: "select",
        labels: {
          sm: "Small",
          md: "Medium",
          lg: "Large",
        },
      },
      options: ["sm", "md", "lg"],
    },
    variant: {
      name: "Variant",
      control: {
        type: "select",
        labels: {
          primary: "Primary",
          secondary: "Secondary",
          positive: "Positive",
          negative: "Negative",
          transparent: "Transparent",
        },
      },
      options: ["primary", "secondary", "positive", "negative", "transparent"],
    },
  },
  args: {},
};

export const Button = {
  args: {
    text: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
  },
};

export const Secondary = {
  args: {
    text: "Secondary",
    variant: "secondary",
    size: "md",
    disabled: false,
  },
};

export const Positive = {
  args: {
    text: "Positive",
    variant: "positive",
    size: "md",
    disabled: false,
  },
};

export const Negative = {
  args: {
    text: "Negative",
    variant: "negative",
    size: "md",
    disabled: false,
  },
};

export const Transparent = {
  args: {
    text: "Transparent",
    variant: "transparent",
    size: "md",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled",
    variant: "primary",
    size: "md",
    disabled: true,
  },
};

export const PrefixIcon = {
  args: {
    text: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
    prefixIcon: "fas fa-user",
  },
};

export const SuffixIcon = {
  args: {
    text: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
    suffixIcon: "fas fa-user",
  },
};

export const PrefixSuffixIcon = {
  args: {
    text: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
    prefixIcon: "fas fa-user",
    suffixIcon: "fas fa-user",
  },
};