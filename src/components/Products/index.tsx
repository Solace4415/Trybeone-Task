import React from "react";
import Productt from "../Product";
import usePagination from "~/hook/usePagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = ({ data, mutate }: { data?: any[]; mutate: () => void }) => {
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 10,
    count: data?.length as number,
  });
  return (
    <div className="container mx-auto mt-4 p-4">
      <div className="mb-4 flex flex-col items-center justify-between gap-2 text-white md:flex-row">
        <h1 className="text-2xl font-semibold">Products</h1>

        <div className="flex items-center gap-5 md:gap-7">
          <p className="text-lg opacity-60">
            {page}/{totalPages}
          </p>
          <button
            onClick={prevPage}
            className={`  ${
              page === 1
                ? "cursor-default !opacity-50"
                : "flex items-center justify-center rounded-full hover:h-[25px] hover:w-[25px] hover:border hover:border-white hover:text-white"
            }`}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => setPage(1)}
            className={`flex items-center justify-center hover:h-[25px] hover:w-[25px] hover:rounded-full hover:border hover:border-primary hover:text-primary ${
              page === 1 && "text-primary"
            }`}
          >
            1
          </button>
          {gaps.before ? "..." : null}

          {gaps.paginationGroup.map((el) => (
            <button
              onClick={() => setPage(el)}
              key={el}
              className={`flex items-center justify-center hover:h-[25px] hover:w-[25px] hover:rounded-full hover:border hover:border-primary hover:text-primary ${
                page === el ? "text-primary" : ""
              }`}
            >
              {el}
            </button>
          ))}
          {gaps.after ? "..." : null}
          <button
            onClick={() => setPage(totalPages)}
            className={`flex items-center justify-center hover:h-[25px] hover:w-[25px] hover:rounded-full hover:border hover:border-primary hover:text-primary ${
              page === totalPages && "text-primary"
            }`}
          >
            {totalPages}
          </button>
          <button
            onClick={nextPage}
            className={`${
              page === totalPages
                ? "cursor-default !opacity-50"
                : "flex items-center justify-center rounded-full hover:h-[25px] hover:w-[25px] hover:border hover:border-white hover:text-white"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="grid gap-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {data?.slice(firstContentIndex, lastContentIndex)?.map((product) => (
          <Productt key={product?.id} product={product} mutate={mutate} />
        ))}
      </div>
    </div>
  );
};

export default Products;
