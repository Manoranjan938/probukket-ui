import { type ReactElement } from "react";

import "./style.css";
import Avatarlist from "src/components/AvatarList";

const TodaysSchedules = (): ReactElement => {
  return (
    <section className="schedules">
      <div className="schedules_header">
        <h3 className="text-2xl">Some Title</h3>
        <h5 className="text-sm">Today, Apr 19 11:00am - 12:30pm</h5>
      </div>
      <div className="schedules_body">
        <Avatarlist avatarCounts={4} />
      </div>
      <div className="schedules_footer"></div>
    </section>
  );
};

export default TodaysSchedules;
