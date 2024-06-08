import { useState } from 'react'
import './LoginPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function LoginPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="login-page">
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
    </main>
  )
}
