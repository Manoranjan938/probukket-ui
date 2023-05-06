import { type ReactElement } from "react";

import "./style.css";

import img0 from "src/assets/avatars/avatar1.png";

interface AvatartListProps {
  avatarCounts?: number;
}

const Avatarlist = ({ avatarCounts = 0 }: AvatartListProps): ReactElement => {
  let content = null;
  if (avatarCounts > 0) {
    content = [...Array(avatarCounts).keys()].map((i: number) => (
      <div className="avtar" data-content="Something" key={i}>
        <img src={img0} alt="" />
      </div>
    ));
  }

  return (
    <div className="widget">
      <div className="avatar-list">
        {content}
        <button className="avtar plus">+2</button>
      </div>
    </div>
  );
};

export default Avatarlist;
