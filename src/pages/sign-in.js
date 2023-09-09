import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import InputGroup from "../components/input-group";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/home");
  };
  const handleChange = () => {};

  return (
    <div>
      <div className="signIn miniWrap">
        <div className="box">
          <h1>SIGN IN</h1>
          <InputGroup
            type="email"
            label="Email"
            name="email"
            onChnage={handleChange}
          />
          <InputGroup
            type="password"
            label="Password"
            name="password"
            onChnage={handleChange}
          />
          <p className="forgotPassword">forget password?</p>
          <Button onClick={handleSignIn} title="Sign in" />

          <p style={{ textAlign: "center" }}>
            Dont have an account? <Link to="/create-account">Sign up</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
