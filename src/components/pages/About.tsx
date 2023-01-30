import React from "react";
import employees from "../../assets/Employees.gif";
import rounded from "../../assets/pngfind.com-black-circle-frame-png-5199249.png";
import analystic from "../../assets/analytic.png"
import niest from "../../assets/medal.png"
import honest from "../../assets/time-check.png"
import safe from "../../assets/insurance.png"
import processing from "../../assets/image_processing20210909-20488-1367cr8.gif" 
import webAppPic from "../../assets/webappliction.png"
import mobAppPic from "../../assets/mobileapplication.png"
export const About =()=>{



    return<>
      <div className="container-fluid bak ">
        <div className="row lg-3 ">
            <div className="col">
            </div>
            <div className="col-lg-9">
                <div className=" firstcard">
                    <h1 className="text-center  for  common-color">our tech <br className="better" /> ... solution! ...</h1>
                    <div className="about-sub-content">
                    <p className="text-center psize">Continuite Communication deals with the aspect of professional 
                      IT services and managed by a team of Experienced IT and Marketing professionals, having not only
                       years of experience in the segment but also very précised and accurate working hands on the latest technologies.
                       we provide comprehensive website design,development and web marketing services for various-sized businesses and industries.
                       having not only
                       years of experience in the segment but also very précised and accurate working hands on the latest technologies.</p></div>
                    </div>
                  </div>
                 <div className="col">
                </div>
             </div>
         </div>
         {/*  */}
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b7b2b2" 
            fill-opacity="1" d="M0,192L720,160L1440,192L1440,320L720,320L0,320Z"></path></svg>
        <div className="container-fluid  back">
            <div className="row">
                <div className="col-lg-6">
                  <img src={employees} width="100%" alt=""/>
                </div>
            <div className="col-lg-6 ">
                <h2 className="realtast common-color ">sky high</h2>
                <h2 className="sub-head-font even-color">... innovative  <br/> developers....</h2>
                <p className="about-sub-content">Our development teams work with Angular, Laravel, ASP.NET Core, 
                  Express or Django to build complex, custom-made applications or with 
                  Magento Commerce from Adobe to implement high quality and cost-efficient solutions
                   for customers in need of an eCommerce platform. As most modern web 
                   platforms require rich interfaces and smooth interactions,
                   React is our go-to framework to address these needs.</p>
                    </div>
                    </div>
             
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#b7b2b2" fill-opacity="1"
                 d="M0,128L40,128C80,128,160,128,240,149.3C320,171,400,213,480,218.7C560,224,640,192,720,192C800,192,880
                 ,224,960,234.7C1040,245,1120,235,1200,224C1280,213,1360,203,1400,197.3L1440,192L1440,0L1400,0C1360,0,1280
                ,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0
                C160,0,80,0,40,0L0,0Z"></path>
            </svg>

            {/*  */}

            <div className="container mt-5">
    <h1 className="wcu sub-head-font common-color">Why choose us</h1>
    <div className="">
    <div className=" colgap row  pt-5">
        <div className="col">
            <img src={rounded} alt="" width="170"/>
            <img src={analystic} alt=""  className="img1"/>
            <h3 className="founders p-4">Advanced analytics</h3>
        </div>
        <div className="col">
            <img src={rounded} alt="" width="170"/>
            <img src={niest} alt=""  className="img1"/>
            <h3 className="founders p-4">Finest quality</h3>
        </div>
        <div className="col">
            <img src={rounded} alt="" width="170"/>
            <img src={honest} alt=""  className="img1"/>
            <h3 className="founders p-4">Honest delivery</h3>
        </div>
        <div className="col">
            <img src={rounded} alt="" width="170"/>
            <img src={safe} alt=""  className="img1"/>
            <h3 className="founders p-4">Safe and Secure</h3>
        </div>

    </div>
  </div>
</div>
{/*  */}
<div className="container-fluid mt-5 ">
    <div className="squre">
        <div className="row">
            <div className="col-lg-6">
              <img src={processing} width="100%" alt=""/>
            </div>
        <div className="col-lg-6 ">
            <h2 className="realtast common-color">Launch</h2>
            <h2 className="realheal sub-head-font even-color">innovative digital <br/>  products faster <br/> faster<br/>............... </h2>
            <p className="about-sub-content">Continuite communication delivers innovative solutions that achieve the best results for every client,
              regardless of your industry or lifecycle stage. We provide idea validation and pre-market 
              testing services to reduce risks and build a product that perfectly meets your customers’ needs.</p>
                </div>
                </div>
           </div>
          </div>
          {/*  */}
          <div className="container mt-5">
           </div>
         <div className="container mt-5">
              <div className="row pt-5">
            <h2 className="realheal text-center sub-head-font common-color">DISCOVER</h2>
            <h2 className="realtast text-center"> It all began </h2>
            <p className="samll-sub-content pt-4 text-center">Information and knowledge into action.</p> 
              </div>
          </div>

          {/*  */}

            <section className="container-fluid double"> 
         <div className="row pt-5">
             <div className="col-lg-6">
                 <div className="row">
                     <div className="col-lg-5 pt-5">
                      <img src={webAppPic} width="100%" alt=""/>
                    </div>
                     <div className="col-lg-5 ml-2 p-2">
                        <h2 className="founders text-light">Web app  <br/> development</h2>
                        <p className="op text-light">Continuite communication delivers innovative solutions 
                          that achieve the best results for every client, regardless of your industry or lifecycle stage. 
                          We provide idea validation and pre-market testing
                           services to reduce risks and build a product that perfectly meets your customers’ needs.</p>
                     </div>
                 </div> 
             </div>
             <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-5 p-2">
                       <h2 className="founders text-light">Mobile app  <br/> development</h2>
                       <p className="op text-light">Leverage the power of mobile apps and ensure smooth customer experience on a variety of devices.
                        Build a superior mobile application with continuite communication full-cycle mobile app development services.
                         We can assist in all stages of app development,
                         from concept to maintenance of a ready product.</p>
                    </div>
                    <div className="col-lg-5 pt-5">
                      <img src={mobAppPic} width="100%" alt=""/>
                    </div>
                </div>
            </div>
         </div>
     
        </section> 
        {/*  */}

        <div className="container-fluid leaf">
<div className="container-fluid mt-3 ">
    <div className="row ">
        <h2 className="fnts text-center sub-head-font common-color ">EMAIL US</h2>
         
    </div>
</div>

    <div className="container ">
<div className="row">
    <div className="col-lg-5"></div>
<div className="col-lg-6 pb-5" id="inputsvg">

        <input className="inputbox" type="text" placeholder="Email"/ >
       
        <button className="inpntn">submit</button>
</div>
</div>
    </div>
  </div>
    </>
}