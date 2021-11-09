import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import {DialogActions,Grid} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import useStyles from './map/style';
const vehicle_selected_icon = "https://res.cloudinary.com/niroavram/image/upload/v1636377669/sport-car_kehzgr.png";
const vehicle_icon = "https://res.cloudinary.com/niroavram/image/upload/v1636358117/car_gln7ul.png";
const select_area_icon = "https://res.cloudinary.com/niroavram/image/upload/v1636360749/select_ghmkok.png"
const clean_icon="https://res.cloudinary.com/niroavram/image/upload/v1636470607/household_shlybd.png"
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  
export default function Informaton() {
    const [open, setOpen] = React.useState(true);
   const classes = useStyles();
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
           <IconButton
            aria-label="open"
            onClick={handleClickOpen}
            sx={{
              color: '#55c3ff',
            }}
          >
            <InfoIcon fontSize='meduim' />
          </IconButton>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Inforamtion
        </Button> */}
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Code Challange
          </BootstrapDialogTitle>
          <DialogContent dividers>
          <Grid className={classes.center}  >
              <img src={vehicle_icon} alt="Logo" width="50vw"  height="35vh"/>
              <Typography gutterBottom>
              this icon shows all the vehicle that you have on map
            </Typography>
              </Grid>
              <Grid className={classes.center} >
              <img src={select_area_icon} alt="Logo" width="50vw"  height="35vh"/>
              <Typography gutterBottom>
              First you need to draw on map by one click every time till you chose the area that you want.
            </Typography>
              </Grid>

              <Grid className={classes.center}  >
              <img src={vehicle_selected_icon} alt="Logo" width="50vw"  height="35vh"/>
              <Typography gutterBottom>
              Click the blue button to get all the vehicle inside the area(Polygon)
            </Typography>
              </Grid>
              <Grid className={classes.center}  >
              <img src={clean_icon} alt="Logo" width="50vw"  height="35vh"/>
              <Typography gutterBottom>
              Click the pink button to clean all the Map
            </Typography>
              </Grid>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Got It!
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    );
  }