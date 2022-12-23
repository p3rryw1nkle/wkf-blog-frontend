import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Video from "../video/Video"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import useMatchMedia from '../../tools/matchMedia';

const PerformanceVlog4 = () => {
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
                Performance Vlog #4: Vocals
              </h1>
              <h1 className={resize ? "largeH1" : "smallH1"}>
                7/10/2022
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="video">
              <Video vidLink='https://youtu.be/Mfoghtc1VmU'/>
            </div>
            <p className={resize ? "largeP" : "smallP"}>
              In this vlog I talk about how I have purchased an <i>audio interface</i><sup>1</sup> and wireless microphone in order to sing over my instrumentals + record
              while performing. This process was honestly pretty straightforward and much less complicated than I anticipated, which I go over in my
              how-to guide. For next update, I hope to have more of a <i>"final" setup</i><sup>2</sup> prepared with everything hooked up together, and to be able to demo 
              part of the performance.
            </p>
            <p className={resize ? "sourceListBig" : "sourceListSmall"}>
              <ul>
                <li>1. "Preparing a Performance", <i>Equipment</i></li>
                <li>2. "Preparing a Performance", <i>Final Stage Setup/Rehearsal</i></li>
              </ul>
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default PerformanceVlog4