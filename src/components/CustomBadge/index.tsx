import { type ReactElement } from "react";

import "./style.css";

interface BadgeProps {
  title: string;
  classes: string;
}

const CustomBadge = ({ title, classes }: BadgeProps): ReactElement => {
  return (
    <div className={`badge_container ${classes}`}>
      <span>{title}</span>
    </div>
  );
};

export default CustomBadge;
