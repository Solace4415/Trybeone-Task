import { NextRouter, useRouter } from "next/router";
import { PropsWithChildren, useState } from "react";
import Navbar from "../Navbar";
import CreateProductForm from "../ProductForm";

export const PageLayout = (props: PropsWithChildren) => {
  const router: NextRouter = useRouter();
  const { create } = router.query;

  return (
    <main className="flex min-h-screen justify-center">
      <div className="flex w-[80%] py-4">
        <div className="w-full">
          <Navbar />
          {create ? <CreateProductForm /> : props.children}
        </div>
      </div>
    </main>
  );
};
