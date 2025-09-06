import "./OurProducts.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const OurProducts = () => {
  return (
    <div>
      <Header />
      <div className="ourproducts">
        <div className="ourproductsbgimg1 ourproductsdisplaycontainer ourproductsopacitymin">
          <div className="ourproductsdisplaymiddle">
            <span className="ourproductscenter ourproductspaddinglarge ourproductsblack">
              OUR <span className="ourproductshidesmall"> BEST </span>{" "}
              COMMODITIES
            </span>
          </div>
        </div>

        <div className="ourproductscontent ourproductspadding64">
          <h3 className="ourproductscenter">OUR AVAILABLE ALBUM</h3>
          <p className="ourproductscenter">
            <em>You will love our accessories definitely.</em>
          </p>
          <p>
            Take a look at our most skilled photographer, Alice Baird. She is an
            incredible American portrait photographer known for her strikingly
            intimate and emotional photos. Her career began as a photographer
            for Rolling Stone magazine, where she developed a unique style that
            would redefine celebrity photography. I would like to share some
            feedback from her clients and of course our feedback based on the
            products she photographed.
          </p>
          <div className="ourproductsrow">
            <div className="ourproductscol m6 ourproductscenter ourproductspaddinglarge">
              <p>
                <b>
                  <i className="fa fa-user ourproductsmarginright"></i>Alice
                  Baird
                </b>
              </p>
              <br />
              <img
                src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg"
                className="ourproductsround ourproductsimage ourproductsopacity ourproductshoveropacityoff"
                alt="Photo of Me"
                width="500"
                height="333"
              />
            </div>

            <div className="ourproductscol m6 ourproductshidesmall ourproductspaddinglarge">
              <p>
                "I've been a client of Alice's for several years, and have had
                enjoyed and utilized her talents for professional head shots
                (that I LOVE). Photoshoots of the accessories are fun, easy, low
                key, and always with creative and natural feeling backgrounds
                and surroundings. I highly recommend her for business photo
                shoots, a few people are like her!"
                <br /> <br />
                "Alice had the difficult task of capturing the attention of
                people who were wearing our jewelleries. We couldn’t be happier
                with how our photo shoot came out. Her attention to detail when
                touching up our photos was impressive. We are looking forward to
                using her services again."
              </p>
            </div>
          </div>
        </div>

        <div className="ourproductsbgimg2 ourproductsdisplaycontainer ourproductsopacitymin">
          <div className="ourproductsdisplaymiddle">
            <span className="ourproductsxxlarge ourproductswhitecolor">
              PORTFOLIO
            </span>
          </div>
        </div>

        <div
          className="ourproductscontent ourproductspadding-64"
          id="portfolio"
        >
          <h3 className="ourproductscenter">OUR PRODUCTS</h3>
          <p className="ourproductscenter">
            <em>
              Here are some of our latest products.
              <br /> We hope you will enjoy them.{" "}
            </em>
          </p>
          <br />

          <div className="ourproductsrowpadding ourproductscenter">
            <div className="ourproductscol m3">
              <img
                src="https://d2line.com/thatlook/wp-content/uploads/sites/4/2022/08/evevated-d2line-classic-fashion-style.png"
                className="ourproductshoveropacity hundredpercentwidthourproducts"
                height="238"
                alt="The mist over the mountains"
              />
            </div>

            <div className="ourproductscol m3">
              <img
                src="https://i.pinimg.com/736x/86/97/8f/86978f22d82a03c6b81fc6e1ff1aa444.jpg"
                className="ourproductshoveropacity hundredpercentwidthourproducts"
                height="238"
                alt="Coffee beans"
              />
            </div>

            <div className="ourproductscol m3">
              <img
                src="https://i.pinimg.com/736x/64/bc/76/64bc76d381eb158b8f952e0aa53913dd.jpg"
                className="ourproductshoveropacity hundredpercentwidthourproducts"
                height="238"
                alt="Bear closeup"
              />
            </div>

            <div className="ourproductscol m3">
              <img
                src="https://s0.as-img.com/r/pic/shoe-sample/500/500/drawing.jpg?u=1537766015&bg=ffffff"
                className="ourproductshoveropacity hundredpercentwidthourproducts"
                height="238"
                alt="Quiet ocean"
              />
            </div>
          </div>

          <div className="ourproductsrowpadding ourproductscenter ourproductssection">
            <div className="ourproductscol m3">
              <img
                src="https://cdn.shopify.com/s/files/1/1766/0155/files/Modern_Style_Clothing_Is_All_About_You.webp?v=1707387108"
                className="ourproductshoveropacity hundredpercentwidthourproducts"
                height="238"
                alt="The mist"
              />
            </div>

            <div className="ourproductscol m3">
              <img
                src="https://deih43ym53wif.cloudfront.net/kyoto-geisha-shutterstock_548562244_8a713110bd.jpeg"
                className="ourproductshoveropacity hundredpercentwidthourproducts"
                height="238"
                alt="My beloved typewriter"
              />
            </div>

            <div className="ourproductscol m3">
              <img
                src="https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image002.jpg?v=20210616T144221"
                className="ourproductshoveropacity hundredpercentwidthourproducts"
                height="238"
                alt="Empty ghost train"
              />
            </div>

            <div className="ourproductscol m3">
              <img
                src="https://cdn.prod.website-files.com/67008ba73b4fd0346790d085/67287a3fcb98b3135b1d85ab_67287a28bfcd537179cfaa5b_52b8a1_ce4c8af5e1934ea2a154faf7da88189c~mv2.webp"
                height="238"
                className="ourproductshoveropacity hundredpercentwidthourproducts"
                alt="Sailing"
              />
            </div>
          </div>
        </div>

        <div className="ourproductsbgimg3 ourproductsdisplaycontainer ourproductsopacitymin">
          <div className="ourproductsdisplaymiddle">
            <span className="ourproductsxxlarge ourproductswide ourproductswhitecolor">
              CONTACT US BELOW
            </span>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default OurProducts;
