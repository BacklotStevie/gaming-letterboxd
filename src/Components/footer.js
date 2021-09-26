import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css'


const BottomNav = () => {
    return (
       
<footer className={(window.innerWidth >= 770 ? "mx-5 mt-5 " : " ") + "bg-dark text-center text-white mt-5"}>
  
  <div className="container p-4">
    
    <section className="mb-4">
    
      {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-facebook-f"></i></a> */}

  
      <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/sarria_steven" role="button"><i className="fa fa-twitter"></i></a>

    
      {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-google"></i></a> */}

     
      <a className="btn btn-outline-light btn-floating m-1" href="https://instagram.com/steven_sarriaa" role="button"><i className="fa fa-instagram"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="https://youtube.com/channel/UCjzTSGj_1r7K-W3kzZGYIdw" role="button"><i className="fa fa-youtube"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/BacklotStevie" role="button"><i className="fa fa-github"></i></a>
    </section>
   
    <section className="mb-4">
      <p>
      
      </p>
    </section>
    
    <section className="">
      <form action="">
        
        <div className="row d-flex justify-content-center">  
          <div className="col-md-5 col-12">
             <div className="form-outline form-white mb-4">
             <form classNameName="contact-form" method="post" action="https://formspree.io/f/xeqpbpgr">
                     <div classNameName="contact-firstname">
                           <label htmlFor="name"></label>
                       <input type="text" id="name" name="name" placeholder="Your name" required></input>
                      </div>

                      <div classNameName="contact-email">
                          <label htmlFor="email"></label>
                          <input type="text" id="email" name="email" placeholder="Your email" required></input>
                      </div>

                      <div classNameName="contact-subject">
                          <label htmlFor="subject"></label>
                          <textarea type="text" name="subject" placeholder="Your message" required></textarea>
                      </div>

                      <input classNameName="contact-submit bg-medium" type="submit" value="Submit"></input>
                  </form>
            </div>
          </div>
        </div>  
      </form>
    </section> 
  </div>

  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a className="text-white" href="https:insidebacklot.com/"> Insidebacklot.com</a>
  </div>
 
</footer>
);
}

export default BottomNav;