import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Video from "../video/Video"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import useMatchMedia from '../../tools/matchMedia';

const PerformanceVlog2 = () => {
  const resize = useMatchMedia(900);

  return (
    <Grid item container xs={10}>
      <div className="post">
        <Accordion>
          <AccordionSummary
          id="panel1-header" 
          aria-controls="panel1-content">
          <div className="headerContainer">
            <h1 className={resize ? "largeH1" : "smallH1"}>
              Performance Vlog #2: MIDI mapping
            </h1>
            <h1 className={resize ? "largeH1" : "smallH1"}>
              6/13/2022
            </h1>
          </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="video">
              <Video vidLink='https://www.youtube.com/watch?v=xHETAdKnuhk'/>
            </div>
            <p className={resize ? "largeP" : "smallP"}>
              In this vlog I go over how I have begun mapping effects to specific knobs on my MIDI controllers using <i>Ableton's MIDI mapping feature</i><sup>1</sup>.
              I also talk about how I have added an instrument 'switcher' using my computer's <i>IAC driver</i><sup>2</sup> to automatically swap sounds on my keyboard 
              in between songs, as well as my goals to accomplish before next update. Below I have linked some videos that helped in this process:
            </p>
            <p className={resize ? "sourceListBig" : "sourceListSmall"}>
              <ul>
                <li>1. "Preparing a Performance", <i>Modifying Sounds While Playing</i></li>
                <li>2. "Preparing a Performance", <i>Creating an Auto-Stop</i></li>
              </ul>
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default PerformanceVlog2