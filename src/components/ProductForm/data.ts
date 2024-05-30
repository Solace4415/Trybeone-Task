export const initialValues = {
  title: "",
  description: "",
  userId: "",
};

export const formGroups = [
  [
    { fieldName: "title", type: "text" },
    { fieldName: "userId", type: "number" },
  ],
  [{ fieldName: "description", type: "textarea" }],
];
