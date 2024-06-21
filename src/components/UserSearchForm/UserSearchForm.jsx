import React, { useState } from 'react';
import { Button, TextInput } from "flowbite-react";

export default function UserSearchForm(props) {
  const { searchInput, setSearchInput, handleSubmit } = props;

  const handleChange = (evt) => {
    console.log('User Search handleChange', searchInput);
    setSearchInput(evt.target.value);
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <TextInput
          classname="w-96"
          id="userSearch"
          type="text"
          value={searchInput}
          onChange={handleChange}
          icon={SearchIcon}
        />
        <Button type="submit">Search</Button>
      </form> */}
      <form class="w-full mb-5" onSubmit={handleSubmit} autoComplete="off">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search" id="userSearch" value={searchInput} onChange={handleChange}
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by username..." required
          />
          <button type="submit" class="absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
      </form>
    </>
  );
}