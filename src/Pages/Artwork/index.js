import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Grid } from "@material-ui/core";
import ArtDetails from "../../Components/ArtDetails";
import RecommendedArt from "../../Components/RecommendedArt";
import PageNotFound from "../../Units/PageNotFound";
import { useStyles } from "./styles";
import {
  getArtDetails,
  getArtHistory,
} from "../../Redux/Actions/artwork.actions";
import { connect } from "react-redux";
import LoaderContainer from "../../Units/LoaderContainer";

const Artwork = ({
  isArtDataLoading,
  isArtDataLoadingFailed,
  isArtNotFound,
  artDetails,
  nftContractadAddress,
  transactionsHistory,
  getArtDetails,
  getArtHistory,
  chainName,
}) => {
  const classes = useStyles();

  const { artParams } = useParams();
  const paramsArr = artParams.split("-");
  const artId = paramsArr[paramsArr.length - 1] || -1;
  useEffect(() => {
    getArtDetails(artId);
    getArtHistory(artId);
  }, [artId, getArtDetails, getArtHistory]);

  return (
    <>
      {isArtDataLoading ? (
        <LoaderContainer />
      ) : isArtNotFound ? (
        <PageNotFound />
      ) : isArtDataLoadingFailed ? (
        <p>network error</p>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <ArtDetails
              artData={artDetails}
              transactionsHistory={transactionsHistory}
              contractAddress={nftContractadAddress}
              chainName={chainName}
            />
          </Grid>
          {/* <Grid item xs={12} className={classes.container}>
            <RecommendedArt className />
          </Grid> */}
        </Grid>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { Artwork, Contract, Web3Instance } = state;
  return { ...Artwork, ...Contract, chainName: Web3Instance.validNetworkName };
};
const mapDispatchToProps = { getArtDetails, getArtHistory };
export default connect(mapStateToProps, mapDispatchToProps)(Artwork);
