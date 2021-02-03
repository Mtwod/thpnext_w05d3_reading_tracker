import React from 'react';
import './index.scss';

const SearchBar = ({ onInputValueChange }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    onInputValueChange(value.toLowerCase());
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      value={inputValue}
      className="SearchBar"
    />
  );
};

export default SearchBar;
