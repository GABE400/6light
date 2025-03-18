import { Rule } from "@sanity/types";

const mainHero = {
  name: "mainHero",
  title: "Main Hero",
  type: "document",
  fields: [
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description:
        'The main tagline text (e.g., "Illuminating Your Brand with Cutting-Edge Printing Solutions")',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "primaryButton",
      title: "Primary Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Text",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "secondaryButton",
      title: "Secondary Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Text",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
  ],
};

export default mainHero;
