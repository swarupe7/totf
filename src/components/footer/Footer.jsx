// Filename - components/Footer.js

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./foots.css";

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	Heading,
} from "./foot";

const Footer = () => {
	return (
		<>
		<Box style={{position:"static",bottom:"0px"}}>
			<h1
				style={{
					color: "green",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				TOTC : Learning Portal for Students!

               <br/>


			</h1>


			

			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						
					</Column>
					<Column>
						<Heading>Services</Heading>
					
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						
					</Column>
					<Column>
						<Heading>Social Media</Heading>
					
					</Column>
				</Row>
			</FooterContainer>
		</Box>
		<div className="sub-footer">
    <div className="container flex subfooter-container">
        <a href="#" className="hover-links sf-items" style={{color:"white"}}>Privacy Policy</a>
        <a href="#" className="hover-links sf-items" style={{color:"white"}} >Terms & Conditions</a>
        <a href="#" className="hover-links sf-items" style={{color:"white"}}>Secutity Info</a>
        
    </div>
   </div>

		</>
	);
};
export default Footer;
