import React from "react";
import section from "../../assets/section.png";
import img from "../../assets/img.png";

import "./Create.css";

const Create = () => {
  return (
    <div className="create">
      <div className="left-c">
        <div>
          <div>
            <img src={section} alt="" />
          </div>
          <div>
            <span className="medium-t">Choose your sections</span>
            <span className="small-t">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </div>
        </div>

        <div>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <span className="medium-t">Add the images and text you need</span>
            <span className="small-t">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </div>
        </div>
      </div>
      <div className="right-c">
        <span className="title">Make your site better with Opus</span>
        <div>
          <span className="small-t">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non
            lectus dapibus, a pulvinar mauris aliquam.
          </span>
          <div className="btn btn-c">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default Create;
