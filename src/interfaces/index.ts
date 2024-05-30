import { Dispatch, SetStateAction } from "react";

export type ISetState<T> = Dispatch<SetStateAction<T>>;

export interface IActionButtonProps {
  id: string;
  handleDelete: (id: string) => void;
  loading: boolean;
  open: boolean;
  setOpen: ISetState<boolean>;
}
