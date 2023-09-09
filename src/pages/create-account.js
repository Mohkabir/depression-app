import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import InputGroup from "../components/input-group";

const CreateAccount = () => {
  const handleChange = () => {};
  const handleCreateAccount = () => {};

  return (
    <div>
      <div className="signIn miniWrap">
        <div className="box">
          <h1>CREATE AN ACCOUNT</h1>
          <InputGroup
            type="text"
            label="Name"
            name="name"
            onChnage={handleChange}
          />
          <InputGroup
            type="email"
            label="Email"
            name="email"
            onChnage={handleChange}
          />

          <InputGroup
            type="date"
            label="Birth Date"
            name="birthDate"
            onChnage={handleChange}
          />

          <div className="genderGroup">
            <div>
              <input type="radio" name="gender" /> <span>Male</span>
            </div>
            <div>
              <input type="radio" name="gender" /> <span>Female</span>
            </div>
          </div>
          <InputGroup
            type="password"
            label="Password"
            name="password"
            onChnage={handleChange}
          />

          <div className="agrrementGroup">
            <div>
              <input type="checkbox" name="" id="" />
              <span>Agree to terms and condition</span>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <span>Remember Email and Password</span>
            </div>
          </div>
          <Button onClick={handleCreateAccount} title="Sign up" />

          <p style={{ textAlign: "center" }}>
            Already have an account? <Link to="/">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
