import React from "react";
import "./Contact.scss";
import insta from "../../assets/insta.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="card">
        <div className="card-item-head">REACH US AT</div>
        <div className="card-item-body">
          <div className="card-items">
            <div className="item-head">support@kicksup.com</div>
            <div className="item-body">for any technical support</div>
          </div>
          <div className="card-items">
            <div className="item-head">info@kicksup.com</div>
            <div className="item-body">for more information</div>
          </div>
          <div className="card-items">
            <div className="item-head">feedback@kicksup.com</div>
            <div className="item-body">to send your feedback</div>
          </div>
          <div className="card-items">
            <div className="item-head">jobs@kicksup.com</div>
            <div className="item-body">to work with us</div>
          </div>
        </div>
      </div>
      <div>
        <div className="item-body text-center">stay in touch</div>
        <div className="contact-icons">
          <div>
            <img src={twitter} />
          </div>
          <div>
            <img src={insta} />
          </div>
          <div>
            <img src={facebook} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
