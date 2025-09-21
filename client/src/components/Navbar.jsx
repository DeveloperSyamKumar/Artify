// import React, { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import {
//   FaHome,
//   FaImages,
//   FaPaintBrush,
//   FaUser,
//   FaSignOutAlt,
//   FaSignInAlt,
//   FaUserPlus,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import logo from "../assets/logo.png";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const [isOpen, setIsOpen] = useState(false);

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//     setIsOpen(false);
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b h-14 sm:h-16 md:h-20"  >
//   <div className="max-w-6xl mx-auto flex items-center justify-between px-3 h-full">
        
//         {/* ✅ Logo on the left */}
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src={logo}
//             alt="Artify Logo"
//             className="h-8 sm:h-10 md:h-20 w-auto"
//           />
//           <span className="text-xl font-bold text-gray-800 hidden sm:inline">
//           The Painted Dream
//           </span>
//         </Link>

//         {/* ✅ Desktop Menu */}
//         <div className="hidden md:flex items-center gap-4">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `flex items-center gap-1 ${
//                 isActive ? "text-indigo-600" : "text-gray-700"
//               }`
//             }
//           >
//             <FaHome /> Home
//           </NavLink>

//           <NavLink
//             to="/gallery"
//             className={({ isActive }) =>
//               `flex items-center gap-1 ${
//                 isActive ? "text-indigo-600" : "text-gray-700"
//               }`
//             }
//           >
//             <FaImages /> Gallery
//           </NavLink>

//           <NavLink
//             to="/customize"
//             className={({ isActive }) =>
//               `flex items-center gap-1 ${
//                 isActive ? "text-indigo-600" : "text-gray-700"
//               }`
//             }
//           >
//             <FaPaintBrush /> Customize
//           </NavLink>

//           {token ? (
//             <>
//               <NavLink
//                 to="/profile"
//                 className={({ isActive }) =>
//                   `flex items-center gap-1 ${
//                     isActive ? "text-indigo-600" : "text-gray-700"
//                   }`
//                 }
//               >
//                 <FaUser /> Profile
//               </NavLink>

//               <button
//                 onClick={logout}
//                 className="flex items-center gap-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
//               >
//                 <FaSignOutAlt /> Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <NavLink
//                 to="/login"
//                 className={({ isActive }) =>
//                   `flex items-center gap-1 ${
//                     isActive ? "text-indigo-600" : "text-gray-700"
//                   }`
//                 }
//               >
//                 <FaSignInAlt /> Login
//               </NavLink>

//               <NavLink
//                 to="/register"
//                 className={({ isActive }) =>
//                   `flex items-center gap-1 ${
//                     isActive ? "text-indigo-600" : "text-gray-700"
//                   }`
//                 }
//               >
//                 <FaUserPlus /> Register
//               </NavLink>
//             </>
//           )}
//         </div>

//         {/* ✅ Mobile Menu Button */}
//         <button
//           className="md:hidden text-2xl text-gray-700"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* ✅ Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col items-start gap-3 px-4 pb-4 bg-white border-t">
//           <NavLink
//             to="/"
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               `flex items-center gap-2 ${
//                 isActive ? "text-indigo-600" : "text-gray-700"
//               }`
//             }
//           >
//             <FaHome /> Home
//           </NavLink>

//           <NavLink
//             to="/gallery"
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               `flex items-center gap-2 ${
//                 isActive ? "text-indigo-600" : "text-gray-700"
//               }`
//             }
//           >
//             <FaImages /> Gallery
//           </NavLink>

//           <NavLink
//             to="/customize"
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               `flex items-center gap-2 ${
//                 isActive ? "text-indigo-600" : "text-gray-700"
//               }`
//             }
//           >
//             <FaPaintBrush /> Customize
//           </NavLink>

//           {token ? (
//             <>
//               <NavLink
//                 to="/profile"
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 ${
//                     isActive ? "text-indigo-600" : "text-gray-700"
//                   }`
//                 }
//               >
//                 <FaUser /> Profile
//               </NavLink>

//               <button
//                 onClick={logout}
//                 className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
//               >
//                 <FaSignOutAlt /> Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <NavLink
//                 to="/login"
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 ${
//                     isActive ? "text-indigo-600" : "text-gray-700"
//                   }`
//                 }
//               >
//                 <FaSignInAlt /> Login
//               </NavLink>

//               <NavLink
//                 to="/register"
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 ${
//                     isActive ? "text-indigo-600" : "text-gray-700"
//                   }`
//                 }
//               >
//                 <FaUserPlus /> Register
//               </NavLink>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaImages,
  FaPaintBrush,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth(); // use context for login state

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b h-14 sm:h-16 md:h-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-3 h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Artify Logo" className="h-8 sm:h-10 md:h-20 w-auto" />
          <span className="text-xl font-bold text-gray-800 hidden sm:inline">
            The Painted Dream
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive ? "text-indigo-600" : "text-gray-700"}`
            }
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive ? "text-indigo-600" : "text-gray-700"}`
            }
          >
            <FaImages /> Gallery
          </NavLink>

          <NavLink
            to="/customize"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive ? "text-indigo-600" : "text-gray-700"}`
            }
          >
            <FaPaintBrush /> Customize
          </NavLink>

          {currentUser ? (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center gap-1 ${isActive ? "text-indigo-600" : "text-gray-700"}`
                }
              >
                <FaUser /> Profile
              </NavLink>

              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
              >
                <FaSignOutAlt /> Logout
              </button>

              {/* Cart Button */}
              <CartDrawer user={currentUser} />
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `flex items-center gap-1 ${isActive ? "text-indigo-600" : "text-gray-700"}`
                }
              >
                <FaSignInAlt /> Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `flex items-center gap-1 ${isActive ? "text-indigo-600" : "text-gray-700"}`
                }
              >
                <FaUserPlus /> Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-3 px-4 pb-4 bg-white border-t">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${isActive ? "text-indigo-600" : "text-gray-700"}`
            }
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${isActive ? "text-indigo-600" : "text-gray-700"}`
            }
          >
            <FaImages /> Gallery
          </NavLink>

          <NavLink
            to="/customize"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${isActive ? "text-indigo-600" : "text-gray-700"}`
            }
          >
            <FaPaintBrush /> Customize
          </NavLink>

          {currentUser ? (
            <>
              <NavLink
                to="/profile"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${isActive ? "text-indigo-600" : "text-gray-700"}`
                }
              >
                <FaUser /> Profile
              </NavLink>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
              >
                <FaSignOutAlt /> Logout
              </button>

              {/* Cart Button */}
              <CartDrawer user={currentUser} />
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${isActive ? "text-indigo-600" : "text-gray-700"}`
                }
              >
                <FaSignInAlt /> Login
              </NavLink>

              <NavLink
                to="/register"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${isActive ? "text-indigo-600" : "text-gray-700"}`
                }
              >
                <FaUserPlus /> Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
