import React, { useState } from 'react';
import { login,signup } from '../redux/actions/loginActions';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  
  const [isLogin, setIsLogin] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // State for login form fields
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  // State for signup form fields
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });

  // Handle form changes for login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form changes for signup
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginData))
  };

  // Handle signup form submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with:', signupData);
    dispatch(signup(signupData))
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark position-relative">

      {/* Modal Background (hidden when showForm is false) */}
      {showForm && (
        <div
          className="modal-backdrop fade show position-fixed w-100 h-100 bg-dark"
          style={{ zIndex: 1040 }}
        />
      )}

      {/* Modal Form Container */}
      <div className="text-center p-5 border rounded-3 shadow-sm bg-light position-relative" style={{ width: '300px', height: 'auto', zIndex: 1050 }}>
        <h1 className="mb-4 text-dark">To Do</h1>

        {/* Button Section */}
        {!showForm && (
          <>
            <button
              className="btn btn-primary mb-3 w-100"
              onClick={() => { setShowForm(true); setIsLogin(true); }} // Show Login Form
            >
              Login
            </button>
            <button
              className="btn btn-secondary w-100"
              onClick={() => { setShowForm(true); setIsLogin(false); }} // Show Sign Up Form
            >
              Sign Up
            </button>
          </>
        )}

        {/* Displaying Login or Sign Up Form */}
        {showForm && (
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark">{isLogin ? 'Login' : 'Sign Up'}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setShowForm(false)} // Close the form modal
              />
            </div>
            <div className="modal-body">
              {isLogin ? (
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSignupSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={signupData.name}
                      onChange={handleSignupChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={signupData.email}
                      onChange={handleSignupChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Sign Up
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
