import { createAutocomplete } from "./Autocomplete.js";

export default {
  title: "forms/Autocomplete",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createAutocomplete({ ...args });
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
    placeholder: {
      name: "Placeholder",
      control: "text",
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

export const Autocomplete = {
  args: {
    id: "autocomplete1",
    placeholder: "Search",
    options: ["Jury Duty", "Courthouses", "Support & Knowledge Base"],
  },
};

export const AutocompleteWithLabel = {
  args: {
    id: "autocomplete2",
    label: "Search",
    placeholder: "Search",
    options: ["Jury Duty", "Courthouses", "Support & Knowledge Base"],
  },
};

export const AutocompleteDisabled = {
  args: {
    id: "autocomplete3",
    label: "Search",
    placeholder: "Search",
    disabled: true,
    options: ["Jury Duty", "Courthouses", "Support & Knowledge Base"],
  },
};