import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Video from "../video/Video"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import useMatchMedia from '../../tools/matchMedia';

const PerformanceVlog5 = () => {
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
                Performance Vlog #5: Final Setup
              </h1>
              <h1 className={resize ? "largeH1" : "smallH1"}>
                8/21/2022
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="video">
              <Video vidLink='https://youtu.be/bEOp0vuDhIM'/>
            </div>
            <p className={resize ? "largeP" : "smallP"}>
              In this vlog I go over a <i>mock setup</i><sup>1</sup> for the final performance. In creating this setup I initially did not account for the
              wind, which was problematic because the stands that hold up the projection screen and the curtains kept blowing over.
              When setting up for the final performance, I will need to make sure that I tie and stake each stand into the ground.
              It also gave me a better idea of how big of a space the stage will need to occupy. There was not enough space in my backyard
              to place the projector behind the projection screen like I wanted to (as opposed to in front of it), which caused me to cast
              a shadow on the screen. I will need to make sure I have large enough of an outdoor space and that I plan the performance
              for a clear night to make sure all goes smoothly.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              I also was unable to do the setup with a <i>PA system</i><sup>2</sup>, which is something I still need to look into how to obtain (probably going to rent one). 
              I am also still missing some props, such as a chaise lounge, mannequins, and costumes which I want to include in the final performance. 
              I think I will do another mock setup before the final performance with costumes and everything.
            </p>
            <p className={resize ? "sourceListBig" : "sourceListSmall"}>
              <ul>
                <li>1. "Preparing a Performance", <i>Final Stage Setup/Rehearsal</i></li>
                <li>2. "Preparing a Performance", <i>Equipment</i></li>
              </ul>
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default PerformanceVlog5