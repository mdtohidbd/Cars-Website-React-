import React, { useRef, useState, useEffect, useCallback } from "react";
import { navbarStyles as styles } from "../assets/dummyStyles";
import logo from "../assets/logocar.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaSignOutAlt, FaTimes, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("authToken")
  );

  const location = useLocation();
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cars", label: "Cars" },
    { to: "/contact", label: "Contact" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync login state with localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("authToken"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Update login state on route change
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("authToken"));
    setIsOpen(false);
  }, [location]);

  // ✅ Fixed: useCallback instead of ussCallback
  const handleLogout = useCallback(() => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/", { replace: true });
    setIsOpen(false);
  }, [navigate]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close menu with Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  // Close menu on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`${styles.nav.base} ${
        scrolled ? styles.nav.scrolled : styles.nav.notScrolled
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div
            className={`${styles.floatingNav.base} ${
              scrolled
                ? styles.floatingNav.scrolled
                : styles.floatingNav.notScrolled
            }`}
            role="navigation"
          >
            <div className="flex items-center justify-between h-16 px-4">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <div className={styles.logoContainer}>
                  <img
                    src={logo}
                    alt="logo"
                    className="h-10 w-auto block"
                    style={{ objectFit: "contain" }}
                  />
                  <span className={styles.logoText}>KARZØNE</span>
                </div>
              </Link>
              <div className={styles.logoContainer}>
                <div className={styles.navLinksInner}>
                  {navLinks.map((link, index) => (
                    <React.Fragment key={link.to}>
                      <Link
                        to={link.to}
                        className={`${styles.navLink.base} ${
                          isActive(link.to)
                            ? styles.navLink.active
                            : styles.navLink.inactive
                        }`}
                      >
                        {link.label}
                      </Link>
                      {index < navLinks.length - 1 && (
                        <div className={styles.separator} aria-hidden="true" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className={styles.userActions}>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className={styles.authButton}
                    aria-label="Logout"
                  >
                    <FaSignOutAlt className="text-base" />
                    <span className={styles.authText}>Logout</span>
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className={styles.authButton}
                    aria-label="Login"
                  >
                  <FaUser className="text-base"/>
                    <span className={styles.authText}>Login</span>
                  </Link>
                )}
              </div>

              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen((p) => !p)}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                  className={styles.mobileAuthButton}
                  ref={buttonRef}
                >
                  {isOpen ? (
                    <FaTimes className="h-5 w-5" />
                  ) : (
                    <FaBars className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={!isOpen}
        className={`${styles.mobileMenu.container} ${
          isOpen ? styles.mobileMenu.open : styles.mobileMenu.closed
        }`}
      >
        <div className={styles.mobileMenuInner}>
          <div className="px-4 pt-3 pb-4 space-y-2">
            <div className={styles.mobileGrid}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`${styles.mobileLink.base} ${
                    isActive(link.to)
                      ? styles.mobileLink.active
                      : styles.mobileLink.inactive
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className={styles.divider} />

            <div className="pt-1">
              {isLoggedIn ? (
                <button onClick={handleLogout} className={styles.mobileAuthButton}>
                  <FaSignOutAlt className="mr-3 text-base" />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className={styles.mobileAuthButton}
                  onClick={() => setIsOpen(false)}
                >
                  <FaUser className="mr-3 text-base" />
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
