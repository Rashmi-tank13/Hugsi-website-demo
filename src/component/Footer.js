import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#201e1e',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  height:'450px'
}));

 const Footer=()=> {

    const logo = require('../images/hugsi-logo.png');

  return (
    <>
   <div className='footer1'>
        <h2 className='footer1 h2'>hello@hugsi.green</h2>
    </div>
    <Box sx={{ flexGrow: 1 ,backgroundColor:'#201e1e',display:'flex'}}>
      <Grid container spacing={3}>
        <Grid item xs >
          <Item> <a href="#" target="_blank"> <img src={logo}
         alt="Husqvarna logo" className='footer-logo' /></a>
</Item>
        </Grid>
        <Grid item xs={6} >
          <Item> <p className='footer-p'>
                Since 1689, Husqvarna has manufactured high performing products and delivered industry-changing innovations
                such as anti-vibration and automatic chain-break on chainsaws, as well as robotic mowers.
                Today, Husqvarna offers a broad range of high performing outdoor power products for parks, forest and garden,
                and represents technological leadership in the key areas; chainsaws, trimmers, ride-on mowers and robotic mowers. 
                Husqvarna products are sold in more than 100 countries, mainly through servicing dealers.
               </p>

               <div className='footer-main-div2-subtitle' >
                    <h6 className='footer-main-div2-subtitle-h6'>Imprint</h6>
                    <h6 className='footer-main-div2-subtitle-h6'>Privacy</h6>
                    <h6 className='footer-main-div2-subtitle-h6'>Terms of use</h6>
               </div>
        </Item>
        </Grid>
        <Grid item xs>
          <Item><ul>
                    <li>Ranking</li>
                    <li>How it works</li>
                    <li>Insights</li>
                    <li>Partners</li>
                </ul>

                <ul className='ul-second'>
        <li><i className="fas fa-city footer-ul-li" aria-hidden="false"/>Request your city</li>
        <li><i className="fas fa-envelope-open-text footer-ul-li" aria-hidden="false"/>Sign up for our Newsletter</li>
        <li><i className="fas fa-comment-alt footer-ul-li" aria-hidden="false"/>Got any feedback?</li>
        </ul>
                </Item>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default Footer