import React from "react";
import { footerStyles as styles } from "../assets/dummyStyles";
import { Link } from "react-router-dom";
import logo from "../assets/logocar.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className={styles.container}>
      {/* Background circles & line */}
      <div className={styles.topElements}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.roadLine} />
      </div>

      <div className={styles.innerContainer}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Link to="/" className="flex items-center">
              <div className={styles.logoContainer}>
                <img
                  src={logo}
                  alt="logo"
                  className="h-[1em] w-auto block"
                  style={{ display: "block", objectFit: "contain" }}
                />
                <span className={styles.logoText}>KARZØNE</span>
              </div>
            </Link>

            <p className={styles.description}>
              “From the latest luxury models to world-class service, we deliver
              more than rentals—we deliver experiences. Start your dream drive
              today.”
            </p>

            <div className={styles.socialIcons}>
              {[
                FaFacebookF,
                FaTwitter,
                FaInstagram,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, i) => (
                <a href="#" key={i} className={styles.socialIcon}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.sectionTitle}>
              Quick Links
              <span className={styles.underline} />
            </h3>
            <ul className={styles.linkList}>
              {["Home", "Cars", "Contact Us"].map((link, i) => (
                <li key={i}>
                  <a
                    href={
                      link === "Home"
                        ? "/"
                        : link === "Contact Us"
                        ? "/contact"
                        : "/cars"
                    }
                    className={styles.linkItem}
                  >
                    <span className={styles.bullet}></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className={styles.sectionTitle}>
              Contact Us
              <span className={styles.underline} />
            </h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FaMapMarkedAlt className={styles.contactIcon} />
                <span>Mymensingh Engineering College</span>
              </li>

              <li className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>+8801761191134</span>
              </li>

              <li className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>mdtohid232020@gmail.com</span>
              </li>
            </ul>

            <div className={styles.hoursContainer}>
              <h4 className={styles.hoursTitle}>Business Hours</h4>
              <div className={styles.hoursText}>
                <p>Monday - Friday: 8:30 AM - 8:30 PM</p>
                <p>Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={styles.sectionTitle}>
              Newsletter
              <span className={styles.underline}></span>
            </h3>
            <p className={styles.newsletterText}>
              “Subscribe and be the first to know about luxury offers.”
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className={styles.input}
              />
              <button type="submit" className={styles.subscribeButton}>
                <GiCarKey className="mr-2 text-lg sm:text-xl" />
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/*bottom copyrigt */}

        <div className={styles.copyright}>
          <p>&copy:{new Date().getFullYear()} KARZØNE. All rights reserved</p>
          <p className="mt-3 md:mt-0">
            Designed by
            <a
              href="https://hexagondigitalservices.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.designerLink}
            >
              Hexagon Digital Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
