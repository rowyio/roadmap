import { Link } from "@remix-run/react";
import type { RoadmapItem } from "~/models/RoadmapItem";
import type { Vote } from "~/models/Vote";
import { IconClipboardList, IconMessage } from "../svg";
import StatusBadge from "../ui/status-badge";
import VoteButtons from "./vote-buttons";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const Item = ({ item, vote }: { item: RoadmapItem; vote?: Vote }) => {
  const score =
    item.votesSummary.Yes -
    item.votesSummary.Meh +
    2 * item.votesSummary.Urgent;
  return (
    <div className="w-full overflow-hidden border-b-2 border-b-base-200 px-2 py-4 hover:bg-base-200 gap-1 md:gap-2 justify-between flex flex-row ">
      <VoteButtons item={item} activeVote={vote} />
      <div className="divider divider-horizontal m-0"></div>
      <div className="w-full overflow-hidden gap-1 md:gap-2 flex flex-col md:flex-row justify-between">
        <Link
          to={`/roadmap/${item.id}/votes`}
          state={item}
          className="flex flex-col w-full"
        >
          <div className="text-xl leading-7">
            <div className="inline-flex">
              {item.status && <StatusBadge status={item.status} />}
            </div>
            <div className="inline-flex my-2 font-semibold text-lg leading-6">{item.feature}</div>
          </div>
          <div className="font-light text-sm">{item.description}</div>
          <div className="mt-auto text-sm pt-2">
            {item.targetRelease && (
              <div className="font-light">
                Target Release:
                <span className="inline-flex px-2 py-1 mx-1 rounded-lg bg-base-300 text-sm font-normal">
                  {dayjs(item.targetRelease).format("MMMM YYYY")}
                </span>
              </div>
            )}
          </div>
        </Link>
        <div className="divider divider-horizontal m-0"></div>
        <ul className="menu menu-compact bg-inherit rounded-box gap-1 items-center p-0 flex-row md:flex-col justify-between md:justify-start">
          <div
            className="tooltip tooltip-right md:tooltip-left"
            data-tip="Votes Summary"
          >
            <li className="disabled">
              <span
                className="block disabled text-center cursor-default w-14 h-10 color-black"
                style={{ color: "inherit" }}
              >
                {score !== 0 && score > 0 && "+"}
                {score}
              </span>
            </li>
          </div>
          <div className="tooltip tooltip-left" data-tip="Comments">
            <li>
              <Link to={`/roadmap/${item.id}/votes`} state={item}>
                <IconMessage />
              </Link>
            </li>
          </div>
          <div className="tooltip tooltip-left" data-tip="Timelog">
            <li>
              <Link to={`/roadmap/${item.id}/timelog`} state={item}>
                <IconClipboardList />
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Item;
