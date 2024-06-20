import { useState } from 'react';
import * as usersService from '../../utilities/users-service.js';
import { Label, TextInput, Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { KeyIcon } from "@heroicons/react/24/solid"

export default function LoginForm({ setUser, showLogin, setShowLogin }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <p>
        First time here?&nbsp;
        <span className="link" onClick={() => setShowLogin(!showLogin)}>
          Sign up instead
        </span>
      </p>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Label htmlFor="email" value="Email address" />
          <TextInput
            type="email" name="email" icon={HiMail}
            value={credentials.email} onChange={handleChange}
            required
          />
          <Label htmlFor="password" value="Password" />
          <TextInput
            type="password" name="password" icon={KeyIcon}
            value={credentials.password} onChange={handleChange}
            required
          />
          <Button type="submit" className="text-primary">Log in</Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}