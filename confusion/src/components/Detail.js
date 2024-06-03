import React from "react";
import { useParams } from "react-router-dom";
import OrchidsListData from "../shared/ListOfOrchids"; // Adjust the path if necessary

const Detail = () => {
  const { id } = useParams();
  const orchid = OrchidsListData.find((orchid) => orchid.Id === parseInt(id));

  if (!orchid) {
    return <div>Orchid not found</div>;
  }

  return (
    <div className="orchid-detail">
      <img src={orchid.image} alt={orchid.name} />
      <h3>{orchid.name}</h3>
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
  );
};

export default Detail;
