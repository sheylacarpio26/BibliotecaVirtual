import React from "react";
import { UserAuth } from "../context/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await logOut();
    navigate("/");
  };

  const accNav = () => {
    navigate("/account");
  };

  const favNav = () => {
    navigate("/fav");
  };

  const handleHome = () => {
    navigate("/home");
  };
  return (
    <>
      {user ? (
        <>
          <div className="bg-dark text-white p-2 d-flex justify-content-between align-items-center">
            <h4 onClick={handleHome}> Bienvenido {user.displayName}</h4>
            <Dropdown>
              <Dropdown.Toggle
                className="rounded"
                variant="dark"
                id="dropdown-basic"
              >
                <img
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "5rem",
                  }}
                  src={user.photoURL}
                  alt="userImg"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={accNav}>Cuenta</Dropdown.Item>
                <Dropdown.Item onClick={favNav}>Tus Libros</Dropdown.Item>
                <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </>
      ) : (
        <div className="bg-dark text-white text-center p-2">BIVI APP</div>
      )}
    </>
  );
};

export default Header;
