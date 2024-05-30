import axios from "axios";
import { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";
import { PageLayout } from "~/components/Layout/Layout";
import PopupModal from "~/components/Popup";
import CreateProductForm from "~/components/ProductForm";
import { LoadingPage } from "~/components/Spinner";
import { useFetch } from "~/utils";

const ViewProduct: NextPage<{ id: string }> = ({ id }) => {
  const router: NextRouter = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { edit } = router.query;
  const { data, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    useFetch<any>()
  );

  if (isLoading) return <LoadingPage />;

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      router.push("/");
      toast.success("Product deleted successfully");
    } catch (error: any) {
      toast.error(error?.response?.data?.error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <PageLayout>
      <PopupModal
        open={open}
        setOpen={setOpen}
        handleDelete={handleDelete}
        id={id}
        loading={loading}
      />
      {!edit ? (
        <div className="flex items-center justify-center">
          <div className="my-8 flex w-full max-w-3xl flex-col items-center justify-center gap-5 rounded-lg bg-gray-800 p-8 shadow-lg">
            <div className="w-full">
              <Image
                className="h-[400px] w-full rounded-lg object-cover shadow-lg"
                src="/assets/Iphone.jpeg"
                alt="Product Image"
                width={500}
                height={400}
              />
            </div>
            <div className="flex flex-col text-center text-white">
              <h2 className="mb-2 text-2xl font-bold">{data?.title}</h2>
              <p className="mb-4 text-base italic opacity-80">{data?.body}</p>
              <div className="grid grid-cols-2 gap-5 text-left">
                <p>
                  <span className="font-semibold">Price:</span> $15
                </p>
                <p>
                  <span className="font-semibold">Color:</span> White
                </p>
                <p>
                  <span className="font-semibold">Generation:</span> 5th
                </p>
                <p>
                  <span className="font-semibold">Capacity:</span> 500GB
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <button
                className="focus:shadow-outline mt-5 w-fit rounded bg-button px-4 py-2 font-bold text-white transition-transform duration-200 hover:scale-105 hover:bg-[#6f7a8b] focus:outline-none"
                onClick={() => {
                  router.push({
                    pathname: `/product/${id}`,
                    query: { edit: true },
                  });
                }}
              >
                Edit
              </button>

              <button
                className="focus:shadow-outline mt-5 w-fit rounded bg-red-500 px-4 py-2 font-bold text-white transition-transform duration-200 hover:scale-105 hover:bg-red-600 focus:outline-none"
                onClick={() => setOpen(true)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <CreateProductForm data={data} />
      )}
    </PageLayout>
  );
};

export async function getStaticPaths() {
  const paths = [] as any;
  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  if (typeof id !== "string") throw new Error("no id");

  return {
    props: { id },
  };
};

export default ViewProduct;
