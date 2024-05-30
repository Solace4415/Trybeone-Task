import { ErrorMessage, Field } from "formik";
import React from "react";

interface IProps {
  name: string;
  label?: string;
  fullWidth?: boolean;
  type?: string;
}

const InputField = ({ name, label, fullWidth, type }: IProps) => {
  return (
    <div
      className={`"mb-6 w-full px-3 md:mb-0 ${
        fullWidth ? "w-full" : "md:w-1/2"
      }`}
    >
      <label
        className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
        htmlFor={name}
      >
        {label ?? name}
      </label>
      <Field
        className="mb-1 block w-full rounded border border-gray-500 bg-transparent px-4 py-3 leading-tight text-white focus:outline-none"
        type={type}
        name={name}
        min={type === "number" ? 0 : undefined}
        rows={type === "textarea" ? 5 : undefined}
        as={type === "textarea" ? "textarea" : "input"}
        accept="image/*"
      />
      <ErrorMessage
        name={name}
        component="p"
        className="text-xs italic text-red-500"
      />
    </div>
  );
};

export default InputField;
