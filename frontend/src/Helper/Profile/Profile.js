import React, { useState } from 'react';
import '../Profile/Profile.css';
import { MdLocationOff } from "react-icons/md";
import { FaTimes, FaBars } from 'react-icons/fa';
import { MdSpeakerNotesOff } from "react-icons/md";
import { BsBagXFill } from "react-icons/bs";
import { RiDiscountPercentFill } from "react-icons/ri";
import { CgTrack } from "react-icons/cg";

const Profile = () => {
  const [activeSection, setActiveSection] = useState('Profile Information');
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Profile Information':
        return (
          <div>
            <h1>Profile Information</h1>
            <div className="profile-header">
              <img src="profile.png" alt="" className="profile-picture" />
              <h2>Arjun Hanwate</h2>
              <button className="edit-button">Edit</button>
            </div>
            <form className="profile-form">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" value="Arjun" />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" value="Hanwate" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" value="9766440296" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value="hanwatearjun79@gmail.com" />
              </div>
              <button type="submit" className="update-button">Update</button>
            </form>
          </div>
        );
      case 'My Orders':
        return <div>
        <h1>Your Orders</h1>
        <div className='div-empty' >
            <BsBagXFill className='Empty-icon' />
            <p>No order found!</p>
        </div>
        </div>;
      case 'Wishlist':
        return <div>
        <h1>Wishlist</h1>
        <div className='div-empty' >
            <MdSpeakerNotesOff className='Empty-icon' />
            <p>No product found in wishlist</p>
        </div>
        </div>;
      case 'Address':
        return <div>
            <h1>Address</h1>
            <div className='div-empty' >
                <MdLocationOff className='Empty-icon' />
                <p>No address is saved</p>
            </div>
            </div>;
            
      case 'Coupons':
        return <div>
            <h1>Your Coupons</h1>
            <div className='div-empty' >
                <RiDiscountPercentFill className='Empty-icon' />
                <p>No coupon found!</p>
            </div>
            </div>;
      case 'Track Order':
        return <div>
        <h1>Track Your Order</h1>
        <div className='div-empty' >
            <CgTrack className='Empty-icon' />
            <p>Order not found!</p>
        </div>
        </div>;      default:
        return <div><h1>Profile Information</h1></div>;
    }
  };

  return (
    <div className='main-div'>
      
      <div className="container">
      <button className="toggle-button" onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <aside className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
          <ul>
            <li className={activeSection === 'Profile Information' ? 'active' : ''}>
              <a href="#" onClick={() => { setActiveSection('Profile Information'); toggleSidebar(); }}>Profile Information</a>
            </li>
            <li className={activeSection === 'My Orders' ? 'active' : ''}>
              <a href="#" onClick={() => { setActiveSection('My Orders'); toggleSidebar(); }}>My Orders</a>
            </li>
            <li className={activeSection === 'Wishlist' ? 'active' : ''}>
              <a href="#" onClick={() => { setActiveSection('Wishlist'); toggleSidebar(); }}>Wishlist</a>
            </li>
            <li className={activeSection === 'Address' ? 'active' : ''}>
              <a href="#" onClick={() => { setActiveSection('Address'); toggleSidebar(); }}>Address</a>
            </li>
            <li className={activeSection === 'Coupons' ? 'active' : ''}>
              <a href="#" onClick={() => { setActiveSection('Coupons'); toggleSidebar(); }}>Coupons</a>
            </li>
            <li className={activeSection === 'Track Order' ? 'active' : ''}>
              <a href="#" onClick={() => { setActiveSection('Track Order'); toggleSidebar(); }}>Track Order</a>
            </li>
          </ul>
        </aside>
        <main className="profile-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Profile;
