import React from "react";
import "./SignInForClient.css";

function SignInForClient(props) {
  return (
    <div className="bg">
      <div className="">
        <div className="Sign_In">
          <div className="signInWays">
            <label>Sign in with: </label>
            <a href="#1">
              <i
                className="fa-brands fa-facebook fa-xl"
                style={{ color: "#1866ec" }}
              />
            </a>
            <a href="#2">
              <i
                className="fa-brands fa-twitter fa-xl"
                style={{ color: "#1866ec" }}
              />
            </a>
            <a href="#3">
              <i
                className="fa-brands fa-instagram fa-xl"
                style={{ color: "#1866ec" }}
              />
            </a>
            <a href="#4">
              <i
                className="fa-brands fa-google fa-xl"
                style={{ color: "#1866ec" }}
              />
            </a>
            <p className="or">Or</p>
          </div>
          <form className="signInForm">
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <div className="supportSignIn">
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
                <a href="#">Forgot password ?</a>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <p className="register">
            Don't have a account? <a href="#5">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInForClient;
