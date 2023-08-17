import { type ReactElement } from "react";

import "./style.css";

import boardImg from "src/assets/imgs/boards.png";
import clockImg from "src/assets/imgs/my-clock.jpg";
import chatImg from "src/assets/imgs/chat.png";
import calenderImg from "src/assets/imgs/calender.jpg";

const Features = (): ReactElement => {
  return (
    <section className="container section features_section">
      <h2>Feature that can be easily used</h2>
      <p>
        We have features that can be easily used to manage your team, especially
        when you and your team first use it.
      </p>
      <div className="feature_cards">
        <div className="feature_card">
          <div className="feature_logo">
            <img src={boardImg} alt="" />
          </div>
          <div className="feature_content">
            <div className="title">Boards</div>
            <div className="subtitle">
              You can see information about task and project.
            </div>
          </div>
        </div>
        <div className="feature_card">
          <div className="feature_logo">
            <img src={clockImg} alt="" />
          </div>
          <div className="feature_content">
            <div className="title">Clock</div>
            <div className="subtitle">
              You can track your and your teams worked time on a task.
            </div>
          </div>
        </div>
        <div className="feature_card">
          <div className="feature_logo">
            <img src={chatImg} alt="" />
          </div>
          <div className="feature_content">
            <div className="title">Messaging</div>
            <div className="subtitle">
              You can send message from task board to team members.
            </div>
          </div>
        </div>
        <div className="feature_card">
          <div className="feature_logo">
            <img src={calenderImg} alt="" />
          </div>
          <div className="feature_content">
            <div className="title">Calender</div>
            <div className="subtitle">
              You can create and manage your calender from your task board.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
