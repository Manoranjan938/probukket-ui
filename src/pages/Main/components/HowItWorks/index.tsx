import { type ReactElement } from "react";

import image from "src/assets/imgs/home-features.png";

import "./style.css";
import { FiCheckCircle } from "react-icons/fi";

const HowWorks = (): ReactElement => {
  return (
    <section className="section container works_section">
      <div className="works_content_section">
        <h3>Planner</h3>
        <h2>Project planner & collaborate</h2>
        <div className="it_works_cards">
          <div className="it_works_card">
            <div className="works_icon">
              <FiCheckCircle />
            </div>
            <div className="works_centent">
              <h3>Sign up</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                itaque sequi praesentium.
              </p>
            </div>
          </div>
          <div className="it_works_card">
            <div className="works_icon">
              <FiCheckCircle />
            </div>
            <div className="works_centent">
              <h3>Create project</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="works_image_section">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default HowWorks;
