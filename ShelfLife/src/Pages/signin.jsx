import React, { useState } from "react";

import { auth, googleProvider } from "../firebase";

import {
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";

import "./signin.css";

import {
  Link,
  useNavigate
} from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      console.log(
        "Logged In:",
        userCredential.user
      );

      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result =
        await signInWithPopup(
          auth,
          googleProvider
        );

      console.log(
        "Google User:",
        result.user
      );

      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signin-container">

      <h1>Welcome Back 👋</h1>

      <p>
        Continue your learning journey
        and pick up where you left off.
      </p>

      <form onSubmit={handleSignIn}>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Sign In
        </button>

      </form>

      <div className="divider">
        <span>OR</span>
      </div>

      <button
        type="button"
        className="google-btn"
        onClick={handleGoogleSignIn}
      >
        Continue with Google
      </button>

      <p className="signup-link">
        Don't have an account?{" "}
        <Link to="/signup">
          Sign Up
        </Link>
      </p>

    </div>
  );
};

export default SignIn;