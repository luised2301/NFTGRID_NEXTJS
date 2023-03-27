import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./BasicCard.module.css";
// import DetailModal from "../../DetailModal/DetailModal";
import Divider from "@mui/material/Divider";

const bull = (
  <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

export default function BasicCard({ data }) {
  return (
    <Card className={styles.itemCard} sx={{ maxWidth: 410, m: 2 }}>
      <CardMedia
        component="img"
        image={data.image.replace("ipfs://", "https://ipfs.io/ipfs/")}
        sx={{ aspectRatio: "1/1" }}
        alt={`${data.name} IMAGE`}
      />

      <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Typography
          display="flex"
          color="text.primary"
          fontSize="16px"
          fontWeight={900}
          textAlign="left"
          fontFamily="Inter"
          alignItems="center"
        >
          {data.name}
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="primary" children="likes" />
        </IconButton>
      </CardContent>
      <Divider />
      <Typography sx={{ fontWeight: "600" }}>DESCRIPTION</Typography>
      <Typography sx={{ fontSize: "14px", m: 2, textAlign: "left" }}>{data.description}</Typography>

      <Box></Box>
      <Divider />

      <Typography sx={{ fontWeight: "600" }}>DETAILS</Typography>
      <Box></Box>
      <Divider />

      {/* <DetailModal
      creator={creatorName}
      collectionName={collectionName}
      creatorName={creatorName}
      collectionAddress={collectionAddress}
      tokenId={tokenId}
      detailData={parsedCardData}
    /> */}
    </Card>
  );
}
