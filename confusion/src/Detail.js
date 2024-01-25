import React from 'react';
import { useParams } from 'react-router-dom';
import { Players } from './shared/ListOfPlayers';

function Detail() {
  const { id } = useParams();
  const player = Players.find((obj) => obj.id === id);

  if (!player) {
    // Handle case where player is not found
    return <div>Player not found</div>;
  }

  let cost = player.cost.toLocaleString();

  return (
    <div className='container'>
      <div className='product-card'>
        <div className='badge'>{player.name}</div>
        <div className='product-tumb'>
          <img src={`../${player.img}`} alt={`Photo of ${player.name}`} />
        </div>
        <div className='product-details'>
          <h4>{player.club}</h4>
          <div className='product-price'>Market value: €{cost}</div>
          <p>{player.info}</p>
          <div className='product-bottom-details'></div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
