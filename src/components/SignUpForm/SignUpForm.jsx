import { useState } from 'react';
import { signUp } from '../../utilities/users-service.js';
import { useNavigate } from "react-router-dom";
import { Card, Label, TextInput, Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { KeyIcon } from "@heroicons/react/24/solid"

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
      <h2 className="font-bold text-lg">Register for an account</h2>
      <p>
        Already a user?&nbsp;
        <span className="link" onClick={() => setShowLogin(!showLogin)}>
          Log in here
        </span>
      </p>
      <Card className="form-container mt-5">
        <form autoComplete="off" onSubmit={handleSubmit}>
        <Label htmlFor="username" value="Username (handle) *" />
        <TextInput
          id="username" type="text" name="username" addon="@"
          value={userData.username} onChange={handleChange}
          maxLength={20}
          required
        />
        <Label htmlFor="email" value="Email Address *" />
        <TextInput
          id="email" type="email" name="email" icon={HiMail}
          value={userData.email} onChange={handleChange}
          required
        />
        <Label htmlFor="password" value="Password *" />
          <TextInput
            type="password" name="password" icon={KeyIcon}
            value={userData.password} onChange={handleChange}
            minLength={3}
            required
        />
        <Label htmlFor="confirm" value="Confirm Password *" />
        <TextInput
          type="password" name="confirm" icon={KeyIcon}
          value={userData.confirm} onChange={handleChange}
          minLength={3}
          required
        />
        <Button type="submit" disabled={disable} className="text-primary">Sign up</Button>
        </form>
        <p className="error-message">{error}</p>
      </Card>
    </div>
  );
}