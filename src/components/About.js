import React from 'react';
import "./About.css"

const About = () =>{
  return (
    <div className="jumbotron">
      <section id="about">
           <div className="container">
        							<div className="row">
        						  	<div className="col-md-4">
                          <img className="img-responsive" id="about1" src={require("../img/about4.png")} alt="jessie"/>
                        </div>
        								<div className="col-md-8">
                            <h2>About me</h2>
          								 	<p>I am a software developer with a finance background. I was born in China, where I attended the University of International Business and Economics in Beijing. I got my masters degree at the University of Sydney. Before moved to Seattle, I lived in Vancouver, BC for 7 years, working as a financial analyst. Before Ada, I worked as an internal auditor at Costco for two years. My auditing job required me use SQL to extract data from the ERP system, which was very interesting to me. That is where one of my friends recommended Ada to me, a highly selective and intensive software developer training program, which became the start of my coding journey.
                            </p>
                            <p >
                              <ul id="link-logo">
                                <li><a href="https://github.com/jessiezhang2017"><img className="l-logo"  src={require("../img/github.png")} alt="github logo"/></a></li>
                                <li><a href="mailto:zhangjessie2017@gmail.com"><img className="l-logo"  src={require("../img/email.png")} alt="email logo"/></a></li>
                              </ul>
                            </p>
                  			</div>
        							</div>
             </div>
       </section>
  </div>
  )
};

export default About;
