  import React, { useState } from "react";
  import { FiEye, FiEyeOff } from "react-icons/fi";
  import { useNavigate } from "react-router-dom";


  const Signup = () => {
    const navigate = useNavigate(); // ✅ hook for navigation
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: "user",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const dataToSend  = {
        userName: formData.name,
        userEmail: formData.email,
        userPhoneNumber: formData.phone,
        userPassword: formData.password,
        userRole: formData.role,
      }
      try{
        const response = await fetch("http://localhost:8080/api/auth/signup",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(dataToSend),
        });

        if(!response.ok){
          const errorData = await response.text();
          throw new Error(errorData.message || "Signup failed");  
        }
        else{
          const result = await response.text();
          console.log("Signup success:", result);
          alert("Signup successful!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            role: "user",
          });
          navigate("/Login");
        }

      }catch(error){
        console.error(error);
        alert("Signup failed: " + error.message)
      }

    };

    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="user">User</option>
              <option value="service-partner">Service Partner</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  };

  export default Signup;
