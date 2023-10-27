import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./head.css";
const Header = () => {
  return (
    <div className="header">
        <div className="content">Studying Online is now much Easier</div>
       <Button variant="secondary" className="btn" style={{backgroundColor:"white"}}>  <Link to="/login">  Try Now </Link></Button>
          <div className="teenage"></div>
    </div>
  )
}

export default Header