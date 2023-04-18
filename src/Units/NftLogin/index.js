import {React,useState,useRef} from "react";
import { useStyles } from "./styles";
import { Paper, Grid, Typography, TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import FormLabel from '@material-ui/core/FormLabel'

import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

const NftLogin = ({isWalletConnectd}) => {
  const classes = useStyles();
  const [standerLiesence,setStanderLiesence]=useState();
  const [description,setDescription]=useState();
  const [price,setPrice]=useState();
  const [auction,setAuction]=useState();
  const [uploadOption, setUploadOptions] = useState('image');
  const inputFile = useRef(null) 

  const handleUploadOptionChange = (event) => {
    setUploadOptions(event.target.value);
  };


  const handleCreateNft=()=>{
    console.log(standerLiesence,description,price,auction)
  }
  
  return (
    // <div className={`${isWalletConnectd?classes.root:classes.connectYourWallet}`}>
    <div className={classes.root}>
   
      <Paper elevation={3} className={classes.paper}>
        <Grid
          container
          className={classes.container}
          direction="column"
          spacing={5}
        >
          <Grid item md={10} sm={10} xm={12}>
            <Typography
              gutterBottom
              variant="h6"
              className={classes.TextFieldtext}
            >
              Standard license
            </Typography>
            <TextField className={classes.Topinput} variant="outlined" onChange={(e)=>{setStanderLiesence(e.target.value)}} />
          </Grid>
          <Grid item md={10} sm={10} xm={12}>
            <Typography
              gutterBottom
              variant="h6"
              className={classes.TextFieldtext}
            >
              Description
            </Typography>
            <TextField
              className={classes.Topinput}
              variant="outlined"
              multiline
              onChange={(e)=>{setDescription(e.target.value)}}
              rows={4}
            />
          </Grid>
          
          <Grid item as container md={12}>
            <Grid item md={12} sm={12}><Typography
                gutterBottom
                variant="h6"
                className={classes.TextFieldtext}
              >
               Select Option
              </Typography> </Grid>
            <Grid item md={6} sm={6} xs={12}>
              
              <FormControl component="fieldset">
      
      <RadioGroup aria-label="gender" name="gender1" value={uploadOption} onChange={handleUploadOptionChange}>
        <FormControlLabel value="image" control={<Radio />} label="Image" />
        <FormControlLabel value="audio" control={<Radio />} label="Audio" />
        
      </RadioGroup>
    </FormControl>
              
            </Grid>
            <Grid item md={4} sm={4} xs={10} >
            <Typography> max file size 100mb</Typography>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
            {uploadOption==="image"?<Paper className={classes.uploadimage} onClick={()=>{inputFile.current.click();}}>
             
             upload image
             <AddPhotoAlternateIcon />
           </Paper>:<Paper className={classes.uploadaudio} onClick={()=>{inputFile.current.click();}}>
             
             upload audio
             <AudiotrackIcon />
           </Paper>
           
           }
            
            </Grid>
          </Grid>
          
          <Grid item as container spacing={3}>
            <Grid item md={6} justifyContent="center" alignItems="center">
              <Typography
                gutterBottom
                variant="h6"
                className={classes.TextFieldtext}
              >
                Price
              </Typography>
              <TextField
                className={classes.bottominput}
              type="number"
                InputProps={{ disableUnderline: true }}
                onChange={(e)=>{setPrice(e.target.value)}}
              />
            </Grid>
            <Grid item md={6}>
              <Typography
                gutterBottom
                variant="h6"
                className={classes.TextFieldtext}
              >
                Auction
              </Typography>
              <TextField
                className={classes.bottominput}
                multiline
                InputProps={{ disableUnderline: true }}
                id="apple"
                onChange={(e)=>{setAuction(e.target.value)}}
              />
            </Grid>
          </Grid>
          <Grid
            item
            as
            container
            justifyContent="flex-end"
            alignItems="center"
            md={12}
            sm={12}
            xs={12}
          >
            <Button className={classes.bottombuttons}>Cancel</Button>
            <Button className={classes.bottombuttons} onClick={()=>{handleCreateNft()}}> Create NFT</Button>
          </Grid>
        </Grid>
      </Paper>
     
    </div>
  );
};
const mapStateToProps=(state)=>{
  const {Wallet}=state;
  return {
    isWalletConnectd:Wallet.isWalletConnectd,
  }
}
export default  connect(mapStateToProps)(NftLogin);
