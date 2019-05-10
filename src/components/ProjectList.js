import React from 'react';
import "./ProjectList.css"

const ProjectList = () =>{
  return (
    <div className="jumbotron">
        <section id="Portfolio" class="content">
          <div class="inner_wrapper">
            <div class="container">
              <div class=" portfolio_title">

                  <h2>Projects</h2>

              </div>
          <div class="inner_section">
           <div class="row">
              <div class="col-lg-12 ">
                 <div class="row">
                   <div class="col-md-4">
                    <figcaption>
                      <div>
                        <h4>Foodie Finder</h4>
                        <p><img class="portfolio_img" src={require("../img/project1.png")}  alt="Portfolio 1"/></p>
                        <p>A food ranking website</p>
                        <p><a href="https://menuui.herokuapp.com/">Website</a></p>
                        <p><a href="https://github.com/jessiezhang2017/RestaurantMenuUI">Github FrontEnd</a></p>
                        <p><a href="https://github.com/jessiezhang2017/restaurant_menu">Github BackEnd</a></p>
                      </div>
                    </figcaption>
                  </div>

               <div class="col-md-4">
                  <figcaption>
                     <div>
                      <h4>API muncher</h4>
                      <p> <img class="portfolio_img" src={require("../img/project2.png")} alt="Portfolio 2"/></p>
                      <p>A recipe search website</p>
                      <p><a href="https://muncher2018.herokuapp.com">Website</a></p>
                      <p><a href="https://github.com/jessiezhang2017/api-muncher">Github</a></p>
                    </div>
                  </figcaption>
                </div>

               <div class="col-md-4">
                 <figcaption>
                  <div>
                    <h4>Betsy</h4>
                    <p> <img class="portfolio_img" src={require("../img/project3.png")} alt="Portfolio 3"/></p>
                    <p>A shopping site</p>
                    <p><a href="https://github.com/jessiezhang2017/betsy">Github</a></p>
                  </div>
                </figcaption>
               </div>
              </div>

            <div class="row">
               <div class="col-md-4">
                 <figcaption>
                  <div>
                    <h4>Hotel</h4>
                    <p> <img class="portfolio_img" src={require("../img/project4.png")} alt="Portfolio 4"/></p>
                    <p>A hotel room management system</p>
                    <p><a href="https://github.com/jessiezhang2017/hotel">Github</a></p>
                  </div>
                </figcaption>
               </div>

               <div class="col-md-4">
                 <figcaption>
                  <div>
                    <h4>Ride share</h4>
                    <p> <img class="portfolio_img" src={require("../img/project5.png")} alt="Portfolio 5"/></p>
                    <p>A ride management system</p>
                    <p><a href="https://github.com/jessiezhang2017/ride-share">Github</a></p>
                  </div>
                </figcaption>
               </div>

               <div class="col-md-4">
                   <figcaption>
                    <div>
                      <h4>Video store API</h4>
                      <p> <img class="portfolio_img" src={require("../img/project6.png")} alt="Portfolio 6"/></p>
                      <p>A video store system</p>
                      <p><a href="https://github.com/jessiezhang2017/VideoStoreAPI">Github</a></p>
                    </div>
                  </figcaption>
                </div>
             </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </section>
  </div>
  )
};

export default ProjectList;
