import React from 'react';
import './index.scss';

const SearchBar = ({ onChange }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [searchFavoritesSwitch, setSearchFavoriteSwitch] = React.useState(false);
  const [searchReadLatersSwitch, setSearchReadLatersSwitch] = React.useState(false);

  const handleValueChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    onChange(value.toLowerCase(), searchFavoritesSwitch, searchReadLatersSwitch);
  };

  const handleFavoritesClick = () => {
    setSearchFavoriteSwitch(!searchFavoritesSwitch);
    onChange(inputValue, !searchFavoritesSwitch, searchReadLatersSwitch);
  };

  const handleReadLatersClick = () => {
    setSearchReadLatersSwitch(!searchReadLatersSwitch);
    onChange(inputValue, searchFavoritesSwitch, !searchReadLatersSwitch);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        onChange={handleValueChange}
        value={inputValue}
      />
      <p>Filter:</p>
      <button type="button" className={`btn btn-${searchFavoritesSwitch ? '' : 'outline-'}primary mx-2`} onClick={handleFavoritesClick}>by favorites</button>
      <button type="button" className={`btn btn-${searchReadLatersSwitch ? '' : 'outline-'}info mx-2`} onClick={handleReadLatersClick}>by read later</button>
    </div>
  );
};

export default SearchBar;
