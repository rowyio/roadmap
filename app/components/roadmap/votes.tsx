import type { RoadmapItem } from "~/models/RoadmapItem";
import type { Vote } from "~/models/Vote";
import {
  IconChevronDown,
  IconChevronUp,
  IconEmptyClipboard,
  IconFire,
} from "../svg";
import IconUser from "../svg/icon-user";

const Votes = ({ item, votes }: { item: RoadmapItem; votes: Vote[] }) => {
  const comments = votes.filter((vote) => !!vote.comment);
  return (
    <div className="flex flex-col gap-1">
      <div className="px-1 pt-2 md:pl-6">
        {item.description}
      </div>
      {comments.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-5 p-10 text-base-content">
          <IconEmptyClipboard className="w-12 h-12" />
          <span className="text-xl font-light">No Comments Yet!</span>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="text-xl px-1 pt-2 md:pl-6">Comments</div>
          {comments.map((comment, index) => (
            <div
              key={index}
              className="flex w-full overflow-hidden border-b-2 border-b-base-300 py-4 gap-2 hover:bg-base-300 px-1 pt-2 md:pl-6"
            >
              <div className="py-1">
                <div className="flex justify-center items-center w-10 h-100/14 bg-primary text-primary-content rounded-lg relative inset-y-1/2 -translate-y-1/2">
                  {comment.vote === "Urgent" && (
                    <IconFire className="w-8 h-8 text-sm" />
                  )}
                  {comment.vote === "Yes" && <IconChevronUp className="w-8 h-8" />}
                  {comment.vote === "Meh" && (
                    <IconChevronDown className="w-8 h-8" />
                  )}
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  {comment.createdBy.photoURL ? (
                    <img src={comment.createdBy.photoURL} alt="Created by" />
                  ) : (
                    <IconUser className="w-8 h-8 m-auto relative inset-y-1/2 -translate-y-1/2" />
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-bold">{comment.createdBy.displayName}</div>
                <div>{comment.comment ?? `Voted ${comment.vote}!`}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Votes;
