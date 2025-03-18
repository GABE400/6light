import { Rule } from "@sanity/types";
import { SanityImageAssetDocument } from "@sanity/client";

interface PreviewSelection {
  title: string;
  media: SanityImageAssetDocument;
}

const product = {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare(selection: PreviewSelection) {
      const { title, media } = selection;
      return {
        title: title,
        media: media,
      };
    },
  },
};

export default product;
