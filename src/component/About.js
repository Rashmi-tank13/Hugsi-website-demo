import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';



export default function About() {

  const about = require('../images/about.png');
  const labellogo = require('../images/about-label.png')

  return (
<>
<hr/>
    <Grid container spacing={3} className='about-main'>
      <Grid item >
        <ButtonBase >
          <img alt="complex" src={about} className='about-img'/>
        </ButtonBase>
      </Grid>
      <Grid item xs={10} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div" className='about-title'>
              What do you know about sustainable green space?
            </Typography>
            <Typography variant="body2" gutterBottom className='about-desc'>
              Together with our partner NL Greenlabel we have put together an educational quiz where you can test your skills and learn new things about how you can have a more sustainable approach to green space
            </Typography>

          </Grid>
          <Grid item>
            <Typography className='about-quiz' variant="body2">
              Take the quiz<i className="fas fa-arrow-right about-quiz-icon" aria-hidden="false"  />
            </Typography>
          </Grid>
        </Grid>
        
      </Grid>
      <Grid item xs={1.8}>
        <ButtonBase>
          <img alt="complex" src={labellogo} className='about-label'/>
        </ButtonBase>
      </Grid>
    </Grid>
    <hr/>
    </>
  );
}