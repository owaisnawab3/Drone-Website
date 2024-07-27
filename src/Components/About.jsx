import React from "react";
import Drone_img from "../assets/images/Drone_team.png";

function About() {
  return (
    <>
      <section className="About" id="about">
        <div className="About-img">
          <img src={Drone_img} alt="" className="updown-animation" />
        </div>

        <div className="About-text">
          <h1>
            Our team always available <br /> for drone videography
          </h1>
          <p>
            There is a really good chance that as soon as you read the <br />{" "}
            above sentences, you knew the exact brand associated <br /> with
            each: Nike, Disney and M&M's, respectively. Most <br /> everyone
            recognizes them instantly.
          </p>
          <div className="button">
            <a href="#" className="btn2">
              More Details
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
