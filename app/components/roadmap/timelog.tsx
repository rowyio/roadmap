import type { TimelogItem } from "~/models/TimelogItem";
import StatusBadge from "../ui/status-badge";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { IconEmptyClipboard } from "../svg";

dayjs.extend(localizedFormat);

const Timelog = ({ timelog }: { timelog: TimelogItem[] }) => {
  const generateTextDiffField = (
    before: string | null,
    after: string | null
  ) => (
    <>
      <span className="text-red-400/80 line-through">{before}</span>
      <span className="text-green-400/80 pl-1">{after}</span>
    </>
  );

  const parseChange = (field: {
    fieldKey: string;
    before: any;
    after: any;
  }) => {
    if(field.fieldKey === "item") {
      return (
        <span>
          created this feature at
          <span className="inline-flex px-2 py-1 mx-1 rounded-lg bg-base-200 text-sm">
            {dayjs(field.after.createdBy?.date).format("LL")}
          </span>
        </span>
      );
    }
    if (field.fieldKey === "status") {
      if (!field.after) {
        return (
          <span>
            removed
            <span className="inline-flex px-2 py-1 mx-1 rounded-lg bg-base-200 text-sm">
              Status
            </span>
          </span>
        );
      }
      return (
        <span>
          updated
          <span className="inline-flex px-2 py-1 mx-1 rounded-lg bg-base-200 text-sm">
            Status
          </span>
          to
          <span className="inline-flex mx-1">
            <StatusBadge status={field.after} />
          </span>
        </span>
      );
    }
    if (field.fieldKey === "feature" || field.fieldKey === "description") {
      return (
        <span>
          updated
          <span className="inline-flex px-2 py-1 mx-1 rounded-lg bg-base-200 text-sm">
            {field.fieldKey === "feature" ? "Feature" : "Description"}
          </span>
          {generateTextDiffField(field.before, field.after)}
        </span>
      );
    }
    if (field.fieldKey === "targetRelease") {
      if (!field.after) {
        return (
          <span>
            removed
            <span className="inline-flex px-2 py-1 mx-1 rounded-lg bg-base-200 text-sm">
              Target Release
            </span>
          </span>
        );
      }
      return (
        <span>
          updated
          <span className="inline-flex px-2 py-1 mx-1 rounded-lg bg-base-200 text-sm">
            Target Release
          </span>
          to
          <span className="inline-flex px-2 py-1 mx-1 rounded-lg bg-base-200 text-sm">
            {dayjs.unix(field.after._seconds).format("LL")}
          </span>
        </span>
      );
    }
    return JSON.stringify(field);
  };

  const groupByDate: { [key: string]: TimelogItem[] } = timelog.reduce(
    (hash: any, log: TimelogItem) => {
      const dateString = dayjs(log.actor.date).format("LL");
      if (hash[dateString]) {
        hash[dateString].push(log);
      } else {
        hash[dateString] = [log];
      }
      return hash;
    },
    {}
  );

  if(timelog.length < 1) {
    return (
      <div className="flex flex-col justify-center items-center gap-5 p-10 text-base-content">
        <IconEmptyClipboard className="w-12 h-12" />
        <span className="text-xl font-light">No activity yet!</span>
      </div>
    )
  }

  return (
    <div className="mt-5">
      <div className="text-xl py-2 px-1 md:pl-6">Timelog</div>
      <div className="flex flex-col relative pl-12 overflow-hidden">
        <div className="absolute w-1 left-6 h-full pt-2 pb-12">
          <div className="w-1 h-full bg-primary"></div>
          {/* Timelog Line */}
        </div>
        {Object.keys(groupByDate)
          .sort((key1, key2) => (dayjs(key1) > dayjs(key2) ? -1 : 1))
          .map((dateKey: string, index: number) => {
            return (
              <div key={`0-${index}`} className="relative mb-10 select-none">
                <div className="absolute top-2 w-5 h-5 -left-8 rounded-full bg-primary">
                  {/* Timelog dot */}
                </div>
                <div className="inline-flex px-2 py-1 -ml-1 font-bold">
                  {dateKey}
                </div>
                <div className="flex mt-2 flex-col gap-1">
                  {groupByDate[dateKey]
                    .sort((log1: TimelogItem, log2: TimelogItem) =>
                      log1.actor.date! > log2.actor.date! ? -1 : 1
                    )
                    .map((log: TimelogItem, index: number) => (
                      <div key={`1-${index}`}>
                        <span className="inline-flex py-1 mx-1 font-bold">
                          {log.actor.displayName}
                        </span>
                        {log.changedFields.map((field) => parseChange(field))}
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Timelog;
