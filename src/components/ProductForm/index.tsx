import { Formik, Form } from "formik";
import Input from "../FormFields/InputField";
import { formGroups, initialValues } from "./data";
import axios from "axios";
import { toast } from "react-hot-toast";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { LoadingSpinner } from "../Spinner";

function CreateProductForm({ data }: { data?: any }) {
  const [isLoading, setIsLoading] = useState(false);
  const router: NextRouter = useRouter();
  const { edit } = router.query;

  // handle Submit
  const handleSubmit = async (values: typeof initialValues) => {
    setIsLoading(true);
    try {
      edit
        ? await axios.put(
            `https://jsonplaceholder.typicode.com/posts/${data?.id}`,
            {
              values,
            }
          )
        : await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
            values,
          });

      router.push("/");
      toast.success(`Item ${edit ? "Updated" : "Created"} successfully`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ ...initialValues, ...data }}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {() => (
        <Form className="mx-auto w-full max-w-lg py-12">
          {formGroups?.map((item, index) => (
            <div
              className="-mx-3 mb-6 flex flex-wrap gap-5 md:gap-0"
              key={index}
            >
              {item?.map((input, i) => (
                <Input
                  name={input?.fieldName}
                  label={input?.fieldName}
                  key={i}
                  type={input?.type}
                  fullWidth={input.fieldName === "body"}
                />
              ))}
            </div>
          ))}
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <button
                className="focus:shadow-outline flex w-full items-center justify-center gap-2 rounded bg-button px-4 py-3 font-bold text-white transition-transform duration-200 hover:scale-105 hover:bg-[#6f7a8b]  focus:outline-none"
                type="submit"
                disabled={isLoading}
              >
                {isLoading && (
                  <div className="flex items-center justify-center">
                    <LoadingSpinner size={20} />
                  </div>
                )}
                {edit ? "Update Product" : "Create Product"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default CreateProductForm;
