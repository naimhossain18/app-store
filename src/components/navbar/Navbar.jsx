import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
// import profileLogo from "../../assets/profile.jpg";
import logo from "../../assets/apple-logo.avif";
import { AuthContext } from "../../Pages/provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  // const [isHoverd, setIsHoverd] = useState(false);
  const userName = user?.displayName;
  // console.log(userName)

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        alert("succecss sign out");
      })
      .catch((error) => {
        // console.log(error); sdgshdgjhsjdh
      });
  };

  return (
    <div>
      <div className="flex  md:flex-row justify-between items-center">
        <div className="hidden md:block">
          <img className="w-40" src={logo} alt="" />
          {/* <p>{user?.email}</p> */}
        </div>
        <div className="nav flex gap-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-base-300 font-semibold px-4 py-2" : "  py-2 px-4"
            }
            to="/apps"
          >
            Apps
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-base-300 px-4 text- font-semibold py-2"
                : "py-2 px-4"
            }
            to="/profile"
          >
            My Profile
          </NavLink>
        </div>
        <div className="login-btn flex items-center gap-5">
          {user ? (
            <div className="tooltip tooltip-left" data-tip={userName}>
              <img
                // onMouseEnter={() => setIsHoverd(true)}
                // onMouseLeave={() => setIsHoverd(false)}
                className="rounded-full w-14"
                src={user.photoURL}
                alt=""
              />
            </div>
          ) : (
            ""
          )}

          {/* <img src={user? user.photoURL: userIcon} alt="" /> */}

          {/* {user ? (
          <Link
            to={"/auth/login"}
            
            className="btn btn-primary px-10"
          >
            Logout
          </Link>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-10">
            Login
          </Link>
        )} */}
          {/* <button className="btn btn-primary px-10 ">Login</button> */}

          {user ? (
            <Link
              onClick={handleSignOut}
              to={"/auth/login"}
              className="btn btn-primary px-10 "
            >
              LogOut{" "}
            </Link>
          ) : (
            <Link to={"/auth/login"} className="btn btn-primary px-10 ">
              Login{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
