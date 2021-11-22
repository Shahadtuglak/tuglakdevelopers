import React from "react";
import { NavLink } from "react-router-dom";
const image = " https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";




const Home = () =>{
    return(
        <>
           <section id="header" className="">
             <div className="container-fluid nav_bg">
                <div className="row">
                  <div className="col-10 mx-auto">
                      <div className="row">
                      <div className="col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1">
                          <h1>Grow your Business with </h1>
                              <h1><strong className="brand-name">Tuglak Developers</strong></h1>
                          <h2 className="my-3">We are the team of talented Developers</h2>
                            <div className="mt-4">
                                <NavLink to="/service" className=" btn btn-primary">Get Started</NavLink>
                            </div>
                        </div>
                      
                        <img  className="home-img col-lg-6 order-lg-2 order-2 p-5" src={image} alt="laptop"/>
                        </div>


                  </div>
                 
                </div>
             </div>

           </section>
            

          
            

        </>
    )
}


export default Home;