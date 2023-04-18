import React from "react";
import CreatorCard from "../../Units/CreatorCard";
import CardsGrid from "../../Units/CardsGrid";

const CreatorsCardsList = ({
  creators = [],
  className = null,
  style = null,
}) => {
  return (
    <CardsGrid className={className} style={style}>
      {creators.map(
        (
          {
            username,
            firstName,
            lastName,
            creator_img,
            creator_cover,
            bio,
            description,
          },
          i
        ) => (
          <CreatorCard
            key={i}
            cover={creator_cover}
            profile={creator_img}
            firstname={firstName}
            lastname={lastName}
            name={username}
            username={username}
            description={bio || description}
          />
        )
      )}
    </CardsGrid>
  );
};
export default CreatorsCardsList;
