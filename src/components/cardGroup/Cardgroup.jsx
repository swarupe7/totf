
import Card from 'react-bootstrap/Card';

import "./style.css";

const Cardgroup = () => {
  return (
    <div className="d-flex justify-content-around" style={{marginTop:"15px"}}>
    <Card style={{ width: '18rem',marginTop:'15px' }}>
      <Card.Img variant="top" src="https://www.enerpize.com/wp-content/uploads/2019/04/Group-9342.svg" style={{height:"286px", width:"265px"}} />
      <Card.Body>
        <Card.Title style={{paddingLeft:"55px"}}>Online Services</Card.Title>
        <Card.Text>
          <p>
          Simple and Secure control over your Transactions  and Accounts. 
          </p>
         
        </Card.Text>
        
       
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' ,marginTop:'15px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVh2y_uUIkB3M3vc2XEC9-NANfGEzI6HKGg&usqp=CAU" style={{height:"286px", width:"265px"}}  />
      <Card.Body>
        <Card.Title style={{paddingLeft:"60px"}}>Easy Scheduling</Card.Title>
        <Card.Text>
          <p>Scheduling your tasks accordingly and manage your tasks accordingly.</p>
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,marginTop:'15px' }}>
      <Card.Img variant="top" src="https://www.corefactors.in/blog/content/images/wordpress/2020/10/What-Is-Customer-Service-Software-.jpg" style={{height:"286px", width:"265px"}}  />
      <Card.Body>
        <Card.Title style={{paddingLeft:"65px"}}>Tracking</Card.Title>
        <Card.Text>
          <p>Help in tracking customer Performance and provide good Feedback.</p>
        </Card.Text>
       
      </Card.Body>
    </Card>

   
  </div>
 
    
    
  )
}

export default Cardgroup