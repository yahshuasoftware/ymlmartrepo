import React from 'react'
import '../Footer/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">

      </div>
      <div className="bottom">
        <div className="horizantal">
            <div className="Download-section">
                <img className='logo' src="logo.png" alt="" />
                <h2>Download our app</h2>
                <div className='images'>
                    <img className='img1' src="Google-play.png" alt="img" />
                    <img className='img2' src="App-store.png" alt="img" />
                </div>
            </div>
            <div className="Special-section">
            <h3>Special</h3>
            <a href=''>Featured Products</a>
            <a href=''>Latest Products</a>
            <a href=''>Best Selling Products</a>
            <a href=''>Top Rated Products</a>
            </div>
            <div className="Account-shipping">
            <h3> Account and Shipping Information</h3>
            <a href=''>Profile Information</a>
            <a href='/wishlist'>Wishlist</a>
            <a href=''>Track Order</a>
            <a href=''>Refund Policy</a>
            <a href=''>Return Policy</a>
            <a href=''>Cancellation Policy</a>
            </div>
            <div className="Newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our new channel to receive the latest updates.</p>
            <form action="">
             <input className='text' type="email" placeholder='Email' name="" id="" />
            <input className='btn' type="button" value="Subscribe"/>
            </form>
            
            </div>
        </div>

        <div className="address">
            <div className='left'>

            </div>
            <div className='right'>
                <div className='up'>
                    <p>Start a conversation</p>
                    <p>Address</p>
                </div>
                <div className='down'>
                    <p>+91-9766440296</p>
                    <p>support@ymlmart.com</p>
                    <p>+91-9766440296</p>
                    <p>Pune, Maharashtra</p>
                </div>
            </div>
        </div>

        <div className="socials">
            <p>&copy; 2024 | Yahshua Marketing Limited. All rights reserved.</p>
            <div className="social-icons">Social Icons</div>
            <a>Terms and Conditions</a>
            <a>Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
