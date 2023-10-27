import React from 'react';
import Card from 'react-bootstrap/Card';

import "./style.css";

const Totc = () => {
  return (
   <div className="center" id="about">
    <div className="info">
        What is <span className="hgl">TOTC ??</span>

    </div>
    <div className="data">TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</div>
    <div className="d-flex justify-content-around" style={{marginTop:"15px"}}>
      <Card style={{ width: '18rem',marginTop:'15px' }}>
        <Card.Img variant="top" src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/b2928d2/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F7f%2F38%2Fb37d0d6148e48fea8f76209eb3bb%2Fbigstock-pretty-teacher-smiling-at-came-69887626-1.jpg" />
        <Card.Body>
          <Card.Title style={{paddingLeft:"65px"}}>Teachers</Card.Title>
          <Card.Text>
            <p>
            Teachers could easily analyze their students  performance and help them improve.
            </p>
           
          </Card.Text>
          
         
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' ,marginTop:'15px' }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.jynN9_HsVoLBHnQpF71d4AHaE8?w=294&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        <Card.Body>
          <Card.Title style={{paddingLeft:"65px"}}>Students</Card.Title>
          <Card.Text>
            <p>Online learning platform empowers students by offering a diverse range of courses</p>
          </Card.Text>
         
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' ,marginTop:'15px' }}>
        <Card.Img variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1000&h=500&url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2017%2F03%2F12232828%2Fshutterstock_583803574.jpg" />
        <Card.Body>
          <Card.Title style={{paddingLeft:"65px"}}>Parents</Card.Title>
          <Card.Text>
            <p>Parents could understand their kids performance ,talents and support them accordingly.</p>
          </Card.Text>
         
        </Card.Body>
      </Card>

     
    </div>
   </div>
  )
}

export default Totc