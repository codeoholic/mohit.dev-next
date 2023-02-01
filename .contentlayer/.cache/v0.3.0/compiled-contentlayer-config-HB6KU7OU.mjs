// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `nextjs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The desc of the post",
      required: true
    },
    url: {
      type: "string",
      description: "url of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/nextjs/${post.url}`
    },
    slugAsParams: {
      type: "string",
      resolve: (post) => `${post.url}`
    }
  }
}));
var Book = defineDocumentType(() => ({
  name: "Book",
  filePathPattern: `books/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The desc of the post",
      required: true
    },
    url: {
      type: "string",
      description: "url of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/book/${post.url}`
    },
    slugAsParams: {
      type: "string",
      resolve: (post) => `${post.url}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Book]
});
export {
  Book,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HB6KU7OU.mjs.map
