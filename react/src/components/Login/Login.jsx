import React from "react";
import { Form, FormLabel, FormControl, FormGroup } from "react-bootstrap";

const Login = ({
  username,
  password,
  setUsername,
  setPassword,
  isPasswordVisible,
  setIsPasswordVisible,
  setSignIn,
  setIsConfirmPasswordVisible,
  handleSignIn,
  pv,
}) => {
  return (
    <>
      <Form id="loginBox" className="form">
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <FormControl
          id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={isPasswordVisible ? "text" : "password"}
          ></FormControl>
          <span
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            style={pv}
            className={
              "p-v fa " + (isPasswordVisible ? "fa-eye" : "fa-eye-slash")
            }
          ></span>
        </FormGroup>
        <FormGroup>
          <button className="signin-btn" onClick={handleSignIn}>
            Sign In
          </button>
        </FormGroup>
        <FormGroup>
          <FormLabel className="signin-link">
            <span
            id="signupLink"
              onClick={() => {
                setSignIn(false);
                setIsPasswordVisible(false);
                setIsConfirmPasswordVisible(false);
              }}
            >
              Create an account
            </span>
          </FormLabel>
        </FormGroup>
      </Form>
    </>
  );
};

export default Login;
