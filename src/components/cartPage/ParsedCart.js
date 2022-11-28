import { cartDataFloat } from "./UserCart";
import { useState } from 'react';
import { Button } from '../buttons.js';
import androidFront from "../../images/electronics/android/androidFront.jpg";
export { userCartArr };

let userCartArr = [ 
];

export function ParsedCart() {
  //Do not change these to useState - load bearing code - React will kick error
  // component (`UserCart`) while rendering a different component (`ParsedCart`)
  let totalQty = 0.0;
  let orderSubTotal = 0.00;
  let orderTaxAmt = 0.0;
  let total$ = 0.0;

  const changeData = (product) => {
    totalQty = totalQty + product.orderQty;
    orderSubTotal = (orderSubTotal + product.orderTotal);
    let formattedSub = orderSubTotal.toFixed(2)
    let x = orderSubTotal / 100;
    orderTaxAmt =( x * 7).toFixed(2);
    total$ = (parseFloat(orderSubTotal) + parseFloat(orderTaxAmt)).toFixed(2);
    cartDataFloat.setData(totalQty, formattedSub, orderTaxAmt, total$);
  };

  const handleQtyChange = (e) => {
      console.log(e.target.value)

  }

  return (
    <div className="parsedCartMasterWrap">
      
      {userCartArr.map((product, name) => (
        <div className="cartWrap" key={product.name}>
          <div className="userCartProductImages">
           { product.image1 }
          </div>
          <div>
            <div className="cartProductsDescriptionWrap">
              <h2 className="cartProductsName">{product.name}</h2>
            </div>
            <div className="cartProductsPriceQtyWrap">
              <div>{product.orderTotal}</div>
              <div>
                {product.orderQty} {changeData(product)}
              </div>
              <div>
                <Button text='Change Qty' onClick={changeData}/>
              <input
                onChange={handleQtyChange}
                className="cartQtyInput"
                placeholder={product.orderQty}
                type="number"
                min="1"
              ></input>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ParsedCart;
