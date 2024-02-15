import React from "react";
import useImage from "../hooks/useImage";

function Photo() {
  const { videoref, takePhoto, imgURL, download } = useImage();

  return (
    <div className="max-w-[400px] flex justify-between pt-5 rounded mx-auto">
      <div className=" w-[400px]  rounded relative h-[350px]">
        {imgURL ? (
          <img src={imgURL} className="rounded" width={420} height={370} />
        ) : (
          <video className="rounded" ref={videoref}></video>
        )}
        <div className="flex gap-2 items-center absolute top-[95%] left-[32%]">
          <button
            onClick={takePhoto}
            className="text-white bg-indigo-500 px-3 py-1 rounded-md" 
          >
           Take
          </button>
          {imgURL && (
            <button
              onClick={download}
              className="text-white bg-indigo-500 px-3 py-1 rounded-md ml-5"
            >
              Save
            </button>
          )}
        </div>
      </div>
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default Photo;
