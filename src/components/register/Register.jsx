import React from 'react';
import './styles.css';

const Register = () => {
  return (
    <>

<>
   <div className="login" style={{position: "fixed",
  top: "0",
  left: "0",
  width: "100%"}}>

   <div className="left">
        <div className="text">Your Place to Grow </div>
    </div>
    <div className="right">
    <div className="form">
      <div className="container">

      <form>
        <h2 style={{"left":"125px"}}>Register</h2>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         
       </div>
       <div className="input-container">
         <label>Email</label>
         <input type="email" name="email" required />
         
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
        
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>

      </div>
    
   </div>
    </div>
   </div>
    </>
    
    </>
  )
}

export default Register