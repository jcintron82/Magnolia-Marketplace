import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import androidFront from "../../../images/electronics/android/androidFront.jpg";
import androidBack from "../../../images/electronics/android/androidBack.jpg";
import androidBoth from "../../../images/electronics/android/androidBoth.jpg";
import ladyHoldingPhone from "../../../images/electronics/android/ladyHoldingPhone.jpg";

const boldText = (value) => {
  return <b>{value}</b>;
};
const liOne = [
  boldText("Overview"),
  <br />,
  "Compatible with all major U.S. carriers, including Verizon, AT&T, Sprint and T-Mobile. Also compatible with prepaid carriers including Cricket Wireless, MetroPCS, Google Fi, Simple Mobile, Total Wireless, Tracfone, Net10, Mint, and H2O.",
];
const liTwo = [
  boldText("Google Tensor G2 "),
  <br />,
  "makes Pixel 7 Pro faster, more efficient, and more secure.₂ And it delivers even more helpful features and the best photo and video quality yet on Pixel.",
];
const liThree = [
  boldText("So smooth, you won’t believe you shot it"),
  <br />,
  "The Pixel 7 Pro 6.7-inch Smooth Display makes everything stunning and immersive.₂ It intelligently adjusts up to 120Hz for smoother, more responsive performance.",
];
const liFour = [
  boldText("OS"),
  <br />,
  "Google Pixel 7 Pro runs on the Android operating system.",
];
const liFive = [
  boldText("Battery"),
  <br />,
  "Pixel's Adaptive Battery can last over 24 hours. Turn on Extreme Battery Saver, and the battery can last up to 72 hours.",
];

const seeMoreSVG = (
  <svg
    width="24px"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
let counter = 0;

export function Android() {
  const imageGallery = [androidFront, androidBoth, androidBack, ladyHoldingPhone];

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const product = {
    name: 'Google Pixel 7 Pro 512GB (Unlocked) - Obsidian',
    price: 979.00.toFixed(2),
    image1: <img src={androidFront} className="productImg"></img>,
    stockQty: 10,
    orderQty: 0,
    orderTotal: 0,
  };

  const handleQtyChange = (e) => {
    setQty(e.target.value);
  };

  const nextImageClick = () => {
    if (counter === imageGallery.length - 1) {
      counter = 0;
      setPic2(imageGallery[counter]);
    } else {
      counter = counter + 1;
      setPic2(imageGallery[counter]);
    }
    setIsEnter(!isEnter);
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  
  const addToCartClick = (product) => {
    const parsedInt = parseInt(qty, 10)
    const productIndex = userCartArr.findIndex((obj => obj.name === product.name))
    falseQtyBreak: if (qty <= 0) {
      break falseQtyBreak;
    }
    else if (userCartArr.includes(userCartArr[productIndex])) {
      userCartArr[productIndex].orderQty = (parseInt(userCartArr[productIndex].orderQty , 10)+ parsedInt);
      userCartArr[productIndex].orderTotal = (product.price * userCartArr[productIndex].orderQty);
    } else {
      product.orderQty = qty;
      product.orderTotal = product.price * product.orderQty;
      userCartArr.push(product);
    }
  };

  return (
    <div className="mainWrap">
      <Header />
      <div className="flip">
        <div className="productNameWrap">
          {" "}
          <div className="productNameHeader">
            {product.name}
            <div className="pricesWrapParent">
              <div className="priceWrap">${product.price}</div>
              {/* <div className="savedPriceWrap">
                <strike className="strikedPrice">$1190.00</strike> Save $300.
              </div> */}
            </div>
          </div>
        </div>
        <div className="imagesAndDescFlexWrap">
          <div className="imageWrap">
            <div className="img">
              <CSSTransition
                in={isEnter}
                timeout={420}
                classNames="imageFadeIn"
              >
                <img
                  className="imageFadeIn"
                  src={pic2}
                  alt="A google Pixel 7 Pro"
                ></img>
              </CSSTransition>
            </div>
            <div className="seeMoreWrap">
              <Button
                text="Image"
                svg={seeMoreSVG}
                onClick={nextImageClick}
                className="seeMoreBtn"
              />
            </div>
          </div>
          <div className="desktopBtnWrap">
            <div className="addToCartBtnWrap">
              <input
                onChange={handleQtyChange}
                className="cartQtyInput"
                placeholder={qty}
                type="number"
                min="1"
              ></input>
              <Button
                text="Add To Cart"
                className="addToCartBtn"
                onClick={(e) => addToCartClick(product)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="detailsWrap">
        <Button
          text="Details"
          className="collapsibleDetailsBtn"
          onClick={handleOpen}
        />
        <CSSTransition in={open} timeout={120} classNames="detailsScroll">
          {open ? (
            <ul className="detailsBoxOne">
              <li>{liOne}</li>
              <li>{liTwo}</li>
              <li> {liThree}</li>
              <li>{liFour}</li>
              <li>{liFive}</li>
            </ul>
          ) : (
            <div></div>
          )}
        </CSSTransition>
      </div>

      <div>
        {" "}
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default Android;
