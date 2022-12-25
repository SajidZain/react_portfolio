import './FooterStyles.css'
import React from 'react'
import {FaFacebook, FaHome,FaInstagram,FaLinkedinIn,FaMailBulk,FaPhone} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                    <div>
                        <p>Kausa,Mumbra</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                <FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                    9XXX XXXXXX4
                    </h4>
                </div>
                <div className="email">
                    <h4>
                <FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                shkmdsajid98@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iure at adipisci laudantium quis ea delectus quasi tempora iste facere quidem rerum libero obcaecati, enim neque, officia ad totam non.</p>
                <div className="social">
                <FaFacebook size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                <FaInstagram size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                <FaLinkedinIn size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer