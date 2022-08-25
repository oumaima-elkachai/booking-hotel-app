import React,{useState} from 'react'
import 'antd/dist/antd.css'
import '../App.css'
import { Anchor, Drawer, Button} from 'antd';
import {AlignLeftOutlined } from '@ant-design/icons'

const { Link } = Anchor;


function Navbar (){
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className='container-fluid'>
      <div className='header'>
        <div className="logo" />
          <i className="fas fa-bolt"></i>
          <a href='http://www.google.com'>logo</a>
      </div>
    <div className="mobileHidden" >
    <Anchor targetOffset="65">
          <Link href="#home" title="Home" />
          <Link href="#hero" title="Hero" />
          <Link href="#article" title="Article" />
        </Anchor>
    </div>
      
    <div className="mobileVisible">
      <Button type="primary" onClick={showDrawer}>
        <i className='fas fa-bars'><AlignLeftOutlined/> </i>
      </Button>
      <Drawer  
        placement="right" 
        onClose={onClose} 
        visible={visible}
      >
        <Anchor targetOffset="65">
          <Link href="#home" title="Home" />
          <Link href="#hero" title="Hero" />
          <Link href="#article" title="Article" />
        </Anchor>
      </Drawer>
    </div>   
  </div>
);
  
}

export default Navbar
