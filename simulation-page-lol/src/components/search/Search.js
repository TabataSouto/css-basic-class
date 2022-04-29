import React, { useContext, useState } from 'react';
import ContextValue from '../../context/ContextValue';
import iconChampion from '../../images/icon_champion.png';
import './Search.css';

function Search() {
  const { setChampion } = useContext(ContextValue);
  const [inputValue, setInputValue] = useState('');

  return(
    <section className="search-bar">
      <img
        className="icon-champion"
        src={ iconChampion }
        alt=""
      />

      <form>
        <input
          type="text"
          value={ inputValue }
          placeholder="Encontre um campeão"
          onChange={ ({ target: { value }}) => { setInputValue(value); setChampion(value) } }
        />
      </form>
    </section>
  )
}

export default Search;
