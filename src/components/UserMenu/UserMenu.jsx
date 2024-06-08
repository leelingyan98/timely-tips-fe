import { Link } from 'react-router-dom';
import './UserMenu.css';
import { logOut } from '../../utilities/users-service.js';

export default function UserMenu({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <>
    { user ? 
      <div className="UserMenu">
        <div><Link to={`/profile/${user.username}`}>{`@${user.username}`}</Link></div>
        <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
      </div>
      :
      <></>
    }
    </>
  );
}
