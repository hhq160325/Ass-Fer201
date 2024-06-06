// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import OrchidsListData from "../shared/ListOfOrchids";
// import "./Detail.css";

// const Detail = () => {
//   const { id } = useParams();
//   const orchid = OrchidsListData.find((orchid) => orchid.Id === parseInt(id));

//   if (!orchid) {
//     return <div>Orchid not found</div>;
//   }

//   return (
//     <div className="detail-container">
//       <div className="detail-content">
//         <div className="detail-image">
//           <img src={orchid.image} alt={orchid.name} />
//         </div>
//         <div className="detail-text">
//           <h2>{orchid.name}</h2>
//           <p>
//             <strong>Rating:</strong> {orchid.rating}
//           </p>
//           <p>
//             <strong>Special:</strong> {orchid.isSpecial ? "Yes" : "No"}
//           </p>
//           <p>
//             <strong>Color:</strong> {orchid.color}
//           </p>
//           <p>
//             <strong>Origin:</strong> {orchid.origin}
//           </p>
//           <p>
//             <strong>Category:</strong> {orchid.category}
//           </p>
//           <p>
//             <strong>Habitat:</strong> {orchid.habitat}
//           </p>
//           <p>{orchid.decription}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detail;
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Box, Button, Typography } from "@mui/material";
import OrchidsListData from "../shared/ListOfOrchids";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const orchid = OrchidsListData.find((orchid) => orchid.Id === parseInt(id));

  if (!orchid) {
    return <div>Orchid not found</div>;
  }

  return (
    <Container className="detail-container">
      <Typography variant="h4" className="detail-title">
        Detail
      </Typography>
      <Box className="detail-content">
        <img src={orchid.image} alt={orchid.name} className="detail-image" />
        <Box className="detail-info">
          <Typography variant="h5">{orchid.name}</Typography>
          <Typography>
            <strong>Rating:</strong> {orchid.rating}
          </Typography>
          <Typography>
            <strong>Special:</strong> {orchid.isSpecial ? "Yes" : "No"}
          </Typography>
          <Typography>
            <strong>Color:</strong> {orchid.color}
          </Typography>
          <Typography>
            <strong>Origin:</strong> {orchid.origin}
          </Typography>
          <Typography>
            <strong>Category:</strong> {orchid.category}
          </Typography>
          <Typography>
            <strong>Habitat:</strong> {orchid.habitat}
          </Typography>
          <Typography>{orchid.decription}</Typography>
        </Box>
      </Box>
      <Box className="detail-footer">
        <Link to="/">
          <Button variant="contained" color="primary" className="home-button">
            Return Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Detail;
