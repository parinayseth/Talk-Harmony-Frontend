import React from "react";
import "./signupPage.css";
import Logo from "../student.png";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  let navigate = useNavigate();
  return (
    <div className="newApp">
      <div className="loginBox">
        <img src={Logo} alt="" />
        <h1>PocketMind</h1>
      </div>
      <div className="loginForm">
        <form action="#">
          <div className="names">
            <input type="text" id="fname" name="fname" placeholder="First name" />
            <input className="lName" type="text" id="lname" name="lname" placeholder="Last name" />
          </div>
          
          <input
            type="text"
            id="mobile_number"
            name="mnumber"
            placeholder="Mobile number or email address"
          />
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            id="confirm_password"
            name="cpassword"
            placeholder="Confirm Password"
          />
          <fieldset>
            <div className="DOB">
            <label for="MoveInDate">Date:</label>
                <input type="date" id="birthday" name="birthday" defaultValue={new Date().toISOString().substr(0,10)}/>
            </div>
          </fieldset>
          
            <label className="genderLabel" for="MoveInDate">Gender:</label>
          <select className="gender" name="language" id="language">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others" >Others</option>
        </select>
        </form>
      </div>
      
        <button onClick={()=>{navigate("/OTPPage")}} className="submit">Submit</button>
      <p className="policyPara">BY CLICKING SIGNUP YOU AGREE TO OUR TERMS,PRIVACY POLICIES AND COOKIE POLICIES. YOU MAY RECIEVE NOTIFICATION FROM US AND OPT OUT ANY TIME. </p>
    </div>
  );
}
