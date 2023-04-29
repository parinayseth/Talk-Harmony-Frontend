import React from "react";
import "./loginPage.css";
import Logo from "../student.png";
import {Link, useNavigate} from "react-router-dom";

export default function LoginPage() {
  let navigate = useNavigate();
  return (
    <div className="newApp">
      <div className="loginBox">
        <img src={Logo} alt="" />
        <h1>TalkHarmony</h1>
        
      </div>
      <div className="loginForm">
          <form onSubmit={()=>{navigate("/Home")}} action="#">
            <input type="text" id="fname" name="fname" placeholder="Phone number or email address" />
            <input type="text" id="lname" name="lname" placeholder="password" />
            <input className="sub" type="submit" value="Login" />
           </form>
           
        </div>
        <div className="Questions">
            <Link to="/ForgetPage">Forgot Password?</Link><br />
            <Link to="/SignupPage">New User? SignUp Now</Link>
        </div>
        
    </div>
  );
}
