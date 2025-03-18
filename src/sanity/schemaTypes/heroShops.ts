import { Rule } from "@sanity/types";

const heroShops = {
  name: "heroShops",
  title: "Hero Shops",
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
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        {
          type: "object",
          name: "slide",
          fields: [
            {
              name: "images",
              title: "Images",
              type: "array",
              of: [
                {
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
              ],
              validation: (Rule: Rule) =>
                Rule.required()
                  .min(3)
                  .max(3)
                  .error("Each slide must have exactly 3 images"),
            },
          ],
        },
      ],
      validation: (Rule: Rule) =>
        Rule.required().min(1).error("At least one slide is required"),
    },
  ],
};

export default heroShops;
