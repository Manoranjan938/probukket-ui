import { type ReactElement } from "react";
import Button from "src/components/Button";

import image from "src/assets/imgs/quality.png";

import "./style.css";

const QualityOverQuantity = (): ReactElement => {
  return (
    <section className="container quantity_section">
      <div className="quantity_image_section">
        <img src={image} alt="" />
      </div>
      <div className="quantity_content_section">
        <h3>Quality over quantity</h3>
        <h2>Improve your quality with us</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
          laboriosam fugiat quo velit est officiis debitis vel ullam totam autem
          fuga officia amet, praesentium aperiam!
        </p>
        <Button title="Learn more" classes="small-btn grn-btn" />
      </div>
    </section>
  );
};

export default QualityOverQuantity;
