import React from "react";
import { Link } from "react-router-dom";
import "./Orchids.css";

const Orchids = ({ orchids }) => {
  return (
    <div className="orchids-grid">
      {orchids.map((orchid) => (
        <div key={orchid.Id} className="orchid-card">
          <img src={orchid.image} alt={orchid.name} />
          <h3>{orchid.name}</h3>
          <Link to={`/detail/${orchid.Id}`}>
            <button>Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Orchids;
