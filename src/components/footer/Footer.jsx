import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter style={{backgroundColor:'#11232f',color:'#ff7545'}} className='text-center text-lg-start '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Tanu Shree</span>
        </div>
      </section>

      <section className='' style={{backgroundColor:'#11232f',color:'white'}}>
        <MDBContainer className='text-center text-md-start mt-5' style={{backgroundColor:'#11232f',color:'white'}}>
          <MDBRow className='mt-3' >
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                That's it for now!
              </h6>
              <p>
                Thank you for visiting! This portfolio is a work in progress, and I appreciate your understanding.  Stay tuned for updates and improvements!
              </p>
            </MDBCol>

            

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Connect on Socials:</h6>
              <p>
                <a href='https://www.linkedin.com/in/tanuushree/' className='text-reset'>
                  LinkedIn
                </a>
              </p>
              <p>
                <a href='https://twitter.com/tanuu_82' className='text-reset'>
                  Twitter
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                tanushree.tnay@gmail.com
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                21cs240tanu@ug.cusat.ac.in
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{backgroundColor:'#11232f',color:'white'}}>
        © 2023 Copyright: tanuushree.writes
        
      </div>
    </MDBFooter>
  );
}

export default Footer;