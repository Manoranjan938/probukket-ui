import { formatDistanceToNow, parseISO } from "date-fns";

interface TimeProps {
  timestamp: string;
}

const TimeAgoGen = ({ timestamp }: TimeProps): string => {
  let timeAgo = "";

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return timeAgo;
};

export default TimeAgoGen;
