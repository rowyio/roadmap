import { Link } from "react-router-dom";
import type { RoadmapItem } from "~/models/RoadmapItem";
import { IconArrowLeft } from "../svg/index";

const ItemNavbar = ({ item }: { item: RoadmapItem }) => {
  return (
    <div className="navbar rounded-lg border-b-2 border-b-base-200 rounded-b-none pb-0">
      <ul className="menu menu-horizontal rounded-box gap-1 w-full items-start">
        <li className="rounded-l-lg">
          <Link to="/roadmap">
            <IconArrowLeft />
          </Link>
        </li>
        <div className="text-xl mt-2">{item.feature}</div>
      </ul>
    </div>
  );
};

export default ItemNavbar;
