import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayersPresentation({ players }) {
  return (
    <div className='TableContainer'>
      {players.map((player) => (
        <div className='TableColumn' key={player.id}>
          <div className='card h-100'>
            <img src={player.img} className='card-img-top' alt={`Photo of ${player.name}`} />
            <div className='card-body'>
              <h3>{player.name}</h3>
              <p className='title'>{player.club}</p>
              <p className='Detail'>
                <Link to={`/detail/${player.id}`} target="_blank">
                  <button className='BTN'>Detail</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
