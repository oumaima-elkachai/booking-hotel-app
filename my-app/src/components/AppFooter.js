import React from 'react';
import {FacebookOutlined,TwitterOutlined,InstagramOutlined,LinkedinOutlined ,UpCircleOutlined}from '@ant-design/icons'
import { BackTop } from 'antd';
const AppFooter = () => {
    return (
        <div className='container-fluid'>
            <div className='footer'>
                <div className='logo'>
                    <i className='fas fa-bolt'></i>
                    <a href='http://www.google.com'> TuniBooking</a>
                </div>
            <ul className='socials'>
                <li><a href='https://www.facebook.com'><i className='fab fa-facebook-f'><FacebookOutlined /></i></a></li>
                <li><a href='https://www.twitter.com'><i className='fab fa-twitter'><TwitterOutlined /></i></a></li>
                <li><a href='https://www.linkedin.com'><i className='fab fa-linkedin-in'><LinkedinOutlined /></i></a></li>
                <li><a href='https://www.instagram.com'><i className='fab fa-instagram'><InstagramOutlined /></i></a></li>
                
            </ul>
            <div className='copyright'>copyright &copy; 2022 </div>
            <BackTop>
                <div className='goTop'><i className='fas fa-arrow-circle-up'><UpCircleOutlined /></i></div>
            </BackTop>
            </div>
            
        </div>
    );
};

export default AppFooter;