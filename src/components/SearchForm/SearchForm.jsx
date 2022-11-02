import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export function SearchForm({ getFormData }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    getFormData(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

SearchForm.protoTypes = {
  getFormData: PropTypes.func.isRequired,
};
