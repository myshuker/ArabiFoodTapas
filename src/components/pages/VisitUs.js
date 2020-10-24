import React from "react";
import Map from "./Map.js";
import mobile from "../../assets/icons/phone.png";
import email from "../../assets/icons/email.png";
import address from "../../assets/icons/location-pin.png";
import facebook from "../../assets/icons/facebook-blue.png";
import time from "../../assets/icons/time.png";
import cvr from "../../assets/icons/cvr.png";
import reemRestaurant1 from "../../assets/images/ReemRestaurant1.jpg";


function VisitUs() {
  return (
    <section className="visitUs">
      <Map />

      <h2>Kontakt os</h2>

      <div className="contact-container">
        <div className="cont">
          <div>
            <div className="contact-info">
              <img src={`${email}`} alt="" />
              <a href="mailto:reemmsh1223@gmail.com?subject=Inquiry about products">
                <p>reemmsh1223@gmail.com</p>
              </a>
            </div>
            <div className="contact-info">
              <img src={`${address}`} alt="" />
              <a href="https://g.page/VaerftetsMadmarked?share" target="_blank" rel="noopener noreferrer">
                <p>Ny Kronborgvej 2, 3000 Helsingør</p>
              </a>
            </div>
            <div className="contact-info">
              <img src={`${facebook}`} alt="" />
              <span>
                <a
                  href="https://www.facebook.com/ArabiFoodTapas "
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <p>facebook.com/ArabiFoodTapas</p>{" "}
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="cont">
          <div>
            <div className="contact-info">
              <img src={`${mobile}`} alt="" />

              <p>+45 81 71 60 64</p>
            </div>

            <div className="contact-info">
              <img src={`${time}`} alt="" />

              <p> 11:00 AM - 8:00 PM </p>
            </div>
            <div className="contact-info">
              <img src={`${cvr}`} alt="" />

              <p> 39447630</p>
            </div>
          </div>
        </div>
        <div className="resturant-img">
        <img src={`${reemRestaurant1}`} alt="Arabi Food resturant" />
        </div>
      </div>
    </section>
  );
}

export default VisitUs;
