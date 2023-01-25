import { useState } from "react";

const UnauthorizedDomain = ({ projectId }: any) => {
  const [open, setOpen] = useState(true);
  if (!open) {
    return null;
  }
  console.log(projectId);
  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="w-full max-w-screen-md md:mx-auto alert alert-error shadow-lg px-2 py-1 mt-1">
        <div>
          <div>
            <h3 className="font-bold">Unauthorized domain</h3>
            <div className="text-xs">
              If you are the app developer{" "}
              <a
                className="link"
                target="_blank"
                href={`https://console.firebase.google.com/u/0/project/${projectId}/authentication/settings`}
              >
                click here
              </a>{" "}
              to whitelist domain
            </div>
          </div>
        </div>

        <button
          className="btn btn-error right-0"
          onClick={() => setOpen(false)}
        >
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
    </div>
  );
};

export default UnauthorizedDomain;
