import React from "react";
import NFTCard from "../../Units/NFTCard";
import CardsGrid from "../../Units/CardsGrid";

const NFTCardsList = ({
  arts = [],
  className = null,
  style = null,
  isProfileCard = false,
}) => {
  return (
    <>
      <CardsGrid className={className} style={style}>
        {arts.map(
          (
            {
              id,
              art_name,
              art_img,
              art_price,
              description,
              higgestBid,
              creator_name,
              creator_img,
              isAuction,
              end_date,
              sale,
              owner_walletAddress,
              owner_id,
            },
            i
          ) => (
            <NFTCard
              key={i}
              id={id}
              title={art_name}
              image={art_img}
              description={description}
              createrName={creator_name}
              createrImg={creator_img}
              onSale={sale}
              ownerWalletAddress={owner_walletAddress}
              priceComponentTitle={
                !Boolean(Number(isAuction))
                  ? "Fixed Price"
                  : higgestBid
                  ? "Current Bid"
                  : "Reserve Price"
              }
              artPrice={higgestBid ? higgestBid : art_price}
              endTime={end_date}
              isAuction={Boolean(Number(isAuction))}
              isProfileCard={isProfileCard}
              owner_id={owner_id}
            />
          )
        )}
      </CardsGrid>
    </>
  );
};

export default NFTCardsList;
