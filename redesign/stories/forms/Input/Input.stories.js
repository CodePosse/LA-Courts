import { createInput } from "./Input.js";

export default {
  title: "forms/Input",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createInput({ ...args });
  },
  argTypes: {
    id: {
      name: "ID",
      control: "text",
    },
    type: {
      name: "Type",
      control: {
        type: "select",
        labels: {
          text: "Text",
          textarea: "Textarea",
        },
      },
      options: ["text", "textarea"],
    },
    label: {
      name: "Label",
      control: "text",
    },
    required: {
      name: "Required",
      control: "boolean",
    },
    showCopy: {
      name: "Show Copy",
      control: "boolean",
    },
    linkUrl: {
      name: "Link URL",
      control: "text",
    },
    linkText: {
      name: "Link Text",
      control: "text",
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
    },
    inputLeftText: {
      name: "Input Left Text",
      control: "text",
    },
    errorMessage: {
      name: "Error Message",
      control: "text",
    },
    inputRightText: {
      name: "Input Right Text",
      control: "text",
    },
  },
  args: {},
};

export const All = {
  args: {
    id: "input",
    type: "text",
    label: "Label",
    required: true,
    linkUrl: "https://example.com",
    linkText: "Link",
    placeholder: "Placeholder",
    inputLeftText: "Help Text",
    errorMessage: "Validation message",
    inputRightText: "0/240",
    showCopy: true,
  },
};

export const SimpleTextInput = {
  args: {
    id: "simple-text-input",
    type: "text",
    label: "Simple Text Input",
    required: false,
    placeholder: "Enter text here",
    showCopy: false,
  },
};

export const TextareaWithHelp = {
  args: {
    id: "textarea-help",
    type: "textarea",
    label: "Textarea with Help",
    required: true,
    placeholder: "Type your message here...",
    inputLeftText: "This is a help text.",
    showCopy: true,
  },
};

export const RequiredWithError = {
  args: {
    id: "required-error",
    type: "text",
    label: "Required Input",
    required: true,
    placeholder: "This field is required",
    errorMessage: "This field cannot be empty.",
    showCopy: false,
  },
};

export const InputWithLink = {
  args: {
    id: "input-link",
    type: "text",
    label: "Input with Link",
    required: false,
    linkUrl: "https://example.com",
    linkText: "Learn more",
    placeholder: "Search here...",
    showCopy: true,
  },
};

export const TextInputWithRightText = {
  args: {
    id: "input-right-text",
    type: "text",
    label: "Input with Right Text",
    required: false,
    placeholder: "Enter a value",
    inputRightText: "Characters left: 100",
    showCopy: false,
  },
};

export const OptionalTextarea = {
  args: {
    id: "optional-textarea",
    type: "textarea",
    label: "Optional Textarea",
    required: false,
    placeholder: "Write your thoughts...",
    errorMessage: "Please ensure your input is valid.",
    showCopy: false,
  },
};

export const FullyConfiguredInput = {
  args: {
    id: "fully-configured",
    type: "text",
    label: "Fully Configured Input",
    required: true,
    linkUrl: "https://example.com/help",
    linkText: "Help Link",
    placeholder: "Fill this field",
    inputLeftText: "Input your information.",
    errorMessage: "There was an error with your input.",
    inputRightText: "Max 150 characters",
    showCopy: true,
  },
};
