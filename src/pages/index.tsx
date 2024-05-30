import { type NextPage } from "next";
import { PageLayout } from "~/components/Layout/Layout";
import Products from "~/components/Products";
import useSWR from "swr";
import { useFetch } from "~/utils";
import { LoadingPage } from "~/components/Spinner";
import usePagination from "~/hook/usePagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Home: NextPage = () => {
  const { data, isLoading, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    useFetch<any>()
  );

 

  if (isLoading)
    return (
      <div className="flex grow">
        <LoadingPage />
      </div>
    );

  return (
    
    <PageLayout>
      {data?.length === 0 ? (
        <p className="text-center text-white">No Product Found</p>
      ) : (
        <>
          <Products
            data={data}
            mutate={mutate}
          />
        </>
      )}
    </PageLayout>
  );
};

export default Home;
