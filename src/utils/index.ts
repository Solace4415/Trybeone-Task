import { Fetcher } from "swr";

export type FetcherType<T> = Fetcher<T, string>;

export type FetcherError = Error & { info: any; status: number };

export const useFetch = <T>() => {
  const fetcher: FetcherType<T> = async (...args) => {
    const res = await fetch(...args);
    if (!res.ok) {
      let error: FetcherError, errorInfo;
      try {
        errorInfo = await res.json();
        error = new Error(errorInfo.message) as FetcherError;
        error.message = errorInfo.message;
      } catch (e) {
        error = new Error(
          "An error occurred while fetching the data."
        ) as FetcherError;
        error.message = "An error occurred while fetching the data.";
      }
      error.status = res.status;
      throw error;
    }
    return await res.json();
  };
  return fetcher;
};
