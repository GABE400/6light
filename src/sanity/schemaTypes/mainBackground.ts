import { Rule } from "@sanity/types";

const mainBackground = {
  name: "mainBackground",
  title: "Main Background",
  type: "document",
  fields: [
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default mainBackground;
