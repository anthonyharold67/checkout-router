import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const initialState = {
  name: "",
  image: "",
  price: "",
  dampingRate: 0.8,
  amount: "",
};

const UpdateProduct = () => {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://63f4e5583f99f5855db9e941.mockapi.io/products/${formData.id}`,
        formData
      );
      navigate(-1)
    } catch (error) {
      console.log(error);
    }
    // getData();
    setFormData(initialState);
  };

  return (
    <div className='container'>
      
      <ProductForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        text="Update"
      />
    </div>
  );
}

export default UpdateProduct