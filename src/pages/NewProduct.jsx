import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';

const initialState = {
  name: "",
  image: "",
  price: "",
  dampingRate: 0.8,
  amount: "",
};

const NewProduct = () => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://63f4e5583f99f5855db9e941.mockapi.io/products",
        formData
      );
    } catch (error) {
      console.log(error);
    }
    // getData();
    setFormData(initialState);
  };

  return (
    <div className='container'>
      <ProductForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} text="New"/>
    </div>
  );
}

export default NewProduct