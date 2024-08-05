import React from "react";
import "./Footer.scss";
import { FaInstagram } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="childFooter">
        <div className="allFooters">
          <div className="footer_1">
            <div className="footerAbout">
              <h2>n&P-Sutra</h2>
              <p>
                Style goes beyond the runway - it’s part of daily life. What we
                wear can affect how we feel and how others perceive us. Our
               <span> embroidered tees </span> offer more than just fashion they uplift your
                mood and affect how others see you. Embrace our tees for a boost
                in both style and well-being...
              </p>
            </div>
          </div>
          <div className="footer_2">
            <div className="footerServices">
              <h2>Customer Care</h2>
              <ul>
                <li>Shipping & Delivery</li>
                <li>Returns</li>
                <li>Faq's</li>
              </ul>
            </div>
          </div>
          <div className="footer_3">
            <div className="footerContact">
              <h2>Join Us</h2>
              <div className="contactChild">
                <div className="subContact">
                  <FaInstagram />
                  <p>
                    <a>Instagram</a>
                  </p>
                </div>

                <div className="subContact">
                  <FaWhatsapp />
                  <p>
                    <a>Start a Chat</a>
                  </p>
                </div>

                <div className="subContact">
                  <IoCallOutline />
                  <p>
                    <a href="tel:+918186838735">+91 8186838735</a>
                  </p>
                </div>
                <div className="subContact">
                  <CiMail />
                  <p>
                    <a>enquiries@y-solutions.in</a>
                  </p>
                </div>

                {/* <div className="subContact">
            <FiTwitter/>
                <p><a>Twitter</a></p>
            </div> */}
              </div>
            </div>
          </div>
          <div className="footer_4">
            <div className="quickLinks">
              <h2>Quick Links</h2>
              <div className="allLinks">
                <p>
                  <a href="#Home">Home</a>
                </p>
                <p>
                  <a href="#About">Fabric</a>
                </p>
                <p>
                  <a href="#Services">Loyalty</a>
                </p>
                <p>
                  <a href="#Project">Pacakging</a>
                </p>
                <p>
                  <a href="#Testimonials">Our Mission</a>
                </p>
                <p>
                  <a href="#Contact">Code Of Conduct</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
