import { Rule } from "@sanity/types";

const gridSlideshow = {
  name: "gridSlideshow",
  title: "Grid Slideshow",
  type: "document",
  fields: [
    {
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "topImages",
              title: "Top Row Images",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "image",
                      title: "Image",
                      type: "image",
                      options: {
                        hotspot: true,
                      },
                    },
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                      validation: (Rule: Rule) => Rule.required(),
                    },
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                  ],
                },
              ],
              validation: (Rule: Rule) => Rule.required().length(3),
            },
            {
              name: "bottomImages",
              title: "Bottom Row Images",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "image",
                      title: "Image",
                      type: "image",
                      options: {
                        hotspot: true,
                      },
                    },
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                      validation: (Rule: Rule) => Rule.required(),
                    },
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                  ],
                },
              ],
              validation: (Rule: Rule) => Rule.required().length(3),
            },
          ],
        },
      ],
    },
  ],
};

export default gridSlideshow;
