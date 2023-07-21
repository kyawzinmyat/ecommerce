import { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";
import jwt_decode from "jwt-decode";

const API_HOST = "http://127.0.0.1:8000/api/";

const BasketContext = createContext();
export default BasketContext;

// items = [{pk: itemId, product: productId,quantity: , product_price: , total_price: }]

export const BasketProvider = (props) => {
  let [basketQty, setBasketQty] = useState(0);
  let [subtotal, setSubtotal] = useState(0);
  let [token, setToken] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [items, setItems] = useState([]);
  const {user} = useContext(AuthContext);

  const fetchCartSummary = async () => {
    let response = await fetch(API_HOST + "basket/basket-summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user.user_id }),
    });
    var data = await response.json();
    setItems(data.items);
    setSubtotal(computeSubtotal(data.items));
    console.log(computeSubtotal(data.items));
  };

  const fetchCount = async () => {
    let response = await fetch(API_HOST + "basket/basket-qty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user.user_id }),
    });
    var data = await response.json();
    setBasketQty(data["qty"]);
  };

  const onChangeItem = (itemId, quantity, price) => {
    let isZero = false;
    let alreadyInItems = false;
    const newItems = items.map((item) => {
      if (item.product === itemId || item.pk === itemId) {
        alreadyInItems = true;
        if (item.quantity + quantity === 0) isZero = true;
        return {
          ...item,
          quantity: item.quantity + quantity,
          total_price: (parseFloat(item.total_price) + price).toFixed(2),
        };
      }
      return item;
    });

    if (!alreadyInItems) fetchCartSummary();
    if (!isZero) setItems(newItems);
    else
      setItems(
        newItems.filter((item) => {
          return item.quantity != 0;
        })
      );
  };

  let callAddApi = async (item, quantity) => {
    let response = await fetch(API_HOST + "basket/add-item/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.user_id,
        product_id: item.product || item.id,
        product_qty: quantity,
      }),
    });
    var data = await response.json();
    return response;
  };

  let callRemoveApi = async (item, quantity) => {
    let response = await fetch(API_HOST + "remove-item/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.user_id,
        product_id: item.product,
        product_qty: quantity,
      }),
    });
    var data = await response.json();
    return response;
  };

  const onClickPlusBut = async (item, quantity) => {
    let response = await callAddApi(item, quantity);
    const product_price = item.product_price || item.price;
    if (response.status === 200) {
      setBasketQty(basketQty + quantity);
      setSubtotal(subtotal + product_price * quantity);
    }
    const id = item.id || item.pk;
    onChangeItem(id, quantity, parseFloat(product_price) * quantity);
  };

  const onClickMinusBut = async (item, quantity) => {
    if (item.quantity - quantity >= 0) {
      let response = await callRemoveApi(item, quantity);
      if (response.status === 200) {
        setBasketQty(basketQty - quantity);
        setSubtotal(subtotal - item.product_price * quantity);
      }

      onChangeItem(
        item.pk,
        quantity,
        parseFloat(item.product_price) * quantity
      );
      // shakeBasket();
    }
  };

  useEffect(() => {
    if (user) {
      fetchCartSummary();
      fetchCount();
    }
  }, [user]);

  let contextData = {
    basketQty: basketQty,
    setBasketQty: setBasketQty,
    onChangeItem: onChangeItem,
    items: items,
    subtotal: subtotal,
    setSubtotal: setSubtotal,
    tax: 0,
    onClickPlusBut: onClickPlusBut,
    setToken: setToken
  };

  const computeSubtotal = (cartItmes) => {
    return cartItmes.reduce((subtotal, item) => {
      return subtotal + parseInt(item.total_price);
    }, 0);
  };

  return (
    <BasketContext.Provider value={contextData}>
      {props.children}
    </BasketContext.Provider>
  );
};
