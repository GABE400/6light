import { Rule } from "@sanity/types";

const portfolioCategory = {
  name: "portfolioCategory",
  title: "Portfolio Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Display Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "id",
      title: "ID",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default portfolioCategory;
