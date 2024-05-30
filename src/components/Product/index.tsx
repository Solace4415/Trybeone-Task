import { NextRouter, useRouter } from "next/router";
import React, { useState } from "react";
import ActionButtons from "../ActionButtons";
import { toast } from "react-hot-toast";
import Image from "next/image";
import axios from "axios";
import { ProductProps } from "~/interfaces";

const Product = ({
  product,
  mutate,
}: {
  product: ProductProps;
  mutate: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router: NextRouter = useRouter();

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      mutate();
      toast.success("Product deleted successfully");
    } catch (error: any) {
      toast.error(error?.response?.data?.error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <div
      key={product.id}
      className="relative h-full cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg"
      onClick={() => {
        router.push(`/product/${product.id}`);
      }}
    >
      <div className="relative">
        <Image
          src={"/assets/Iphone.jpeg"}
          alt={product?.title as string}
          width={400}
          height={400}
          className="max-h-[250px] w-full object-cover"
        />
        <ActionButtons
          open={open}
          id={product?.id as string}
          setOpen={setOpen}
          handleDelete={handleDelete}
          loading={loading}
        />
      </div>

      <div className="p-4">
        <h3 className="line-clamp-1 font-semibold text-gray-900">
          {product?.title}
        </h3>
        <p className="line-clamp-2 text-sm italic text-gray-600">
          {product?.body}
        </p>
      </div>
    </div>
  );
};

export default Product;
