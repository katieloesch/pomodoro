import React, { useState } from 'react';
import { API_URL } from '../../api/user_api';
import './RegisterPage.scss'

const RegisterPage = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const url = API_URL + "register";

const fetchOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
};

try {
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData);
        // Handle the error appropriately
    } else {
        const data = await response.json();
        console.log("Success:", data);
        // Handle the success response
    }
} catch (error) {
    console.error("Fetch error:", error);
    // Handle the fetch error appropriately
}


  

  }


  return (
    <div className='register-page flex'>
      
      <h1>Register</h1>

      <form className='register-form flex' onSubmit={handleFormSubmit}>
        <input
          type='text'
          name='email'
          placeholder='email'
          value={formData.email}
          onChange={handleFormChange}
          autoComplete="off"
        />
    
        <input
          type='password'
          name='password'
          placeholder='password'
          value={formData.password}
          onChange={handleFormChange}
        />
    
          <button type='submit'>Register</button>
      
      </form>
    </div>
  )
}

export default RegisterPage
