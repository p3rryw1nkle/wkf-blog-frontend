import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Audio from "../audio/Audio"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import theAnomaly from '../audio/sixthPost/theAnomaly.wav';
import anomalyRuns from '../audio/sixthPost/anomalyRuns.m4a';
import useMatchMedia from '../../tools/matchMedia';

const VocalAnalysis6 = () => {
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
                Vocal Analysis #6: the Anomaly
              </h1>
              <h1 className={resize ? "largeH1" : "smallH1"}>
                7/20/2022
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Audio audioFile={theAnomaly}/>
            <p className={resize ? "largeP" : "smallP"}>
                This is a clip of me singing my song “the anomaly” on 7/20/2022. The hardest part of this song for me is the runs at the end, 
                “reason and pain…must be divine” @ 2:30-2:51. Not only are they in a difficult range (C4-F4), the rhythm is also a bit irregular. This caused me 
                to get sort of tense and sing a bit stiffer than I would like, which contributed to some whinier notes like “divine” @ 2:47, “line” @ 2:54, 
                and “mind” @ 2:59. To balance this out, I think it would be helpful to play and sing along to the melodies with more <i>open vowels</i><sup>1</sup> at a 
                slow pace, gradually speeding up until the runs are more comfortable and fluid. Other <i>agility exercises</i><sup>2</sup> may also help with this.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
                I am also still struggling to find my <i>scream voice</i><sup>3</sup>, which I attempt at the very end. I can do a vocal fry, but adding power to it is where I 
                fall short. It would probably be helpful to find more tutorials on how to scream while continuing daily practice.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
                Overall, I think I sang this song decently well. I would like to get the runs more locked down, however I think the first 2/3 of the song 
                is generally okay. Asides from some pitchiness, I think my main task for the rest of the song would be to continually practice and strengthen 
                my voice with regular daily exercises. Through these recordings I’m starting to realize that a lot of my struggle is not technique or skill but <i>confidence</i><sup>4</sup>,
                which requires more experience.
            </p>
            <Audio audioFile={anomalyRuns}/>
            <p className={resize ? "largeP" : "smallP"}>
                This is a clip of me practicing the vocal runs from @ 2:30-2:51 as mentioned above, on an open "ah" vowel. The purpose of this exercise is to
                1. lockdown the melody, 2. balance out closed, whiny singing with an open vowel and 3. improve vocal agility by gradually increasing the speed I practice at.
            </p>
            <p className="sourceList">
              <ul>
                <li>1. "How to Train Your Voice", <i>Vowel Modification</i></li>
                <li>2. "How to Train Your Voice", <i>Agility</i></li>
                <li>3. "How to Train Your Voice", <i>Screaming</i></li>
                <li>4. "How to Train Your Voice", <i>Confidence</i></li>
              </ul>
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default VocalAnalysis6