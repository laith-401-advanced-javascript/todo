/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const useForm = (callback) => {
  const [item, setItem] = useState({});


  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    callback(item);
    const item1 = {};
    setItem(item1);
  };

  return [handleSubmit, handleInputChange, item]

}
export default useForm;



