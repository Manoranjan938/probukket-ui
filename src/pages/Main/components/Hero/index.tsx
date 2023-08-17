import { type ReactElement } from "react";

import image from "src/assets/imgs/home-hero.jpg";

import "./style.css";
import Button from "src/components/Button";

const Hero = (): ReactElement => {
  return (
    <section className="container section hero_section">
      <div className="hero_content_section">
        <h1>Make each day your masterpiece</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          illo aut debitis! Enim nemo nostrum ex, modi labore laboriosam fugit?
        </p>
        <div className="button-group">
          <Button title="Get Started" classes="small-btn blu-btn" />
          <Button title="Start for free" classes="small-btn gray-btn" />
        </div>
      </div>
      <div className="hero_image_section">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Hero;
