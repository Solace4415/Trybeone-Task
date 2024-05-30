import { Dispatch, SetStateAction } from "react";

export type ProductProps = {
  id?: string;
  userId?: string;
  body?: string;
  title?: string;
};

export type Gap = {
  before: boolean;
  paginationGroup: number[];
  after: boolean;
};

type UsePaginationProps = {
  contentPerPage: number;
  count: number;
};

type UsePaginationReturn = {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  firstContentIndex: number;
  lastContentIndex: number;
  gaps: { before: boolean; paginationGroup: number[]; after: boolean };
};

export type UsePagination = (
  UsePaginationProps: UsePaginationProps
) => UsePaginationReturn;

export type ISetState<T> = Dispatch<SetStateAction<T>>;

export interface IActionButtonProps {
  id: string;
  handleDelete: (id: string) => void;
  loading: boolean;
  open: boolean;
  setOpen: ISetState<boolean>;
}
