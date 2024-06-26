import React from 'react';
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";

export default function UserSearchForm(props) {
  const { searchInput, setSearchInput, handleSubmit } = props;

  const handleChange = (evt) => {
    console.log('User Search handleChange', searchInput);
    setSearchInput(evt.target.value);
  };

  return (
    <>
      <form className="w-full mb-5" onSubmit={handleSubmit} autoComplete="off">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <SearchIcon />
            </svg>
          </div>
          <input
            type="search" id="userSearch" value={searchInput} onChange={handleChange}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by username..." required
          />
          <button type="submit" className="absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
      </form>
    </>
  );
}