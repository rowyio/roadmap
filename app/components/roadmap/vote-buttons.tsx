import { useFetcher, useOutletContext } from "@remix-run/react";
import type { ReactElement } from "react";
import { useState } from "react";
import type { RoadmapItem } from "~/models/RoadmapItem";
import type { User } from "~/models/User";
import type { Vote } from "~/models/Vote";
import { LoginButton } from "../auth";
import { IconChevronDown, IconChevronUp, IconFire } from "../svg";
import Spinner from "../ui/spinner";

const VoteButtons = ({
  item,
  activeVote,
}: {
  item: RoadmapItem;
  activeVote?: Vote;
}) => {
  const fetcher = useFetcher();
  const busy = fetcher.state !== "idle";

  const clickHandler = (voteType: string) => (comment: string | undefined) => {
    const formData: any = { itemId: item.id, vote: voteType };
    comment && (formData.comment = comment);
    return fetcher.submit(formData, {
      action: `/roadmap/${item.id}/votes`,
      method: "post",
    });
  };

  return (
    <ul className="menu menu-compact bg-inherit rounded-box gap-1 items-center p-0 flex-col justify-start relative">
      {busy && (
        <div className="absolute inset-0 bg-base-300/30 z-50 rounded-lg">
          <Spinner />
        </div>
      )}
      <VoteButton
        item={item}
        voteType={"Urgent"}
        isVoted={activeVote?.vote === "Urgent"}
        busy={busy}
        icon={<IconFire />}
        handleClick={clickHandler("Urgent")}
      />
      <VoteButton
        item={item}
        voteType={"Yes"}
        isVoted={activeVote?.vote === "Yes"}
        busy={busy}
        icon={<IconChevronUp />}
        handleClick={clickHandler("Yes")}
      />
      <VoteButton
        item={item}
        voteType={"Meh"}
        isVoted={activeVote?.vote === "Meh"}
        busy={busy}
        icon={<IconChevronDown />}
        handleClick={clickHandler("Meh")}
      />
    </ul>
  );
};

const VoteButton = ({
  item,
  voteType,
  isVoted,
  busy,
  icon,
  handleClick,
}: {
  item: RoadmapItem;
  voteType: string;
  isVoted: boolean;
  busy: boolean;
  icon: ReactElement;
  handleClick: any;
}) => (
  <div
    className="tooltip tooltip-right"
    data-tip={isVoted ? "Unvote" : voteType}
  >
    <li
      className={`rounded-lg ${busy ? "disabled" : ""} ${isVoted ? "bg-primary hover:bg-primary-focus text-primary-content" : ""
        }`}
    >
      {isVoted ? (
        <button disabled={busy} onClick={handleClick}>
          {icon}
        </button>
      ) : (
        <VoteModalButton
          item={item}
          icon={icon}
          voteType={voteType}
          handleClick={handleClick}
        />
      )}
    </li>
  </div>
);

const VoteModalButton = ({
  item,
  voteType,
  icon,
  handleClick,
}: {
  item: RoadmapItem;
  voteType: string;
  icon: ReactElement;
  handleClick: any;
}) => {
  const [commentInput, setCommentInput] = useState("");
  const { currentUser }: { currentUser: User } = useOutletContext();

  return (
    <>
      <label
        htmlFor={`vote-form-${item.id}-${voteType}`}
        className="modal-button px-1 md:px-4"
      >
        {icon}
      </label>

      <input
        type="checkbox"
        id={`vote-form-${item.id}-${voteType}`}
        className="modal-toggle"
      />
      <div className="modal text-left bg-base-300/80 p-0">
        <div className="modal-box rounded-lg">
          <label
            htmlFor={`vote-form-${item.id}-${voteType}`}
            className="btn btn-sm bg-error/80 hover:bg-error/100 border-none btn-circle block ml-auto text-white leading-8"
          >
            ✕
          </label>
          {!currentUser ? (
            <div className="flex flex-col gap-2 items-center justify-evenly h-48">
              <div className="text-2xl">Only signed in users can vote!</div>
              <LoginButton />
            </div>
          ) : (
            <>
              <h3 className="font-bold text-lg mb-2">{item.feature}</h3>
              <div className="form-control w-full">
                <label className="label -mb-2">
                  <span className="label-text">Comment</span>
                  <span className="label-text-alt">Optional</span>
                </label>
                <input
                  type="text"
                  placeholder="Quick feedback on how this will help you or not"
                  className="input input-bordered w-full focus:outline-none focus:border-primary"
                  value={commentInput}
                  onChange={(event) =>
                    setCommentInput(event.currentTarget.value)
                  }
                />
              </div>
              <div className="modal-action">
                <label
                  htmlFor={`vote-form-${item.id}-${voteType}`}
                  className={`btn ${voteType === "Meh" ? "btn-error" : "btn-primary"
                    }`}
                  onClick={() => handleClick(commentInput)}
                >
                  <span className="mr-1">Vote</span>
                  {icon}
                </label>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default VoteButtons;
