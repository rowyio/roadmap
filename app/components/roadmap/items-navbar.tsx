import { useSubmit } from "@remix-run/react";

const ItemsNavbar = ({
  activeStatus,
  statusOptions,
  sortBy,
  handleSortByChange,
}: any) => {
  const submit = useSubmit();
  return (
    <div className="navbar bg-inherit px-2 pb-0 border-b-2 border-b-base-200 rounded-b-none md:rounded-lg md:rounded-b-none">
      <div className="flex">
        <ul className="menu menu-horizontal">
          <li tabIndex={0} className="md:hidden">
            <span>
              <span className="border-b-2 border-b-primary">
                {activeStatus}
              </span>
            </span>
            <ul className="bg-base-200 menu-compact z-10 shadow-xl">
              {statusOptions.map((status: string) => (
                <li
                  key={status}
                  className={`${
                    status === activeStatus ? "border-l-4 border-l-primary" : ""
                  }`}
                  onClick={() =>
                    status === "All"
                    ? submit(null, { action: "/roadmap" })
                    : submit({ status }, { action: "/roadmap" })
                  }
                >
                  <span className="px-2">{status}</span>
                </li>
              ))}
            </ul>
          </li>
          {statusOptions.map((status: string) => (
            <li
              key={status}
              className="hidden md:inline-block rounded-lg"
              onClick={() =>
                status === "All"
                  ? submit(null, { action: "/roadmap" })
                  : submit({ status }, { action: "/roadmap" })
              }
            >
              <span>
                <span
                  className={`px-2 ${
                    status === activeStatus
                      ? "border-b-2 border-b-primary"
                      : " "
                  }`}
                >
                  {status}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-auto">
        <div className="tooltip tooltip-top" data-tip="Sort by">
          <ul className="menu menu-horizontal">
            <li tabIndex={0}>
              <span>
                <span className="border-b-2 border-b-primary">{sortBy}</span>
              </span>
              <ul className="bg-base-200 menu-compact z-10 shadow-xl">
                <li
                  className={`${
                    sortBy === "Most Recent"
                      ? "border-l-4 border-l-primary"
                      : ""
                  }`}
                >
                  <button onClick={() => handleSortByChange("Most Recent")}>
                    Most Recent
                  </button>
                </li>
                <li
                  className={`${
                    sortBy === "Most Voted" ? "border-l-4 border-l-primary" : ""
                  }`}
                >
                  <button onClick={() => handleSortByChange("Most Voted")}>
                    Most Voted
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemsNavbar;
