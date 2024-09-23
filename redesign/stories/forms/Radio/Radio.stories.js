import { createRadio } from "./Radio.js";

export default {
  title: "Forms/Radio",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createRadio({ ...args });
  },
  argTypes: {
    id: {
      name: "ID",
      control: "text",
    },
    label: {
      name: "Label",
      control: "text",
    },
    name: {
      name: "Name",
      control: "text",
    },
    checked: {
      name: "Checked",
      control: "boolean",
    },
    error: {
      name: "Error",
      control: "text",
    },
    helpText: {
      name: "Help Text",
      control: "text",
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
    },
  },
  args: {},
};

export const Radio = {
  args: {
    label: "Radio",
    id: "radio1",
    name: "radio1",
  },
};

export const RadioChecked = {
  args: {
    label: "Radio",
    checked: true,
    id: "radio2",
    name: "radio2",
  },
};

export const RadioError = {
  args: {
    label: "Radio",
    error: "Validation message",
    id: "radio3",
    name: "radio3",
  },
};

export const RadioHelpText = {
  args: {
    label: "Radio",
    helpText: "Help text",
    id: "radio4",
    name: "radio4",
  },
};

export const RadioDisabled = {
  args: {
    label: "Radio",
    disabled: true,
    id: "radio5",
    name: "radio5",
  },
};