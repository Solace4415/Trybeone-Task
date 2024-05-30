import React from "react";
import Popup from "reactjs-popup";
import { LoadingSpinner } from "../Spinner";

const PopupModal = ({
  open,
  setOpen,
  handleDelete,
  id,
  loading,
}: {
  open: boolean;
  handleDelete: (id: string) => void;
  id: string;
  loading: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Popup
      open={open}
      modal
      overlayStyle={{
        background: "rgba(0, 0, 0, 0.5)",
      }}
      closeOnDocumentClick={false}
      nested
      contentStyle={{
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        border: 0,
        width: "fit-content",
        overflow: "hidden",
        height: "fit-content",
      }}
    >
      <div className="flex flex-col items-center justify-center py-6 text-black">
        <p className="mb-4 min-w-[400px] text-lg font-semibold">
          Delete Product
        </p>
        <p className="text-grey-text md-w-[350px] mb-11 text-center text-[16px]">
          Are you sure you want to delete this item?
        </p>
        <div className="flex w-full items-start justify-between gap-4 self-start px-3 md:px-12">
          <div
            className="cursor-pointer rounded bg-button px-4 py-2 font-semibold text-white outline-none transition-transform duration-200 hover:scale-105 hover:bg-[#6f7a8b]"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </div>
          <div
            className="flex cursor-pointer items-center justify-center gap-2 rounded bg-red-500 px-3 py-2 font-semibold text-white transition-transform duration-200 hover:scale-105 hover:bg-red-600"
            onClick={() => handleDelete(id)}
          >
            {loading && <LoadingSpinner />} Delete
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default PopupModal;
