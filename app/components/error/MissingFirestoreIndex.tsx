import { useState } from "react";

const MissingFirestoreIndex = ({ error }: any) => {
  const [open, setOpen] = useState(true);
  if (error.code !== 9) {
    throw new Error("Something went wrong");
  }
  if (!open) {
    return null;
  }
  const link =
    error.details.match(
      /(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/
    )[0] || "";

  return (
    <div className="fixed top-0 w-full max-w-screen-md md:mx-auto alert alert-error shadow-lg px-2 py-1 mt-1">
      <div>
        <div>
          <h3 className="font-bold">Firestore index required</h3>
          <div className="text-xs">
            If you are the app developer{" "}
            <a className="link" target="_blank" href={link}>
              click here
            </a>{" "}
            to create firestore index
          </div>
        </div>
      </div>

      <button className="btn btn-error right-0" onClick={() => setOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default MissingFirestoreIndex;
