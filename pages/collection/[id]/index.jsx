import * as React from "react";
import Box from "@mui/material/Box";
import BasicCard from "../../../components/BasicCard/BasicCard";
function Page({ data }) {
  const nftList = data.nfts;

  return (
    <Box
      className="card-container"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        mx: 3,
        width: "fit-content",
      }}
    >
      {nftList.map((item, index) => {
        return <BasicCard key={item.metadata.name} data={item.metadata} />;
      })}
    </Box>
  );

  // Render data...
}

// This gets called on every request
export async function getServerSideProps(context) {
  const addressId = context.params.id;
  const API_KEY = process.env.ALCHEMY_API_KEY;
  // Fetch data from external API
  const res = await fetch(
    `https://eth-mainnet.g.alchemy.com/nft/v2/${API_KEY}/getNFTsForCollection?contractAddress=${addressId}&withMetadata=true&limit=40`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
