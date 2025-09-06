import "./Footer.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Footer = () => {
  return (
    <div className="footerclass">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/1165876da6.js"
          crossOrigin="anonymous"
        >
          {" "}
        </script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          precedence="default"
        />
      </Helmet>
      <footer id="footer">
        <div className="footercontainer">
          <div className="footer-content">
            <h3 className="footer-h3">Contact Us</h3>
            <p>Email: Info@zetcartopia.com</p>
            <p>Phone: +355 67 579 7757</p>
            <p>Address: “5 Maji” St., Postal Code 1001, Tirana, Albania. </p>
          </div>
          <div className="footer-content">
            <h3 className="footer-h3">Quick Links</h3>
            <ul className="list">
              <li>
                <Link to="/homepage" className="footeranchor">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/financialdetails" href="" className="footeranchor">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footeranchor">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/ourproducts" className="footeranchor">
                  Our Products
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="footeranchor">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h3 className="footer-h3">Opening Hours</h3>
            <ul className="list">
              <li> Monday-Friday: 09:30-17:30</li>
              <li> Saturday: 09:30-15:30 </li>
              <li> Sunday is holiday.</li>
            </ul>
          </div>
          <div className="footer-content">
            <h3 className="footer-h3"> Follow Us</h3>
            <ul className="social-icons">
              <li>
                <a href="" className="footeranchor">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="" className="footeranchor">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="" className="footeranchor">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="" className="footeranchor">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-bar">
          <p>&copy; 2025 Zet Cartopia. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
