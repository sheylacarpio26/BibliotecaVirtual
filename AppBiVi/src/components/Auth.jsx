import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/home");
    } else return;
  }, [user]);

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "91.2vh",
          background:
            "url('https://github.com/sheylacarpio26/BibliotecaVirtual/blob/master/AppBiVi/public/2.jpeg?raw=true')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h4 className="text-white shadow-lg">Welcome To BiVi</h4>
        <h5 className="mt-3 text-white text-center">
          Read Your Favorite Books Now For Free
        </h5>
        <GoogleButton className="mt-3" onClick={handleGoogleSignIn} />
      </div>
    </>
  );
};

export default Auth;
