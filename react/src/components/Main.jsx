import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { logIn, signUp } from "../api";
import { updateUser } from "../redux/actions/user";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState();
  const [confirmpassword, setConfirmpassword] = useState("");
  const [signIn, setSignIn] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(
    false
  );
  const history = useHistory();

  const pv = {
    color: isPasswordVisible ? "rgb(255, 30, 0)" : "black",
  };

  const logoPic = {
    height: "20%",
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const loginCard = {
    border: "none",
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (password.length < 3) {
      alert("Password should contain at least 3 characters.");
      return;
    }
    const res = await logIn(username, password);
    if (res.error) alert("Try again later");
    else {
      if (res.status) {
        updateUser(res.user);
        history.push("/home");
      } else {
        alert("Username or Password is incorrect");
      }
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password.length < 3) {
      alert("Password should contain at least 3 characters.");
      return;
    }
    if (confirmpassword !== password)
      alert("Password and Cofirm Password should be same.");
    else if (mobilenumber.length !== 10 || mobilenumber[0] === 0)
      alert("Enter a valid mobile number.");
    else {
      const res = signUp(email, username, mobilenumber, password);
      if (res.status) alert("Account has been successfully created!");
      else if (res.err === "username") alert("Username is already taken");
      else if (res.err === "email")
        alert("An account exists with the given email.");
    }
  };

  return (
    <Container>
      <Row className="" style={{ height: "100vh" }}>
        <Col sm="12" md="6">
          <img
            style={{ width: "100%" }}
            src="https://images.app.goo.gl/fom5vQ1FV6dLUqeo7"
            alt=""
          />
        </Col>
        <Col
          sm="12"
          md="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="log-in-col"
        >
          <img style={logoPic} src="Logo,jpg.png" alt="" />
          <Card style={loginCard}>
            {/* <Card.Title className="text-center">Login to NEO</Card.Title> */}
            <Card.Body>
              {signIn ? (
                <Login
                  username={username}
                  password={password}
                  setSignIn={setSignIn}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  pv={pv}
                  isPasswordVisible={isPasswordVisible}
                  setIsConfirmPasswordVisible={setIsConfirmPasswordVisible}
                  setIsPasswordVisible={setIsPasswordVisible}
                  handleSignIn={handleSignIn}
                />
              ) : (
                <Signup
                  email={email}
                  username={username}
                  password={password}
                  confirmpassword={confirmpassword}
                  setSignIn={setSignIn}
                  setEmail={setEmail}
                  setUsername={setUsername}
                  setMobilenumber={setMobilenumber}
                  setPassword={setPassword}
                  setConfirmpassword={setConfirmpassword}
                  pv={pv}
                  isPasswordVisible={isPasswordVisible}
                  isConfirmPasswordVisible={isConfirmPasswordVisible}
                  setIsConfirmPasswordVisible={setIsConfirmPasswordVisible}
                  setIsPasswordVisible={setIsPasswordVisible}
                  handleSignUp={handleSignUp}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
