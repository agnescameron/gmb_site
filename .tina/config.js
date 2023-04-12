import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "7d7b633d-cc5b-4d55-89f9-6acba1bcae9c", // Get this from tina.io
  token: "f3da1744501c7a3ba478881986397c7f5e465f80", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages-en",
        name: "pages_en",
        path: "_pages/en",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            description: "Page title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "ref",
            label: "Reference",
            description: "This links together english and spanish versions of the same page -- make sure it's the same for the pages you want to be linked + unique otherwise",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "layout",
            required: true,
            label: "Layout",
            options: [
              {
                value: 'main',
                label: 'Default',
              },
            ],
          },
        ],
      },
      {
        label: "Campaigns-en",
        name: "campaigns_en",
        path: "_campaigns/en",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            description: "Page title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "ref",
            label: "Reference",
            description: "This links together english and spanish versions of the same page -- make sure it's the same for the pages you want to be linked + unique otherwise",
          },
          {
            type: 'image',
            name: 'img',
            label: 'Cover image',
            description: 'cover image for campaign',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "layout",
            required: true,
            label: "Layout",
            options: [
              {
                value: 'main',
                label: 'Default',
              },
            ],
          },
        ],
      },
      {
        label: "News-en",
        name: "news_en",
        path: "_news/en",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            description: "Page title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            description: "date of publication",
          },
          {
            type: "string",
            name: "ref",
            label: "Reference",
            description: "This links together english and spanish versions of the same page -- make sure it's the same for the pages you want to be linked + unique otherwise",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "layout",
            required: true,
            label: "Layout",
            options: [
              {
                value: 'main',
                label: 'Default',
              },
            ],
          },
        ],
      },
      {
        label: "Pages-es",
        name: "pages_es",
        path: "_pages/es",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            description: "Page title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "ref",
            label: "Reference",
            description: "This links together english and spanish versions of the same page -- make sure it's the same for the pages you want to be linked + unique otherwise",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "layout",
            required: true,
            label: "Layout",
            options: [
              {
                value: 'main',
                label: 'Default',
              },
            ],
          },
        ],
      },
      {
        label: "Campaigns-es",
        name: "campaigns_es",
        path: "_campaigns/es",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            description: "Page title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "ref",
            label: "Reference",
            description: "This links together english and spanish versions of the same page -- make sure it's the same for the pages you want to be linked + unique otherwise",
          },
          {
            type: 'image',
            label: 'Cover image',
            name: 'img',
            description: 'cover image for campaign',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "layout",
            required: true,
            label: "Layout",
            options: [
              {
                value: 'main',
                label: 'Default',
              },
            ],
          },
        ],
      },
      {
        label: "News-es",
        name: "news_es",
        path: "_news/es",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            description: "Page title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            description: "date of publication",
          },
          {
            type: "string",
            name: "ref",
            label: "Reference",
            description: "This links together english and spanish versions of the same page -- make sure it's the same for the pages you want to be linked + unique otherwise",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "layout",
            required: true,
            label: "Layout",
            options: [
              {
                value: 'main',
                label: 'Default',
              },
            ],
          },
        ],
      },
    ],
  },
});
