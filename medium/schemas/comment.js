export default {
  name: "comment",
  title: "comment",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "approved",
      title: "Approved",
      type: "boolean",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "comment",
      title: "Comment",
      type: "string",
    },
    {
      name: "post",
      title: "Post",
      type: "reference",
      to: { type: "post" },
    },
  ],
};
