import React from "react";
import webdev from "../../assets/web-development.png";
import wave from "../../assets/wave1.png";
import banner from "../../assets/banner1.gif";
import CRM from "../../assets/CRM-removebg-preview.png";
import digital from "../../assets/Digital_marketing-removebg-preview.png";
import webApp from "../../assets/web-removebg-preview.png";
import MobApp from "../../assets/mobile-removebg-preview.png";
import ERP from "../../assets/ERP-removebg-preview.png";
import Eccomerce from "../../assets/e-commerce-removebg-preview.png";
import developmentImg from "../../assets/teamwork.png";






export const Home =()=>{

  const data =[{img:webApp,name:"Web Application",discroption:" mobile and cloud services delivers innovative solutions that brings the best results. "}
  ,{img:MobApp,name:"Mobile Application",discroption:" mobile and cloud services delivers innovative solutions that brings the best results. "},
  {img:ERP,name:"ERP Application",discroption:" mobile and cloud services delivers innovative solutions that brings the best results. "},
  {img:CRM,name:"CRM Application",discroption:" mobile and cloud services delivers innovative solutions that brings the best results. "},
  {img:Eccomerce,name:"E-commerce",discroption:" mobile and cloud services delivers innovative solutions that brings the best results. "},
  {img:digital,name:"Digital Marketing",discroption:" mobile and cloud services delivers innovative solutions that brings the best results. "}]


    return<> 
     <section id="banner" style={{marginTop:"-80px"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-6 sbTotalCon">
          <p className="promo-title">Welcome</p>
          <h4 className="font subtlt">We Deliver Solution with the Goal of Trusting Relationships</h4>
          <p className="headContent" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus voluptate ullam adipisci cum repudiandae, ipsa, error illo enim esse architecto aspernatur. Asperiores, assumenda iure ut quo animi provident nisi.</p>
          <button className="btn-readMore ">Read more</button>
        </div>
        <div className="col-md-6">
          <img src={banner} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
    <img src={wave} className="bottom-img" alt="" />
  </section>
 
  <div className="container">
    <div className="common mt-5">
      <h2 className="common-inner sub-head-font">Development</h2>
    </div>
    <div className="row mt-5">
      <div className="col-lg-6">
        <img src={developmentImg} className="teamwork" alt="dev" width={400} />
      </div>
      <div className="col-lg-6">
        <h2 className="development-sub-heading font">Our Software Development Services.</h2>
        <p className="development-content">We help companies do more with less. We are the leading Software development services providing company. We provide IT solutions to small-scale businesses to large enterprises. With our help, you can manage your custom software development better and focus on what matters most to you.
<br />
<br />
<span>
We are a software development company that specializes in the design, development and implementation of software development services for our clients.</span>
</p>
      </div>

    </div>
  </div>

  <div className="container mt-5">
    <div className="our-service common">
      <h2 className="common-inner row sub-head-font">Our services</h2>
    </div>
    <div className="row m-5">
      {data.map((res)=>{
        return(
           <div className="col-lg-4 mb-5">
          <div className="card p-4 cardColor">
            <p className="quotation-mark">
              <img src={res.img}alt="" width={100} />
            </p> <p className="blog-post-bottom pull-left our-services-sub-heading">
                {res.name}
              </p>
            <p className="quote-text our-services-sub-content">
              {res.discroption}
            </p>
            
          </div>
      
            </div>
       
        )
      })}
     
    </div>
  </div>
    </>
}