import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="p-5 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-center">Please click the button "Click" for open the camera</h2>
        <Modal open={open} onClose={() => setOpen(false)} />
        <button className="bg-indigo-500 py-2 px-6 mt-3 rounded-md hover:opacity-75 text-white text-lg font-bold" onClick={() => setOpen(true)}>Camera</button>
      </div>
    </>
  );
}

export default App;