import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";

function CartScreen() {
  const { id } = useParams();
  const location = useLocation(); // gives { pathname, search, hash, state, key }

  const productId = id;
  const qty = Number(new URLSearchParams(location.search).get("qty")) || 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log("cartItems:", cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>CartScreen</div>;
}

export default CartScreen;
