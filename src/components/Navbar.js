import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <div>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} alt="" width="100" height="100" />
      </div>
    </div>
  );
};
