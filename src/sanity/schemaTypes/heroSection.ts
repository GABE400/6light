import { Rule } from "@sanity/types";

const heroSection = {
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default heroSection;
