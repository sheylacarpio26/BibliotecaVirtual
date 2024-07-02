import React from "react";
import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await logOut();
    navigate("/");
  };
  return (
    <>
      <div>Welcome , {user?.displayName}</div>
      <button onClick={handleSignOut}>Log Out</button>
    </>
  );
};

export default Account;
