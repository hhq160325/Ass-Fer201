// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function PlayersPresentation({ players }) {
//   return (
//     <div className='TableContainer'>
//       {players.map((player) => (
//         <div className='TableColumn' key={player.id}>
//           <div className='card h-100'>
//             <img src={player.img} className='card-img-top' alt={`Photo of ${player.name}`} />
//             <div className='card-body'>
//               <h3>{player.name}</h3>
//               <p className='title'>{player.club}</p>
//               <p className='Detail'>
//                 <Link to={`/detail/${player.id}`} target="_blank">
//                   <button className='BTN'>Detail</button>
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PlayersPresentation() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://65d69792f6967ba8e3be425b.mockapi.io/api/confusion/confusionpost"
      )
      .then((response) => {
        setPlayers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching player data:", error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="TableContainer">
      {players.map((player) => (
        <div className="TableColumn" key={player.id}>
          <div className="card h-100">
            <img
              src={player.image}
              className="card-img-top"
              alt={`Photo of ${player.designname}`}
            />
            <div className="card-body">
              <h3>{player.name}</h3>
              <p className="title">{player.designname}</p>
              <p className="Detail">
                <Link to={`/detail/${player.id}`} target="_blank">
                  <button className="BTN">Detail</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
