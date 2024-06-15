import { useState } from 'react';
import { signUp } from '../../utilities/users-service.js';
import { useNavigate } from "react-router-dom";

export default function SignUpForm({ setUser }) {
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
    console.log('user Data', userData);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      console.log('submit user Data', userData);
      const user = await signUp(userData);
      console.log(user);
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
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="username">Username {"(handle)"}</label>
          <input type="text" name="username" value={userData.username} onChange={handleChange} required />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={userData.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}