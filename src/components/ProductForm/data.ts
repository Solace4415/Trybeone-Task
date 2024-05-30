export const initialValues = {
  title: "",
  body: "",
  userId: "",
};

export const formGroups = [
  [
    { fieldName: "title", type: "text" },
    { fieldName: "userId", type: "number" },
  ],
  [{ fieldName: "body", type: "textarea" }],
];
