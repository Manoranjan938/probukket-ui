import { type ReactElement } from "react";
import PropTypes from "prop-types";

import "./style.css";

import img0 from "src/assets/avatars/avatar1.png";

interface AvatartListProps {
  avatarCounts: number;
  data: any[];
}

const Avatarlist = ({ avatarCounts, data }: AvatartListProps): ReactElement => {
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
        {data.length > avatarCounts ? (
          <button className="avtar plus">+{data.length - avatarCounts}</button>
        ) : null}
      </div>
    </div>
  );
};

Avatarlist.propTypes = {
  avatarCounts: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

Avatarlist.defaultProps = {
  avatarCounts: 0,
  data: [],
};

export default Avatarlist;
