import { useState } from 'react'
import './LoginPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function LoginPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="login-page">
      <Logo />
      <h2 className="text-xl pt-2">Share and learn more about living in Singapore!</h2>
      {showLogin ?
        <LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin} />
        :
        <SignUpForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin} />
      }
    </main>
  )
}
