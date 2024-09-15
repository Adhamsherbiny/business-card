/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "./homepage.css";
import { useRef } from "react";
export default function Home() {
  const logInSection = useRef<any>();
  const singUpSection = useRef<any>();
  const animationTemplet = useRef<any>();
  const startAnimation = useRef<any>();

  //! LOADING
  function loading(time: number) {
    if (animationTemplet.current.style.display == "none") {
      animationTemplet.current.style.display = "flex";
      startAnimation.current.style.animationName = "identifier";
    }
    setTimeout(() => {
      animationTemplet.current.style.display = "none";
      startAnimation.current.style.animationName = "";
    }, time);
  }
  //! END LOADING
  function showlogin() {
    logInSection.current.style.display = "flex";
    singUpSection.current.style.display = "none";
    loading(3000);
  }
  function showsingup() {
    logInSection.current.style.display = "none";
    singUpSection.current.style.display = "flex";
    loading(3000);
  }
  return (
    <div className="page">
      <div className="login" ref={logInSection}>
        <div className="txt">
          <h1>Electronic Business Card</h1>
          <p>Login to enjoy our services</p>
          <p>
            Do not have account <span onClick={showsingup}>Register</span>
          </p>
        </div>
        <form action="" autoComplete="off">
          <div className="form-div">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="form-div">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <input className="login-inp" type="submit" value="Login" />
        </form>
      </div>
      <div className="singup" ref={singUpSection}>
        <div className="txt">
          <h1>Electronic Business Card</h1>
          <p>Sing up to enjoy our services</p>
          <p>
            Already have account <span onClick={showlogin}>Login</span>
          </p>
        </div>
        <form action="" autoComplete="off">
          <div className="form-div">
            <label htmlFor="singup-username">Username</label>
            <input type="text" id="singup-username" />
          </div>
          <div className="form-div">
            <label htmlFor="singup-password">Password</label>
            <input type="password" id="singup-password" />
          </div>
          <div className="form-div">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <input className="singup-inp" type="submit" value="Register" />
        </form>
      </div>
      {/* Loading */}
      <div className="loading" ref={animationTemplet}>
        <div className="txt" ref={startAnimation}>
          Loading
        </div>
      </div>
      {/* End Loading */}
    </div>
  );
}
