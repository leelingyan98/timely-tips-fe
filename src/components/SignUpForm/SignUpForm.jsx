import { useState } from 'react';
import { signUp } from '../../utilities/users-service.js';
import { useNavigate } from "react-router-dom";

export default function SignUpForm({ setUser, showLogin, setShowLogin }) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState('');

  const disable = (userData.password !== userData.confirm);

  const navigate = useNavigate();

  const handleChange = (evt) => {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await signUp(userData);
      setUser(user);
      if (user && !user.error) {
        navigate("/home");
      }
    } catch (err) {
      setError('Sign Up Failed - Try Again')
      console.error(err);
    }
  };

  return (
    <div>
      <p>
        <h2 className="font-bold text-lg">Register for an account</h2>
        Already a user?&nbsp;
        <span className="link" onClick={() => setShowLogin(!showLogin)}>
          Log in here
        </span>
      </p>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="username">Username {"(handle)"}</label><br />
          <input type="text" name="username" value={userData.username} onChange={handleChange} required /><br />
          <label htmlFor="email">Email</label><br />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          /><br />
          <label>Password</label><br />
          <input type="password" name="password" value={userData.password} onChange={handleChange} required /><br />
          <label>Confirm</label><br />
          <input type="password" name="confirm" value={userData.confirm} onChange={handleChange} required /><br />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}