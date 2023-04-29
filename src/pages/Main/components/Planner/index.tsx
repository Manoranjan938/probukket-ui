import { type ReactElement } from "react";

import img from "src/assets/imgs/home-plan.jpg";
import Button from "src/components/Button";

import "./style.css";

const Planner = (): ReactElement => {
  return (
    <section className="container section planner_section">
      <div className="planer_image_section">
        <img src={img} alt="" />
      </div>
      <div className="planer_content_section">
        <h3>Planner</h3>
        <h2>Project planner & collaborate</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          repudiandae, nisi ut id vel quis provident itaque consequuntur
          aliquam, officia ipsum qui molestias ea, commodi numquam quisquam odio
          quidem voluptatibus.
        </p>
        <Button title="Learn more" classes="small-btn blu-btn" />
      </div>
    </section>
  );
};

export default Planner;
