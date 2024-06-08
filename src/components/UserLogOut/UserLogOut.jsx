import './UserLogOut.css';
import { logOut } from '../../utilities/users-service.js';

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <>
    { user ? 
      <div className="UserLogOut">
        <div>{user.username}</div>
        <div className="email">{user.email}</div>
        <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
      </div>
      :
      <></>
    }
    </>
  );
}
