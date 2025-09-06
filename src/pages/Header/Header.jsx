import "./Header.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Header = () => {
  return (
    <div>
      <Helmet>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="assets/css/styles.css"
          precedence="default"
        />
      </Helmet>
      <header className="header">
        <nav className="nav headercontainer">
          <div className="nav__data">
            <div className="nav__logo">
              {" "}
              <i className="fas fa-shopping-bag"></i> Zet Cartopia{" "}
            </div>
          </div>

          <div>
            <ul className="nav__list">
              <li>
                <Link to="/homepage" className="nav__link">
                  Home
                </Link>{" "}
              </li>
              <li>
                <Link to="/financialdetails" className="nav__link">
                  Financial Details
                </Link>
              </li>

              <li className="dropdown__item">
                <div className="nav__link">
                  Sales <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul className="dropdown__menu">
                  <li>
                    <Link to="/dashboard" className="dropdown__link">
                      <i className="ri-pie-chart-line"></i> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/create-product" className="dropdown__link">
                      <i className="ri-arrow-up-down-line"></i> Sell a product
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/ourproducts" className="nav__link">
                  Our Products
                </Link>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  {" "}
                  User <i className="ri-arrow-down-s-line dropdown__arrow"></i>{" "}
                </div>
                <ul className="dropdown__menu">
                  <li>
                    <a href="#footer" className="dropdown__link">
                      <i className="ri-user-line"></i> Contact
                    </a>
                  </li>
                  <li>
                    <Link to="/faq" className="dropdown__link">
                      <i className="ri-lock-line"></i> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="dropdown__link">
                      <i className="ri-message-3-line"></i> Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
