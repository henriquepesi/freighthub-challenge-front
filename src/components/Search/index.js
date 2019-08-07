import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchStyle } from './styles';

export default function Search(props) {
  return (
    <SearchStyle>
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />

      <FaSearch />
    </SearchStyle>
  );
}
