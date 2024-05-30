import { NextRouter, useRouter } from "next/router";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IActionButtonProps } from "~/interfaces";
import PopupModal from "../Popup";

const ActionButtons = ({
  id,
  loading,
  open,
  setOpen,
  handleDelete,
}: IActionButtonProps) => {
  const router: NextRouter = useRouter();
  return (
    <div className="absolute inset-0 flex h-full items-center justify-center gap-4 bg-gray-800 bg-opacity-70 opacity-0 transition duration-300 hover:opacity-100">
      <FaEdit
        size={30}
        color="white"
        className="cursor-pointer transition-transform duration-200 hover:scale-110"
        onClick={(e) => {
          e.stopPropagation();
          router.push({
            pathname: `/product/${id}`,
            query: { edit: true },
          });
        }}
      />
      <MdDelete
        size={30}
        color="red"
        className="cursor-pointer transition-transform duration-200 hover:scale-110"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      />
      <PopupModal
        open={open}
        setOpen={setOpen}
        handleDelete={handleDelete}
        id={id}
        loading={loading}
      />
    </div>
  );
};

export default ActionButtons;
