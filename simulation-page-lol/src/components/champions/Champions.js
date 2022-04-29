import React, { useContext } from 'react';
import ContextValue from '../../context/ContextValue';
import data from '../../data/characters';
import iconChampion from '../../images/icon_champion.png'
import './Champions.css';

function Champions() {
  const { champion } = useContext(ContextValue);

  const filteredChampions = data
    .filter(({ name }) => name.toLowerCase().includes(champion))

  return(
    <section className="container-champions">
      <div className="title">
        <img src={ iconChampion } alt="" className="icon-champion"/>
        <p> Campeões </p>
      </div>
      <main className="container-card">
        { filteredChampions.map(({
          name,
          location,
          image,
        }) => (
          <div key={ name } className="card">
            <div className="img-card">
              <img
                src={ image }
                alt={ name }
              />
            </div>
            <div className="infos-card">
              <p>{ name }</p>
              <p>{ location }</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  )
}

export default Champions;
