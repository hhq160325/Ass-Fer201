import React from "react";
import { useParams, Link } from "react-router-dom";
import OrchidsListData from "../shared/ListOfOrchids";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const orchid = OrchidsListData.find((orchid) => orchid.Id === parseInt(id));

  if (!orchid) {
    return <div>Orchid not found</div>;
  }

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="detail-image">
          <img src={orchid.image} alt={orchid.name} />
        </div>
        <div className="detail-text">
          <h2>{orchid.name}</h2>
          <p>
            <strong>Rating:</strong> {orchid.rating}
          </p>
          <p>
            <strong>Special:</strong> {orchid.isSpecial ? "Yes" : "No"}
          </p>
          <p>
            <strong>Color:</strong> {orchid.color}
          </p>
          <p>
            <strong>Origin:</strong> {orchid.origin}
          </p>
          <p>
            <strong>Category:</strong> {orchid.category}
          </p>
          <p>
            <strong>Habitat:</strong> {orchid.habitat}
          </p>
          <p>{orchid.decription}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
