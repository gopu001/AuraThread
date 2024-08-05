import React from "react";
import "./Fabric.scss";
import Scrolling from "../Scrolling/Scrolling";
import Menu from "../Menu/Menu";
import fabricImg from "../../assets/Cards/fabric.jpeg";

function Fabric() {
  return (
    <div className="fabricMainContainer">
      <div className="fabricChildContainer">
        <div className="fabricImg">
          <img src={fabricImg} alt="" />
        </div>
        <div className="fabricContent">
          <p id="intro">
            At <span>nP-Sutra</span>, we believe in creating products that not only look good but also feel incredible. That's why all our
            t-shirts, hoodies, and sweatshirts are crafted from 100% pure
            cotton.
          </p>
          <div className="fabricDetails">
            <div className="fabricSection">
              <h2>Why 100% Pure Cotton?</h2>
              <div className="fabricSubSection">
                <p>
                  Cotton is renowned for its softness and breathability,
                  ensuring you stay comfortable all day long. Its natural fibers
                  allow air to circulate, keeping you cool and fresh. Pure
                  cotton is also strong and resilient, standing up to the wear
                  and tear of everyday life while maintaining its quality wash
                  after wash. Additionally, cotton is hypoallergenic and gentle
                  on the skin, making it perfect for those with sensitive skin
                  or allergies.
                </p>
              </div>
            </div>
            <div className="fabricSection">
              <h2>The Premium Feel of Heavy Material</h2>
              <div className="fabricSubSection">
                <p>
                  In our quest to deliver a truly premium product, we've chosen
                  to use a heavier weight material. This decision isn't just
                  about adding substance to our clothing; it's about elevating
                  the entire wearing experience. The heavier fabric gives our
                  t-shirts, hoodies, and sweatshirts a more structured and
                  refined look, ensuring they drape beautifully on any body
                  type. The substantial feel of the material exudes luxury,
                  making each piece a statement of quality and craftsmanship.
                  Moreover, heavier fabric withstands the test of time, ensuring
                  that your favorite pieces remain part of your wardrobe for
                  years to come.
                </p>
              </div>
            </div>
          </div>
          <p>
            By combining the natural benefits of 100% pure cotton with the
            premium qualities of a heavier material, we offer clothing that
            feels as good as it looks. Experience the difference with{" "}
            <span>nP-Sutra,</span> where quality meets style.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fabric;
