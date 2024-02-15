import { useEffect } from "react";
import { useRef } from "react";
import Photo from "../pages/Photo";

const Modal = ({ open, onClose }) => {
  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key == "Escape") {
        onClose();
      }
    };
    document.body.addEventListener("keyup", handleEscape);

    return () => {
      document.body.removeEventListener("keyup", handleEscape);
    };
  }, []);

  return (
    <dialog className="rounded-xl p-2" ref={dialogRef}>
      <div className=" rounded-lg px-5">
        <Photo />
        <p className="text-md mt-10 text-center">Click the "Esc" on your keyboard for exit!</p>
      </div>
    </dialog>
  );
};

export default Modal;
