import { createSwitch } from "./Switch.js";

export default {
  title: "forms/Switch",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createSwitch({ ...args });
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
    switchedOn: {
      name: "Switched On",
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

export const Switch = {
  args: {
    id: "switch1",
    label: "Switch Label",
    name: "switch1",
    switchedOn: false,
    error: "Validation message",
    helpText: "Help text",
    disabled: false,
  },
};

export const SwitchChecked = {
  args: {
    id: "switch2",
    label: "Switch Label",
    name: "switch2",
    switchedOn: true,
    error: "",
    helpText: "",
    disabled: false,
  },
};

export const SwitchDisabled = {
  args: {
    id: "switch3",
    label: "Switch Label",
    name: "switch3",
    switchedOn: false,
    error: "",
    helpText: "",
    disabled: true,
  },
};

export const SwitchError = {
  args: {
    id: "switch4",
    label: "Switch Label",
    name: "switch4",
    switchedOn: false,
    error: "Validation message",
    helpText: "",
    disabled: false,
  },
};

export const SwitchHelpText = {
  args: {
    id: "switch5",
    label: "Switch Label",
    name: "switch5",
    switchedOn: false,
    error: "",
    helpText: "Help text",
    disabled: false,
  },
};

export const SwitchErrorAndHelpText = {
  args: {
    id: "switch6",
    label: "Switch Label",
    name: "switch6",
    switchedOn: false,
    error: "Validation message",
    helpText: "Help text",
    disabled: false,
  },
};