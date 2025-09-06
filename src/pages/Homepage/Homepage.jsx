import "./Homepage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
};
const Homepage = () => {
  return (
    <div className="homepage">
      <Header /> <br /> <br />
      <div>
        <div className="homepagelightgrey">
          <header className="homepagecontainer homepagecenter homepagepadding48 homepagewhite">
            <h1 className="homepagexxxlarge">
              <b className="bolduppercasehomepage">E-Commerce Shop</b>
            </h1>
            <h6>
              Welcome to our store, the{" "}
              <span className="homepagetag"> Zen Cartopia </span>
            </h6>
          </header>

          <div className="homepagerow homepagepadding">
            <div className="homepagecol l8">
              <div className="homepagecontainer homepagewhite homepagemargin homepagepaddinglarge">
                <div className="homepagecenter">
                  <h3>Who we are</h3>
                </div>

                <div>
                  <p>
                    <strong>Welcome to us! </strong>
                    We are an Albanian e-commerce corporation headquartered near
                    Tirana, Albania, and at the same time one of the world's
                    largest supplier of jewellery, bags and clothes with revenue
                    in excess of ALL $46 million in our fiscal year 2025 The
                    company was founded on January 25, 2023, as "Zen Cartopia",
                    by our head leader, Vanessa Barrett. Feel free to have a look
                    at us and our employees:
                  </p>
                  <p>
                    You would probably like to meet us in person, here is a
                    picture of us for you to see who we are!
                  </p>
                  <ul>
                    <li> First Photo: Vanessa Barrett, Leader </li>
                    <li> Second Photo: Nathaniel Griffith, Employee </li>
                    <li> Third Photo: Brian Myers, Employee </li>
                    <li> Fourth Photo: Bryce Hicks, CEO of Zet Cartopia </li>
                    <li> Fifth Photo: Alisa Parker, HR Coordinator </li>
                  </ul>

                  <div>
                    <Carousel responsive={responsive}>
                      <img
                        src="src\assets\firstprojectphoto.png"
                        width="278"
                        height="218"
                        style={{ marginLeft: "20px" }}
                      />
                      <img
                        src="src\assets\secondprojectphoto.png"
                        width="278"
                        height="218"
                        style={{ marginLeft: "25px" }}
                      />
                      <img
                        src="src\assets\thirdprojectphoto.jpeg"
                        width="278"
                        height="218"
                        style={{ marginLeft: "19px" }}
                      />
                      <img
                        src="src\assets\fourthprojectphoto.webp"
                        width="278"
                        height="218"
                        style={{ marginLeft: "19px" }}
                      />
                      <img
                        src="src\assets\fifthprojectphoto.jpg"
                        width="278"
                        height="218"
                        style={{ marginLeft: "19px" }}
                      />
                    </Carousel>
                  </div>

                  <br />
                </div>
              </div>
              <hr />
              <div className="homepagecontainer homepagewhite homepagemargin homepagepaddinglarge">
                <div className="homepagecenter">
                  <h3>What we offer</h3>
                </div>

                <div>
                  <p>
                    Our products feature a wide range of accessories, from bags
                    to clothes and jewellery. All the things, all the ways.
                    Stores are at the center of how we get the right products to
                    guests at the time that’s right for them. We move millions
                    of unique items through our supply chain and stores daily to
                    make Zet Cartopia the easiest place to shop.
                  </p>
                </div>
                <Carousel responsive={responsive}>
                  <img
                    src="src\assets\firstprojectphotosecondset.jpg"
                    width="278"
                    height="258"
                    style={{ marginLeft: "19px" }}
                  />
                  <img
                    src="src\assets\secondprojectphotosecondset.webp"
                    width="278"
                    height="258"
                    style={{ marginLeft: "25px" }}
                  />
                  <img
                    src="src\assets\thirdprojectphotosecondset.avif"
                    width="278"
                    height="258"
                    style={{ marginLeft: "19px" }}
                  />
                  <img
                    src="src\assets\fourthprojectphotosecondset.webp"
                    width="278"
                    height="258"
                    style={{ marginLeft: "19px" }}
                  />
                  <img
                    src="src\assets\fifthprojectphotosecondset.jpg"
                    width="278"
                    height="258"
                    style={{ marginLeft: "19px" }}
                  />
                </Carousel>
              </div>

              <div className="homepagecontainer homepagewhite homepagemargin homepagepaddinglarge">
                <div className="homepagecenter">
                  <h3>Return and Exchanges</h3>
                  <h5>As of March 25, 2025</h5>
                </div>

                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Mk6d_FGwt9AH0nXMuJ4-3n22_hpdCCmE2w&s"
                    width="182"
                    height="200"
                    alt="Image"
                    className="homepagereturnexchanges"
                  />
                  <p>
                    <strong>To be noted: </strong>{" "}
                  </p>
                  <p>
                    Any order that is purchased from us must be returned or
                    exchanged in a timespan of 60 days. If you are not
                    satisfied, you are free to return to us for a refund. You
                    should also be in charge of your own shipping charges. You
                    are advised to please try the following before shipping,
                    before returning for a refund, exchange or warranty request:
                    <br /> <br />
                    1 - Place a copy of your order receipt in the shipping box
                    with the item(s) you are returning. <br />
                    2 - Make sure to include your order number, email, first and
                    last name.
                    <br />
                    3 - Indicate the reason for your return. <br />
                    4 - State clearly if you would like a refund or exchange.
                    <br />
                    <br />
                    *** The shipping fees are non-refundable.
                  </p>
                </div>
              </div>
            </div>

            <div className="homepagecol l4">
              <div className="homepagemargin">
                <img
                  src="src\assets\firstprojectphoto.png"
                  alt="Vanessa"
                  className="width100homepage"
                  height="320"
                />
                <div className="homepagecontainer homepageblack">
                  <h4>Our director</h4>
                  <p>
                    With an experience of several years, I am now the Chief
                    Executive Officer at Zet Cartopia, one of the most famous
                    companies in Albania. For any queries you may have, do not
                    hesitate us to contact me in the following e-mail:
                    vanessa.barrett@zetcartopia.al{" "}
                  </p>
                </div>
              </div>
              <hr />

              <div className="homepagewhite homepagemargin">
                <div className="homepagecontainer homepagepadding homepageblack">
                  <h4>Popular Posts</h4>
                </div>
                <ul className="homepageul homepagewhite">
                  <li>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0638/2659/1966/files/oK2OFZQpA3AO7qayzCfBwcBOlL1tnO9DvRqH5DmYMyY.png?v=1732331893&width=1400&quality=75&height=1750&crop=center"
                      alt="Image"
                      className="homepagemarginright width50homepage"
                    />
                    <span className="homepagelarge">Sweaters</span>
                    <br />
                    <span>
                      Complex Shop Picks: Brand New Sweaters to Ring in the New
                      Year : "New year, new..."{" "}
                      <a href="https://www.complex.com/style/a/shinnie-park/complex-shop-picks-knitwear-sweaters-new-year-2025-malbon-eastsidegolf">
                        {" "}
                        Read more{" "}
                      </a>
                    </span>
                  </li>
                  <li>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzCINXMUbqCfb_MnCjyooBavt2dYK-gVrBQ&s"
                      alt="Image"
                      className="homepagemarginright width50homepage"
                    />
                    <span className="homepagelarge">Jewellery</span>
                    <br />
                    <span>
                      At the Academy Awards in 1970, neither Best Actress Maggie
                      Smith nor the...{" "}
                      <a href="https://www.vogue.co.uk/gallery/best-jewellery-2025-oscars">
                        {" "}
                        Read more{" "}
                      </a>
                    </span>
                  </li>
                  <li>
                    <img
                      src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2203928198.jpg?q=w_2000,c_fill/f_webp"
                      alt="Image"
                      className="homepagemarginright width50homepage"
                    />
                    <span className="homepagelarge">Trends</span>
                    <br />
                    <span>
                      The Fall-Winter 2025 edition of Paris Fashion Week ended
                      Tuesday night, with...{" "}
                      <a href="https://edition.cnn.com/2025/03/07/style/paris-fashion-week-celebrity-looks-fall-winter-2025">
                        {" "}
                        Read more{" "}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <hr />

              <div className="homepagewhite homepagemargin">
                <div className="homepagecontainer homepagepadding homepageblack">
                  <h4>Watch us on the Youtube here</h4>
                </div>
                <div className="homepagecontainer homepagewhite">
                  <div className="homepagecontainer homepagesection height200homepage">
                    <iframe
                      width="396"
                      height="200"
                      src="https://www.youtube.com/embed/3DdJ1JynG8M?si=SPMRrNZGsSGQczae"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <hr />

              <div className="homepagewhite homepagemargin">
                <div className="homepagecontainer homepagepadding homepageblack">
                  <h4>Our benefits</h4>
                </div>
                <div className="homepagecontainer homepagewhite">
                  <p>
                    {" "}
                    <i className="fa fa-truck iconfonthomepage"></i> Fast
                    product return{" "}
                  </p>
                  <p>
                    {" "}
                    <i className="fa fa-dollar iconfonthomepage"></i> Huge
                    discounts and affordable marketing{" "}
                  </p>
                  <p>
                    {" "}
                    <i className="fa fa-thumbs-up iconfonthomepage"></i>{" "}
                    Above-average reviews
                  </p>
                  <p>
                    {" "}
                    <i className="fa fa-globe iconfonthomepage"></i> Global
                    access{" "}
                  </p>
                </div>
              </div>
              <hr />

              <hr />

              <div className="homepagewhite homepagemargin">
                <div className="homepagecontainer homepagepadding homepageblack">
                  <h4>Our endorsements</h4>
                </div>
                <div className="homepagecontainer homepagexlarge homepagepadding">
                  <br />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPbBqmmHJHoyXD4DN-4FdjgwucUUBajbdB6eBatN2II3DZyimp"
                    alt="Image"
                    width="100"
                    height="32"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
                    alt="Image"
                    width="100"
                    height="32"
                    className="logostylinghomepage"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aliexpress_logo.svg/2560px-Aliexpress_logo.svg.png"
                    alt="Image"
                    width="100"
                    height="32"
                    className="logostylinghomepage"
                  />
                  <br /> <br />
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
