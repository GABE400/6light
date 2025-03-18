import { Rule } from "@sanity/types";

const aboutUs = {
  name: "aboutUs",
  title: "About Us",
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
      name: "story",
      title: "Our Story",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "marketDescription",
      title: "Market Description",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "workDescription",
      title: "How We Work Description",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default aboutUs;
