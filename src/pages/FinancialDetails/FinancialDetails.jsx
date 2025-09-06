import "./FinancialDetails.css";
import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const FinancialDetails = () => {
  const [activeCity, setActiveCity] = useState("Albania");
  const openCity = (cityName) => {
    setActiveCity(cityName);
  };

  return (
    <div className="financialdetails">
      <Header />
      <div>
        <br /> <br /> <br /> <br /> <br />
        <header className="financialdetails-container financialdetails-blue-grey">
          <h2>Payment Methods and Delivery</h2>
        </header>
        <div className="financialdetails-padding financialdetails-white">
          <h2>Our Procedure</h2>
          <p>
            We offer some of our best ways to save your money and buy top
            quality clothes at the same time.{" "}
          </p>
          <p>
            We aim to incentivise your savings by setting saving goals. We do
            this by planning to put money into big purchase funds.{" "}
          </p>
          <p>Saving pot grow feels closer to what you’re working towards. </p>
        </div>{" "}
        <hr className="hrfinancialdetails" />
        <div className="financialdetails-center">
          <h2>Our Benefits</h2>
          <p>Here you will find some of advantages that we offer.</p>{" "}
        </div>
        <div className="financialdetails-row-padding financialdetails-center">
          <div className="financialdetails-third">
            <div className="financialdetails-card financialdetails-container onethirdcontainer">
              <h3>Convenience</h3>
              <br />
              <i class="fa fa-desktop financialdetails-text-theme onethirdcontainericon"></i>
              <p>Shop anytime, anywhere</p>
              <p>Competitive prices</p>
              <p>Frequent purchase with minimal effort</p>

              <p>Online shopping possibility</p>
            </div>
          </div>

          <div className="financialdetails-third">
            <div className="financialdetails-card financialdetails-container twothirdcontainer">
              <h3>Wide selection</h3>
              <br />
              <i className="fa fa-signal financialdetails-text-theme twothirdcontainericon"></i>
              <p>More than clothes</p>
              <p>Quality over quantity</p>
              <p>Different sizes and shapes for everyone</p>
              <p>Large product variety</p>
            </div>
          </div>

          <div className="financialdetails-third">
            <div className="financialdetails-card financialdetails-container threethirdcontainer">
              <h3>On-the-spot purchasing methods</h3>
              <br />
              <i className="fa fa-credit-card financialdetails-text-theme threethirdcontainericon"></i>
              <p>Direct</p>
              <p>Information for all the bought products </p>
              <p>Easy</p>
              <p>Non-timely</p>
            </div>
          </div>
        </div>
        <div className="financialdetails-container">
          <div className="financialdetails-center"></div>
          <br />

          <hr />

          <div className="financialdetails-center">
            <h2> More Questions</h2>
            <p>
              Here you will find frequently asked questions and information
              about the shipping details.
            </p>
          </div>
        </div>
        <div className="financialdetails-row-padding">
          <div className="financialdetails-half">
            <div className="financialdetails-card">
              <div className="financialdetails-container financialdetails-indigo">
                <h3>FAQ</h3>
              </div>

              <ul className="financialdetails-ul">
                <li>
                  <h3>Can I track my order?</h3>
                  <p>
                    {" "}
                    We will send you the tracking code of the shipment when the
                    parcel has been sent.
                  </p>
                </li>
                <li>
                  <h3>Do I have to order online?</h3>
                  <p>
                    Online ordering is preferred in most cases, but you also can
                    per fax: +355 67 579 7757.{" "}
                  </p>
                </li>
                <li>
                  <h3>Do you have the product in stock?</h3>
                  <p>
                    All the products are available. Order lead time depends on
                    the products and quantities.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="financialdetails-half">
            <div className="financialdetails-card">
              <div className="financialdetails-container financialdetails-theme">
                <h3>Shipping Details Based On Country</h3>
              </div>
              <ul className="financialdetails-ul financialdetails-border-top">
                <li>
                  <h3>Albania</h3>
                  <p>
                    100% of the product cost *We currently operate only in
                    Albania.
                  </p>
                </li>
                <li>
                  <h3>EU Countries</h3>
                  <p>100% of the product cost + 20EUR extra shipping</p>
                </li>
                <li>
                  <h3>Asian Countries</h3>
                  <p>100% of the product cost + 50EUR extra shipping</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="financialdetails-row-padding">
          <div className="financialdetails-third">
            <div className="financialdetails-card">
              <img
                src="https://cdn.prod.website-files.com/64db80a5e88c6b1723ff7649/67309f7926c64818a9101b77_multiple%20payment%20options.png"
                width="485.2"
              />
              <div className="financialdetails-container">
                <p>
                  <b>What payment methods can I use?</b>
                </p>
                <p>
                  {" "}
                  You can use all the major credit cards. If you are a customer
                  with established customer relationship with Zet Cartopia. you
                  are able to use invoice as a payment method on our online
                  shopping checkout process. If invoicing option is not
                  activated for you although you are repeated customer , please
                  contact under hytest@hytest.fi and notify us accordingly.
                </p>
              </div>
            </div>
          </div>

          <div className="financialdetails-third">
            <div className="financialdetails-card-3">
              <img
                src="https://images.saymedia-content.com/.image/t_share/MTk2OTk2NjUzMjAxMjM3NzY1/online-shopping-sites-benefits.png"
                alt="Car"
                className="onehundredpercentthefinancialdetails"
                width="485.2"
                height="273"
              />
              <div className="financialdetails-container">
                <p>
                  <b> Why should I buy online?</b>
                </p>
                <p>
                  {" "}
                  By ordering online you will you will get prices faster and you
                  will be able to go through order confirmation and payment
                  process much faster. This could save days of your time.
                  Traceability: You will have easy access to all of your
                  previous orders any time you want. Reordering: you can make a
                  re-order anytime based on your previous orders by only couple
                  of clicks.
                </p>
              </div>
            </div>
          </div>

          <div className="financialdetails-third">
            <div className="financialdetails-card-3">
              <img
                src="https://img.freepik.com/free-photo/latest-news-subscribe-update_53876-120299.jpg"
                alt="Car"
                className="onehundredpercentthefinancialdetails"
                width="485.2"
                height="273"
              />
              <div className="financialdetails-container">
                <p>
                  <b> An update soon </b>
                </p>

                <p>
                  Currently, we would like to point out that we operate our
                  services only in Albania; however, we are planning to extend
                  this to other countries, including Europian and Asian
                  countries too. We have left a currency conversion table for
                  you, so you can calculate and consider the prices when you buy
                  products yourself. We wish you a nice shopping to our site,
                  thanks!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="financialdetails-container">
          <hr />

          <div className="financialdetails-center">
            <p className="financialdetails-large">
              Currency Exchange Tab (for future use){" "}
            </p>
          </div>
          <div className="financialdetails-card-3">
            <table className="financialdetails-table financialdetails-bordered">
              <thead>
                <tr className="financialdetails-theme">
                  <th>Country</th>
                  <th>Currency Name</th>
                  <th>To ALL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EU Countries</td>

                  <td>Euro</td>
                  <td>1 EUR = 99.3 ALL</td>
                </tr>
                <tr>
                  <td>China</td>
                  <td>Yuan</td>
                  <td>1 Yuan= 12.35 ALL</td>
                </tr>
                <tr>
                  <td>Japan</td>
                  <td>Yen</td>
                  <td>1 Yen= 0.61 ALL</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr />
        </div>
        <div className="financialdetails-container">
          <h2 className="financialdetails-center">Country Addresses</h2>
          <div className="financialdetails-border">
            <div className="financialdetails-bar financialdetails-theme">
              <button
                className={
                  "financialdetails-bar-item financialdetails-button financialdetails-padding-16 " +
                  (activeCity === "Albania" ? "financialdetails-dark-grey" : "")
                }
                onClick={() => openCity("Albania")}
              >
                Albania
              </button>
              <button
                className={
                  "financialdetails-bar-item financialdetails-button financialdetails-padding-16 " +
                  (activeCity === "EUCountries"
                    ? "financialdetails-dark-grey"
                    : "")
                }
                onClick={() => openCity("EUCountries")}
              >
                EU Countries
              </button>
              <button
                className={
                  "financialdetails-bar-item financialdetails-button financialdetails-padding-16 " +
                  (activeCity === "AsianCountries"
                    ? "financialdetails-dark-grey"
                    : "")
                }
                onClick={() => openCity("AsianCountries")}
              >
                Asian Countries
              </button>
            </div>

            <div
              id="Albania"
              className="financialdetails-container city financialdetails-animate-opacity"
              style={{ display: activeCity === "Albania" ? "block" : "none" }}
            >
              <br /> <br />
              <p>“5 Maji” St., Postal Code 1001, Tirana, Albania.</p>
            </div>

            <div
              id="EUCountries"
              className="financialdetails-container city financialdetails-animate-opacity"
              style={{
                display: activeCity === "EUCountries" ? "block" : "none",
              }}
            >
              <br /> <br />
              <p>Bourscheid L-9140 Diekirch, Postal Code 3003, LUXEMBOURG.</p>
            </div>

            <div
              id="AsianCountries"
              className="financialdetails-container city financialdetails-animate-opacity"
              style={{
                display: activeCity === "AsianCountries" ? "block" : "none",
              }}
            >
              <br /> <br />
              <p>WANG WEI. 234 CHE PING STREET.</p>
            </div>
          </div>

          <hr />
          <br />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FinancialDetails;
