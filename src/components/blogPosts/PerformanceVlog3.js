import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Video from "../video/Video"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import useMatchMedia from '../../tools/matchMedia';

const PerformanceVlog3 = () => {
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
              Performance Vlog #3: Visuals
            </h1>
            <h1 className={resize ? "largeH1" : "smallH1"}>
              6/21/2022
            </h1>
          </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="video">
              <Video vidLink='https://youtu.be/xGjv6YSvc7U'/>
            </div>
            <p className={resize ? "largeP" : "smallP"}>
              In this vlog I go over how I have hooked up my computer to a projector to <i>display visuals</i><sup>1</sup> while I'm also playing music.
              In doing this process I discovered several potential concerns, including how I am going to power everything in the final stage setup, chords/stage setup,
              the resolution of the projector, as well as the lagging processor on my computer, which I also discuss in this vlog. Below I have linked some 
              videos that helped me in this process:
            </p>
            <p className={resize ? "sourceListBig" : "sourceListSmall"}>
              <ul>
                <li>1. "Preparing a Performance", <i>Synchronizing and Displaying Visuals</i></li>
              </ul>
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default PerformanceVlog3