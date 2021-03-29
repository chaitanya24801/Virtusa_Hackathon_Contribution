import React from "react";
import { Form, FormLabel, FormControl, FormGroup } from "react-bootstrap";

const Signup = ({
  email,
  username,
  mobilenumber,
  password,
  confirmpassword,
  setEmail,
  setUsername,
  setMobilenumber,
  setPassword,
  setConfirmpassword,
  isPasswordVisible,
  isConfirmPasswordVisible,
  setIsPasswordVisible,
  setSignIn,
  setIsConfirmPasswordVisible,
  handleSignUp,
  pv,
}) => {
  return (
    <Form>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <FormControl
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel>Username</FormLabel>
        <FormControl
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        ></FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel>Mobile Number</FormLabel>
        <FormControl
          value={mobilenumber}
          onChange={(e) => setMobilenumber(e.target.value)}
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
        <FormLabel>Confirm Password</FormLabel>
        <FormControl
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
          type={isConfirmPasswordVisible ? "text" : "password"}
        ></FormControl>
        <span
          onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
          style={{
            color: isConfirmPasswordVisible ? "rgb(255, 30, 0)" : "black",
          }}
          className={
            "p-v fa " + (isConfirmPasswordVisible ? "fa-eye" : "fa-eye-slash")
          }
        ></span>
      </FormGroup>
      <FormGroup>
        <button className="signin-btn" onClick={handleSignUp}>
          Sign Up
        </button>
      </FormGroup>
      <FormGroup>
        <FormLabel className="signin-link">
          Already a member?{" "}
          <span
            onClick={() => {
              setSignIn(true);
              setIsPasswordVisible(false);
              setIsConfirmPasswordVisible(false);
            }}
          >
            Click Here
          </span>
        </FormLabel>
      </FormGroup>
    </Form>
  );
};

export default Signup;
