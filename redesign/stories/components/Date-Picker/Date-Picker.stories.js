import { createDatePicker } from "./Date-Picker.js";

export default {
  title: "components/Date Picker",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createDatePicker({ ...args });
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
    format: {
      name: "Date Format",
      control: "text",
    },
    highlightToday: {
      name: "Highlight Today",
      control: "boolean",
    },
  },
  args: {},
};

export const datePicker = {
  args: {
    id: "date-picker",
    label: "Date",
    placeholder: "",
    format: "d M yyyy",
    highlightToday: false,
  },
};