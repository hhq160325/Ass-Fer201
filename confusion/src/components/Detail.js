// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { Container, Box, Button, Typography } from "@mui/material";
// import OrchidsListData from "../shared/ListOfOrchids";
// import "./Detail.css";

// const Detail = () => {
//   const { id } = useParams();
//   const orchid = OrchidsListData.find((orchid) => orchid.Id === parseInt(id));

//   if (!orchid) {
//     return <div>Orchid not found</div>;
//   }

//   return (
//     <Container className="detail-container">
//       <Typography variant="h4" className="detail-title">
//         Detail
//       </Typography>
//       <Box className="detail-content">
//         <img src={orchid.image} alt={orchid.name} className="detail-image" />
//         <Box className="detail-info">
//           <Typography variant="h5">{orchid.name}</Typography>
//           <Typography>
//             <strong>Rating:</strong> {orchid.rating}
//           </Typography>
//           <Typography>
//             <strong>Special:</strong> {orchid.isSpecial ? "Yes" : "No"}
//           </Typography>
//           <Typography>
//             <strong>Color:</strong> {orchid.color}
//           </Typography>
//           <Typography>
//             <strong>Origin:</strong> {orchid.origin}
//           </Typography>
//           <Typography>
//             <strong>Category:</strong> {orchid.category}
//           </Typography>
//           <Typography>
//             <strong>Habitat:</strong> {orchid.habitat}
//           </Typography>
//           <Typography>{orchid.description}</Typography>
//           {orchid.videoUrl && (
//             <iframe
//               width="560"
//               height="315"
//               src={orchid.videoUrl}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowFullScreen
//             ></iframe>
//           )}
//         </Box>
//       </Box>
//       <Box className="detail-footer">
//         <Link to="/">
//           <Button variant="contained" color="primary" className="home-button">
//             Return Home
//           </Button>
//         </Link>
//       </Box>
//     </Container>
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
          <Typography>{orchid.description}</Typography>
          {orchid.videoUrl && (
            <iframe
              className="detail-video"
              src={orchid.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
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
