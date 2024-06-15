import React, { useState } from 'react';

export default function UserSearchForm(props) {
    const { searchInput, setSearchInput, handleSubmit } = props;

  const handleChange = (evt) => {
    console.log('User Search handleChange', searchInput);
    setSearchInput(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="userSearch"
          type="text"
          value={searchInput}
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    </>
  );
}