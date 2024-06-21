import { useState, useEffect } from 'react'
import './UserSearch.css';
import UserSearchForm from '../../components/UserSearchForm/UserSearchForm'
import UserSearchCard from '../../components/UserSearchCard/UserSearchCard'
import * as usersAPI from '../../utilities/users-api.js';

export default function UserSearch() {
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
    const searchUsers = async () => {
      const users = await usersAPI.search(searchData);
      setSearchResults(users);
    }
    searchUsers();
  }, [searchData])

  function handleSubmit(evt) {
    evt.preventDefault();
    setSearchData(searchInput);
  };

  return (
    <div className="search-container">
      <h2>Find a user</h2>
      <UserSearchForm 
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSubmit={handleSubmit}
      />
      { searchResults.length > 0 ? 
        <div className="user-search grid grid-cols-2">
          {searchResults.map((user) => (
          <div className="self-center" key={user._id}>
            <UserSearchCard userResult={user} />
          </div>
        ))}
        </div>
      :
      "No users found. Start by searching other terms."
      }
    </div>
  )
}
