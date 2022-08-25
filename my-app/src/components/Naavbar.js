import React from 'react';
import {  Menu} from 'antd';
const Naavbar = () => {
    
    return (
    <div className='nav'>
        
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
             <div className="logo">
                <a href='/home'>logo</a>
             </div>
             
            <Menu.Item key="1" >
                Home
            </Menu.Item>
            <Menu.Item key="2" >
             best places
            </Menu.Item>
            <Menu.Item key="3" >
                about us
            </Menu.Item>
        </Menu>    
        </div>
    
    );
};

export default Naavbar;