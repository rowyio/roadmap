const statusColors: { [key: string]: string } = {
  Pending: "bg-warning",
  "In Progress": "bg-info",
  Testing: "bg-primary",
  Complete: "bg-success",
};

const StatusBadge = ({ status }: any) => (
  <div
    className={`select-none px-2 py-1 mr-2 rounded-lg text-white text-sm flex items-center ${
      statusColors[status] ?? "bg-primary"
    }`}
  >
    <span>{status}</span>
  </div>
);

export default StatusBadge;
