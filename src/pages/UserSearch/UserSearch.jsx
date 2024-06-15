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
      const data = await usersAPI.search(searchData);
      console.log('data', data)
      setSearchResults(data);
    }
    searchUsers();
  }, [searchData])

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('Search Input', searchInput);
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
        <ul className="user-search">
          {searchResults.map((user) => (
          <li key={user._id}><UserSearchCard username={user.username} displayName={user.displayName} /></li>
        ))}
        </ul>
      :
      "no users"
      }
    </div>
  )
}
