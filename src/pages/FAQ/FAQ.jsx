import "./FAQ.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const FAQConstant = () => {
  return (
    <div>
      <Header />

      <div>
        <div>
          <br />
          <div className="faqcontainer faqpadding64 faqpalered">
            <div className="faqcontent">
              <h1 className="faqcenter">
                <b>FAQ + Terms/Conditions</b>
              </h1>
              <img
                className="faqgeneralintroduction"
                src="https://procreator.design/blog/wp-content/uploads/2022/02/Best-UX-Guidelines-for-E-Commerce-1-1.png"
              />
              <p>
                <i>
                  Although we would like that every user uses the website as he
                  should, there are also a set of our guidelines to remember, in
                  order to ensure a safe and free-of-theft shopping environment
                  from your side. Any non-compliance of these can result in
                  severe disciplinary actions from our side as well as the
                  expulsion of the customer from any of our shopping activities.
                  You are free to choose from any of these links to get informed
                  about each of them separately.
                </i>
              </p>
              <br />
              <p className="faqcenter">
                <a href="#faq" className="faqblack faqlarge">
                  FAQ
                </a>
              </p>

              <p className="faqcenter">
                <a href="#termsandconditions" className="faqblack faqlarge">
                  Terms and Conditions
                </a>
              </p>
            </div>
          </div>

          <div className="faqbgimg2" id="faq">
            <section className="faqsection">
              <h1 className="faqtitle"> FAQ </h1>
              <ul className="faq">
                <li>
                  <div className="faqquestion">
                    <span className="faqshiftright"> </span>
                    <span>
                      {" "}
                      <b> 1) How can I order? </b>{" "}
                    </span>
                  </div>
                  <div className="faqanswer">
                    <p>
                      You can order easily using our online platform. When you
                      find a product you need, you can add it to cart, login and
                      go through the ordering process. After the order is ready,
                      you will receive order summary to your email. Order
                      summary will also be stored to your account.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="faqquestion">
                    <span className="faqshiftright"> </span>
                    <span>
                      {" "}
                      <b>
                        {" "}
                        2) What should I do if the payment is not accepted?{" "}
                      </b>{" "}
                    </span>
                  </div>
                  <div className="faqanswer">
                    <p>
                      Please try again in a little while. If the payment is
                      still not accepted, please verify your account balance. If
                      everything is as it should, but you still can't make the
                      payment, please contact us notify us about the problem. We
                      can manage the order manually.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="faqquestion">
                    <span className="faqshiftright"> </span>
                    <span>
                      {" "}
                      <b> 3) What information should I input when ordering? </b>
                    </span>
                  </div>
                  <div className="faqanswer">
                    <p>
                      Kindly note that you should input the following: the title
                      of the product being sold, a detailed explanation of the
                      product, including features and specifications, and the
                      selling price of the product.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="faqquestion">
                    <span className="faqshiftright"> </span>

                    <span>
                      {" "}
                      <b>4) Where is my order? </b>
                    </span>
                  </div>
                  <div className="faqanswer">
                    <p>
                      As a Zet Cartopia Member, you can sign in and head to your
                      order history to easily check the status of all your
                      orders. You can check your order status at any time in our
                      app.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="faqquestion">
                    <span className="faqshiftright"> </span>
                    <span>
                      {" "}
                      <b> 5) Security </b>{" "}
                    </span>
                  </div>
                  <div className="faqanswer">
                    <p>
                      Our web store is secured with SSL certificate. This means
                      the information you input is encrypted and it will not be
                      available for third parties.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="faqquestion">
                    <span className="faqshiftright"> </span>
                    <span>
                      {" "}
                      <b> 6) Can I cancel my order? </b>{" "}
                    </span>
                  </div>
                  <div className="faqanswer">
                    <p>
                      If you want to cancel your order, please do so as soon as
                      possible. If we have already processed your order, you
                      need to contact us as informed in the main page and return
                      the product.{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </section>{" "}
          </div>

          <div
            className="faqcontainer faqpadding64 faqpalered faqcenter"
            id="termsandconditions"
          >
            <div className="faqcontent">
              <h1 className="faqtextgrey">
                <b>Terms and Conditions</b>
              </h1>
              <img
                src="https://media.istockphoto.com/id/1033774358/photo/terms-and-conditions-text-in-legal-agreement-or-document-about-service-insurance-or-loan.jpg?s=612x612&w=0&k=20&c=5GuGVj3fIQuRdXv2NCKQAxKnXlC_eDhYbGrPSIxTnXo="
                className="imgtermsconditions"
              />
              <div className="faqrow">
                <div className="faqhalf">
                  <h2>Legal</h2>
                  <p>
                    1. We have the right to amend, remove or vary our services
                    and/or any part of the Website (including our T&Cs) at any
                    time.
                  </p>
                  <p>
                    2. Pursuant to the Digital Services Act, our average monthly
                    recipients are 33,831,151 for Zet Cartopia.
                  </p>
                  <p>
                    3. In accordance with Proposition 65, we issue the following
                    warning to our customers: "WARNING: The materials used on
                    the exterior of some products may expose you to lead, a
                    chemical that causes birth defects or other reproductive
                    harm.
                  </p>
                </div>
                <div className="faqhalf">
                  <h2>Other</h2>
                  <p>
                    1. If your details change, remember that you need to update
                    your account so we can continue giving you our best service
                    (you can also update your marketing preferences there).
                  </p>
                  <p>
                    2. Please don’t link in a way that suggests any form of
                    approval or endorsement by Zet Cartopia where none exists.{" "}
                  </p>{" "}
                  <p>
                    3. You must not misuse or tamper apps or other services
                    (“Websites”) (i.e. hack, introduce viruses, trojans, worms,
                    logic bombs or carry out denial of service attacks etc.)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="faqcontainer faqpadding64 faqpalered faqcenter faqwide">
            <h1>WISHING YOU A NICE SHOPPING EXPERIENCE!</h1>
            <p className="faqlarge">Remember that you are of value to us.</p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FAQConstant;
