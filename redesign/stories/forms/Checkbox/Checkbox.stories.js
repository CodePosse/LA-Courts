import { createCheckbox } from "./Checkbox.js";

export default {
  title: "Forms/Checkbox",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createCheckbox({ ...args });
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
    disabled: {
      name: "Disabled",
      control: "boolean",
    },
    indeterminate: {
      name: "Indeterminate",
      control: "boolean",
    },
  },
  args: {},
};

export const Checkbox = {
  args: {
    label: "Checkbox",
    id: "checkbox1",
    name: "checkbox1",
  },
};

export const CheckboxChecked = {
  args: {
    label: "Checkbox",
    checked: true,
    id: "checkbox2",
    name: "checkbox2",
  },
};

export const CheckboxIndeterminate = {
  args: {
    label: "Checkbox",
    indeterminate: true,
    id: "checkbox5",
    name: "checkbox5",
  },
};

export const CheckboxDisabled = {
  args: {
    label: "Checkbox",
    disabled: true,
    id: "checkbox3",
    name: "checkbox3",
  },
};

export const CheckboxCheckedDisabled = {
  args: {
    label: "Checkbox",
    checked: true,
    disabled: true,
    id: "checkbox4",
    name: "checkbox4",
  },
};