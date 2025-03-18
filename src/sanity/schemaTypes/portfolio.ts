import { Rule } from "@sanity/types";
import { SanityImageAssetDocument } from "@sanity/client";

interface PreviewProps {
  title: string | undefined;
  media: SanityImageAssetDocument | undefined;
  category: string | undefined;
}

interface PrepareReturnType {
  title: string;
  subtitle?: string;
  media?: SanityImageAssetDocument;
}

const portfolio = {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "portfolioCategory" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
            storeOriginalFilename: true,
            accept: "image/*",
          },
        },
      ],
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: "useFirstImageAsMain",
      title: "Use first image as main image",
      type: "boolean",
      initialValue: true,
      description: "The first image will be used as the main display image",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
      category: "category.name",
    },
    prepare({ title, media, category }: PreviewProps): PrepareReturnType {
      return {
        title: title || "Untitled",
        subtitle: category,
        media,
      };
    },
  },
};

export default portfolio;
