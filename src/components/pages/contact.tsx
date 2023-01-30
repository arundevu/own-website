import React from "react";
import aboutImg from "../../assets/tem.gif"

export const ContactUS =()=>{



    return<>
      <div className="container mt-5">
    <div className="row" style={{columnGap:"24px"}}>
      <div className="col-lg-1"></div>
      <div className="col-lg-4">
        <h2 className="get">Get in touch</h2>
        <h2 className="withus sub-head-font">with us</h2>
        <img src={aboutImg} width="100%" alt="aboutImg" />
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-4 pt-6">
        <h2 className="FAQ">
          Got a question that <br />
          wasn’t in the FAQ?
        </h2>
        <form className="flex ">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Message"
              
            ></textarea>
          </div>
        </form>
        <button className="mt-3 button-4">Send your message</button>
      </div>
      <div className="col-lg-2"></div>
    </div>
  </div>
  <div className="container mt-5">
    <hr style={{backgroundColor: "#234386"}} />
  </div>
  {/* gmap */}
  <div className="container-fluid">
      <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2320.8888023740005!2d79.80631753090026!3d11.956897776729761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53613f867cc165%3A0xbad1df17e5ee5a59!2s19%2C%2011th%20Cross%20St%2C%20Kurinji%20Nagar%2C%20Gurusithananda%20Samy%20Nagar%2C%20Navarkulam%2C%20Puducherry%2C%20Tamil%20Nadu%20605008!5e0!3m2!1sen!2sin!4v1650025783344!5m2!1sen!2sin"
          width="800"
          height="600"
          style={{border: 0}}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </>
}