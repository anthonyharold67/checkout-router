import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";

const url = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(true);

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setProducts(data);
      setLoading(false)
    } catch (error) {

    }
  };

  useEffect(() => {
    getData();
  }, []);
  const handlePlus = async (item) => {
    try {
      await axios.put(`${url}/${item.id}`, {
        ...item,
        amount: Number(item.amount) + 1,
      });
      getData();
    } catch (error) {}
  };

  const handleMinus = async (item) => {
    if (item.amount - 1 !== 0) {
      try {
        await axios.put(`${url}/${item.id}`, {
          ...item,
          amount: Number(item.amount) - 1,
        });
        getData();
      } catch (error) {
        console.log(error);
      }
    } else {
      handleRemove(item.id);
    }
  };
  const handleRemove = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-3">
      <div
        className={
          products.length > 0 ? "bg-light d-sm-block d-md-flex" : "bg-light"
        }>
        {loading ? (
          <p className="text-center text-danger w-100">Loading....</p>
        ) : products.length > 0 ? (
          <>
            <article id="product-panel" className="col-md-5">
              {products.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  handlePlus={handlePlus}
                  handleMinus={handleMinus}
                  handleRemove={handleRemove}
                />
              ))}
            </article>
            <article className="col-md-5 m-3">
              <CardTotal products={products} />
            </article>
          </>
        ) : (
          <p className="text-center text-danger w-100">No products data...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
