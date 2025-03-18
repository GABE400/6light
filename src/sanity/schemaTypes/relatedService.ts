import { Rule } from "@sanity/types";

const relatedService = {
  name: "relatedService",
  title: "Related Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "iconName",
      title: "Icon Name",
      type: "string",
      description: "Name of the Lucide icon to use",
    },
  ],
};

export default relatedService;
