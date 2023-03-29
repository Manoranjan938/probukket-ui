import PropTypes from "prop-types";

import "./style.css";

interface SkeletonProps {
  classes: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Skeleton = ({ classes }: SkeletonProps) => {
  const classNames = `skeleton ${classes} animate-pulse`;
  return <div className={classNames} />;
};

Skeleton.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default Skeleton;
