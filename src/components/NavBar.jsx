import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import logo from "../assets/GreenNest Logo.png";
import { Menu, X } from "lucide-react";
import toast from "react-hot-toast";
import LazyImage from "./LazyImage";

const NavBar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileTriggerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const closeMobileMenu = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 1023px)").matches
    ) {
      try {
        mobileMenuRef.current?.blur?.();
        mobileTriggerRef.current?.blur?.();
        if (
          document.activeElement &&
          typeof document.activeElement.blur === "function"
        ) {
          document.activeElement.blur();
        }
      } catch {
        void 0;
      }
      setMenuOpen(false);
    }
  }, []);

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? "text-emerald-600 font-semibold" : "hover:text-emerald-500"
    }`;

  const NavLinks = (
    <>
      <li>
        <NavLink to="/" end className={navLinkClass} onClick={closeMobileMenu}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/plants"
          className={navLinkClass}
          onClick={closeMobileMenu}
        >
          Plants
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={navLinkClass}
          onClick={closeMobileMenu}
        >
          My Profile
        </NavLink>
      </li>
      <li className="md:hidden">
        {!user ? (
          <div className="flex gap-2">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-4 py-1.5 text-sm rounded-full transition-all border ${
                  isActive
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : "border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white"
                }`
              }
              onClick={closeMobileMenu}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `px-4 py-1.5 text-sm rounded-full transition-all ${
                  isActive
                    ? "bg-emerald-700 text-white"
                    : "bg-emerald-600 text-white hover:bg-emerald-700"
                }`
              }
              onClick={closeMobileMenu}
            >
              Register
            </NavLink>
          </div>
        ) : null}
      </li>
    </>
  );
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setMenuOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <section className="bg-green-100 md:bg-green-700 p-0 md:p-2 backdrop-blur-sm sticky top-0 z-50 border-emerald-200 shadow-sm">
      <div className="navbar md:bg-white px-0 py-0 md:px-4 font-medium w-11/12 md:w-10/12 mx-auto md:rounded-full md:shadow-sm">
        <div className="navbar-start">
          <button
            tabIndex={0}
            className="btn btn-ghost p-0 hover:bg-transparent lg:hidden mr-2 rounded-full"
            onClick={() => setMenuOpen((v) => !v)}
            ref={mobileTriggerRef}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <Link className="bg-transparent shadow-none border-0" to="/">
            <LazyImage
              className="w-24 h-8 md:w-36 md:h-10 object-contain "
              src={logo}
              alt="GreenNest Logo"
              fetchPriority="low"
            />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-gray-700">
            {NavLinks}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {!user ? (
            <div className="hidden sm:flex gap-2">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `btn btn-sm rounded-full transition-all border ${
                    isActive
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `btn btn-sm rounded-full transition-all ${
                    isActive
                      ? "bg-emerald-700 text-white"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`
                }
              >
                Register
              </NavLink>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div
                  title={user?.displayName || user?.email}
                  className="w-10 rounded-full"
                >
                  <LazyImage
                    referrerPolicy="no-referrer"
                    alt={user?.displayName || "User"}
                    src={user?.photoURL || "/images/avatar-placeholder.svg"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-1 p-0 shadow bg-emerald-50 rounded-box w-64"
              >
                <div className="px-4 py-3 border-b border-emerald-100 bg-linear-to-r from-emerald-600 to-emerald-500 rounded-t-box">
                  <p className="text-xs font-medium text-emerald-100 uppercase tracking-wider">
                    Signed in as
                  </p>
                  <div className="flex items-center mt-2 gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/40">
                      <LazyImage
                        className="w-full h-full object-cover"
                        src={user?.photoURL || "/images/avatar-placeholder.svg"}
                        alt=""
                      />
                    </div>
                    <p className="text-sm font-medium text-white truncate max-w-44">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <li>
                  <Link
                    to="/profile"
                    className="px-4 py-2.5 text-sm hover:bg-emerald-100"
                  >
                    {user?.displayName}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={async () => {
                      try {
                        await logout();
                        toast.success("Logged out");
                      } catch {
                        void 0;
                      }
                    }}
                    className="px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className="absolute top-0 left-0 right-0 bg-white shadow-md rounded-b-2xl pt-16 pb-6 px-6"
          >
            <button
              className="btn btn-ghost btn-sm absolute right-2 top-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            <ul className="menu menu-lg gap-2 text-gray-700">{NavLinks}</ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default NavBar;
