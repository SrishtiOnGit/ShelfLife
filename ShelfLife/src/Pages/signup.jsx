import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, googleProvider } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";

import "./signup.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      console.log(
        "Account Created:",
        userCredential.user
      );

      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
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
    <div className="signup-container">

      <h1>Join ShelfLife 🚀</h1>

      <p>
        Start tracking your books,
        courses, projects, and goals.
      </p>

      <form onSubmit={handleSignUp}>

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
          placeholder="Create a password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit"
        className="signup-btn">
          Create Account
        </button>

      </form>

      <div className="divider">
        <span>OR</span>
      </div>

      <button
        type="button"
        className="google-btn"
        onClick={handleGoogleSignUp}
      >
        Continue with Google
      </button>

      <p className="signin-link">
        Already have an account?{" "}
        <Link to="/signin">
          Sign In
        </Link>
      </p>

    </div>
  );
};

export default SignUp;