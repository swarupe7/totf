import React from 'react';
import './styles.css';


const Login = () => {
  return (
    <>
   <div className="login" style={{position: "fixed",
  top: "0",
  left: "0",
  width: "100%"}}>

   <div className="left">
        <div className="text">Your site to learn </div>
    </div>
    <div className="right">
    <div className="form">
      <div className="container">

      <form>
        <h2 style={{"left":"125px"}}>LOGIN </h2>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         
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
  )
}

export default Login