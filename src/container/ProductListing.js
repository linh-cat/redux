import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction"

function ProductListing() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products').catch(err => console.error(err));
    dispatch(setProducts(response.data))
  }

  console.log(products)

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div class="ui">
        <ProductComponent />
    </div>
  );
}

export default ProductListing;
