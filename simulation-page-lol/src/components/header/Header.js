import React from 'react';
import riotGames from '../../images/riot_games.png';
import logo from '../../images/logo.png';
import './Header.css';

function Header() {
  return(
    <header>
      <div className="header-left">
        <img
          className="riot-games-img"
          src={ riotGames }
          alt="Logo da Riot Games"
        />
        <img
          className="logo-lol-img"
          src={ logo }
          alt="Logo League of Legends"
        />
        <p> Universo </p>
        <p> Campeões </p>
        <p> Regiões </p>
        <p> Quadrinhos </p>
        <p> Universo Alternativo </p>
        <p> Mapa </p>
        <p> Explorar </p>
        <p> Buscar </p>
      </div>
      <div className="header-rigth">
        <p> Iniciar Sessão </p>
        <p> Jogue agora </p>
      </div>
    </header>
  )
}

export default Header;
