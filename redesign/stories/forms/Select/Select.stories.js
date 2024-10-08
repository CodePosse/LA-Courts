import { createSelect } from "./Select.js";

export default {
  title: "forms/Select",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createSelect({ ...args });
  },
  argTypes: {
    label: {
      name: "Label",
      control: "text",
    },
    placeholder: {
      name: "Select",
      control: "text",
    },
    error: {
      name: "Error",
      control: "text",
    },
    helpText: {
      name: "Help Text",
      control: "text",
    },
    required: {
      name: "Required",
      control: "boolean",
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
    },
    options: {
      name: "Options",
      control: "array",
    },
  },
  args: {},
};

export const Select = {
  args: {
    options: ["Action 1", "Action 2", "Action 3"],
  },
};

export const SelectWithLabel = {
  args: {
    label: "Label",
    options: ["Action 1", "Action 2", "Action 3"],
  },
};

export const SelectWithHelpText = {
  args: {
    label: "Label",
    options: ["Action 1", "Action 2", "Action 3"],
    helpText: "Help text",
  },
};

export const SelectWithError = {
  args: {
    label: "Label",
    options: ["Action 1", "Action 2", "Action 3"],
    error: "Error message",
  },
};

export const SelectWithRequired = {
  args: {
    label: "Label",
    options: ["Action 1", "Action 2", "Action 3"],
    required: true,
  },
};

export const SelectWithDisabled = {
  args: {
    label: "Label",
    options: ["Action 1", "Action 2", "Action 3"],
    disabled: true,
  },
};

export const SelectWithAll = {
  args: {
    label: "Label",
    options: ["Action 1", "Action 2", "Action 3"],
    error: "Error message",
    helpText: "Help text",
    required: true,
    disabled: true,
  },
};