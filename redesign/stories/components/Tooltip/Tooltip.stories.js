import { createTooltip } from "./Tooltip.js";

export default {
  title: "components/Tooltip",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createTooltip({ ...args });
  },
  argTypes: {
    text: {
      name: "Text",
      control: "text",
    },
    placement: {
      name: "Placement",
      control: {
        type: "select",
        labels: {
          top: "Top",
          right: "Right",
          bottom: "Bottom",
          left: "Left",
        },
      },
      options: ["top", "right", "bottom", "left"],
    },
  },
  args: {},
};

export const TooltipTop = {
  args: {
    text: "Tooltip on top",
    placement: "top",
  },
};

export const TooltipRight = {
  args: {
    text: "Tooltip on right",
    placement: "right",
  },
};

export const TooltipBottom = {
  args: {
    text: "Tooltip on bottom",
    placement: "bottom",
  },
};

export const TooltipLeft = {
  args: {
    text: "Tooltip on left",
    placement: "left",
  },
};