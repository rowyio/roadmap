import type { RoadmapItem } from "~/models/RoadmapItem";
import type { UserVote } from "~/models/UserVote";
import type { Vote } from "~/models/Vote";
import { IconEmptyClipboard } from "../svg";
import Item from "./item";

const Items = ({
  items,
  userVotes,
}: {
  items: RoadmapItem[];
  userVotes: UserVote[];
}) => {
  const userVoteHash =
    userVotes &&
    userVotes.reduce((hash: { [key: string]: Vote }, userVote: UserVote) => {
      hash[userVote.itemId] ||= userVote.vote;
      return hash;
    }, {});
  return (
    <div className="flex flex-col">
      {items.length > 0 ? (
        items.map((item: any) => (
          <Item
            key={item.id}
            item={item}
            vote={userVoteHash && userVoteHash[item.id]}
          />
        ))
      ) : (
        <div className="flex flex-col justify-center items-center gap-5 p-10 text-base-content">
          <IconEmptyClipboard className="w-12 h-12" />
          <span className="text-xl font-light">
            There's nothing to show here!
          </span>
        </div>
      )}
    </div>
  );
};

export default Items;
