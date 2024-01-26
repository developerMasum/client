import React, { ChangeEvent } from 'react';
import { SearchOutlined } from "@ant-design/icons";

const SearchBar: React.FC = () => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    console.log('Input Value:', inputValue);
  };

  return (
    <div>
      <style>
        {`
          .search-container {
            position: relative;
            display: inline-block;
          }

          .search-input {
            padding: 12px;
            width: 100%; /* Set the width to 100% for responsiveness */
            max-width: 400px; /* Limit the maximum width */
            border: none;
            border-radius: 5px;
            background-color: #0C1A32;
            color: white;
            padding-right: 40px;
            transition: border 0.3s ease;
            box-sizing: border-box;
          }

          .search-input:focus {
            outline: none;
            border: 1px solid #0C1A32;
          }

          .search-icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
            cursor: pointer;
          }
        `}
      </style>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onChange={handleInputChange}
        />
        <div className="search-icon"> <SearchOutlined /></div>
      </div>
    </div>
  );
};

export default SearchBar;
