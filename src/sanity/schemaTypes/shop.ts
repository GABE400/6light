import { Rule } from "@sanity/types";

const shop = {
  name: "shop",
  title: "Shop",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "id",
      title: "ID",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "hours",
      title: "Opening Hours",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "mapUrl",
      title: "Google Maps URL",
      type: "url",
    },
    {
      name: "coordinates",
      title: "Coordinates",
      type: "array",
      of: [{ type: "number" }],
      validation: (Rule: Rule) => Rule.length(2),
    },
  ],
};

export default shop;
