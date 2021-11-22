import React from 'react';
import Footer from './Footer';



const Contact = () =>{
    return(
        <>
            
            <form className="container">
            <h1 className="text-center m-2">Contact Us</h1>
  
  <div className="form-outline">
   
    <label className="form-label" for="form4Example1">Name</label>
    <input type="text" id="form4Example1" className="form-control" />
  </div>

  
  <div className="form-outline mb-4">
    <label className="form-label" for="form4Example2">Email address</label>
    <input type="email" id="form4Example2" className="form-control" />

  </div>

  <div className="form-outline mb-4">
  <label className="form-label" for="form4Example3">Message</label>

    <textarea className="form-control" id="form4Example3" rows="4"></textarea>
  </div>

  
  <div className="form-check d-flex justify-content-center mb-4">
    <input
      className="form-check-input me-2"
      type="checkbox"
      value=""
      id="form4Example4"
      checked
    />
    <label className="form-check-label" for="form4Example4">
      Send me a copy of this message
    </label>
  </div>

  
  <button type="submit" className="btn btn-primary ">Send</button>
</form>
<Footer/>



        </>
    )
}


export default Contact;