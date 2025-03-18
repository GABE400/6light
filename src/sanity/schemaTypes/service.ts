import { Rule } from "@sanity/types";

const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Name of the Lucide icon to use",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "reference", to: [{ type: "feature" }] }],
    },
    {
      name: "relatedServices",
      title: "Related Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "relatedService" }] }],
    },
    {
      name: "heroSection",
      title: "Hero Section",
      type: "reference",
      to: [{ type: "heroSection" }],
    },
  ],
};

export default service;
