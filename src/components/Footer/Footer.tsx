import React from "react";


export const Footer=()=> {


    return<>
     <div className="container-fluid footer mt-5" style={{backgroundColor:"rgb(10,0,104)"}}>
        <footer className="text-center text-lg-start text-white">
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h2 className="text-uppercase mb-4 font-weight-bold"
                    style={{color: "#595c65"}}> <b>Arunitech</b> </h2>
  
                  <br /><br />
                  <p>
                    An Excellence workspace that makes your business known to the world by creating better workflow
                  </p>
                </div>
  
                <hr className="w-100 clearfix d-md-none" />
  
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6
                    className="text-uppercase mb-4 font-weight-bold"
                    style={{color: "#595c65"}}
                  >
                    <b>Links</b>
                  </h6>
                  <p>
                    <a className="text-white" href="#">Home</a>
                  </p>
                  <p>
                    <a className="text-white" href="#">About us</a>
                  </p>
                  <p>
                    <a className="text-white" href="#">Services</a>
                  </p>
                  <p>
                    <a className="text-white" href="#">Contact us</a>
                  </p>
                </div>
             
  
                <hr className="w-100 clearfix d-md-none" />
  
                <hr className="w-100 clearfix d-md-none" />
  
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6
                    className="text-uppercase mb-4 font-weight-bold"
                    style={{color: "#595c65"}}
                  >
                    <b>Contact Info</b>
                  </h6>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>
                    <b>Office Address</b> <br />
                    214,1st cross, abc nagar, xyz, cuddalore - 607002
                  </p>
                  <p>
                    <i className="fa-solid fa-phone"></i> <b>Call us</b>
                    <br />+91 9360162025
                  </p>
                  <p>
                    <i className="fa-solid fa-envelope-open"></i> <b>Mail us</b>
                    <br />
                    hello@arunitech.com
                  </p>
                </div>
              </div>
            </section>
  
            <hr className="my-3" />
            <section className="">
              <div className="container-fluid row d-flex">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  
                  <div className="">
                    ?? 2024 Copyright:
                    <a className="text-white" href="#">arunitech@gamil.com</a>
                  </div>
                </div>
                
              </div>
            </section>
          </div>
        </footer>
      </div>
    
    </>
}