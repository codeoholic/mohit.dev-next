import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `nextjs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The desc of the post',
      required: true,
    },
    url: {
      type: 'string',
      description: 'url of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/nextjs/${post.url}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (post) => `${post.url}`,
    },
  },
}))

export const Book = defineDocumentType(() => ({
  name: 'Book',
  filePathPattern: `books/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The desc of the post',
      required: true,
    },
    url: {
      type: 'string',
      description: 'url of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/book/${post.url}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (post) => `${post.url}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Book],
})