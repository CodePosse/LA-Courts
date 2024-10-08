import { createNotifications } from "./Notifications.js";

export default {
  title: "components/Notifications",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createNotifications({ ...args });
  },
  argTypes: {
    title: {
      name: "Title",
      control: "text",
    },
    body: {
      name: "Body",
      control: "text",
    },
    link: {
      name: "Link",
      control: "text",
    },
    linkText: {
      name: "Dismiss",
      control: "text",
    },
    variant: {
      name: "Variant",
      control: {
        type: "select",
        labels: {
          positive: "Positive",
          negative: "Negative",
          warning: "Warning",
        },
      },
      options: ["positive", "negative", "warning"],
    },
  },
  args: {},
};

export const Default = {
  args: {
    title: "Notification title",
    body: "Notification body",
    link: "#",
    linkText: "Dismiss",
    variant: "positive",
  },
};

export const Negative = {
  args: {
    title: "Notification title",
    body: "Notification body",
    link: "#",
    linkText: "Dismiss",
    variant: "negative",
  },
};

export const Warning = {
  args: {
    title: "Notification title",
    body: "Notification body",
    link: "#",
    linkText: "Dismiss",
    variant: "warning",
  },
};

export const BodyOnly = {
  args: {
    body: "Notification body",
    variant: "positive",
  },
};

export const WithoutLink = {
  args: {
    title: "Notification title",
    body: "Notification body",
    variant: "positive",
  },
};