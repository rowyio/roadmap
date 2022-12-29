const ViewSwitcher = ({ toggle }: any) => (
  <div
    className="tooltip tooltip-top p-0 flex items-center text-sm"
    data-tip="View Mode"
  >
    <label className="swap swap-rotate p-0 px-2">
      <input type="checkbox" onChange={toggle} />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="swap-on w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="swap-off w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    </label>
  </div>
);

export default ViewSwitcher;
