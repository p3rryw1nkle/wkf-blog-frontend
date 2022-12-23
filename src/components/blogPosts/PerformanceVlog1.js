import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Video from "../video/Video"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import useMatchMedia from '../../tools/matchMedia';

const PerformanceVlog1 = () => {
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
                Performance Vlog #1: Compiling the Final Set
              </h1>
              <h1 className={resize ? "largeH1" : "smallH1"}>
                6/8/2022
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="video">
              <Video vidLink='https://www.youtube.com/watch?v=mDwUJ_3p1TA'/>
            </div>
            <p className={resize ? "largeP" : "smallP"}>
              In this vlog I go over how I have taken each song and moved it into a <i>final Ableton project</i><sup>1</sup> as well as my reasons for doing so.
              I also talk about how I have added a <i>'stopper'</i><sup>2</sup> to make the set stop playing automatically if needed, how I am dragging in and 
              <i> planning out the visuals</i><sup>3</sup>, as well as what I plan to accomplish for my next update. Below I have linked some videos that helped me
              in this process:
            </p>
            <p className={resize ? "sourceListBig" : "sourceListSmall"}>
              <ul>
                <li>1. "Preparing a Performance", <i>Compiling a Live Set Into a Single Project</i></li>
                <li>2. "Preparing a Performance", <i>IAC Driver</i></li>
                <li>3. "Preparing a Performance", <i>Synchronizing and Displaying Visuals</i></li>
              </ul>
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

PerformanceVlog1.displayName = "vlog";

export default function Vlog1() {
  return <PerformanceVlog1/>;
}