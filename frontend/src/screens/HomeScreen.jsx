import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function HomeScreen() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  let keyword = location.search;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error}</Message>
      ) : (
        <Row>
          {products.length === 0 && (
            <Message variant="info">
              No results found for '{params.get("keyword")}'
            </Message>
          )}
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
