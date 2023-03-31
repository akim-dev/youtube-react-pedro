import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { async } from "@firebase/util";

export const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const signOutAccount = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <Link to="/">Home</Link>
      {!user ? <Link to="/login">Login</Link> : <Link to="/post">Post</Link>}

      <div>
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} alt="" width="20" height="20" />
            <button onClick={signOutAccount}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};
