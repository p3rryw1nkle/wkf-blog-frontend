import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Audio from "../audio/Audio"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import PIE from '../audio/fifthPost/PIE.wav';
import screamExercise from '../audio/fifthPost/screamExercise.m4a';
import useMatchMedia from '../../tools/matchMedia';

const VocalAnalysis5 = () => {
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
                Vocal Analysis #5: Poop is Everywhere!
              </h1>
              <h1 className={resize ? "largeH1" : "smallH1"}>
                7/14/2022
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Audio audioFile={PIE}/>
            <p className={resize ? "largeP" : "smallP"}>
                This is a clip of me singing my song “poop is everywhere!” on 7/14/2022. In this take I sang into a wireless microphone and 
                moved around as if i were performing as opposed to standing still to simulate more of a real experience. I felt like this 
                helped me to be more emotive and theatrical so-to-speak, but it also introduced some issues.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
                For one, there are several instances where I get off rhythm from the instrumental, “is there someone out to get me…” @ 1:49 and 
                “God within me…” @ 3:22 for example. I think this mainly has to do with the fact that it was hard for me to hear the instrumental 
                when I was moving around. I think this is less a matter of vocal technique than it is performance technique, which I think 
                I could solve by counting beats in my head as opposed to singing instinctually.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
                There are also some notes that are way off-pitch, “control” @ 1:35 being the main one. I think this was because I was amped up and 
                anticipated the note would be higher than it actually was, which caused me to sing sharper than I should have. However, most 
                of the other notes were surprisingly on-pitch, and as I was singing I didn’t feel that this note was particularly weak or hard 
                to sing. This makes me think this is also not as much a matter of technique/ability matter as it is practice + experience 
                singing this song in particular. Before the final performance, I think I should record myself performing each song in a similar 
                manner where I’m pretending to perform so I can identify these mistakes I tend to make and correct them as I’m singing.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
                Lastly, at the end of “and then release it” @ 2:54, I try to do sort of a metal scream which I failed at miserably. However, I think 
                learning the technique to scream is a good idea as it will add a lot more expression and flexibility to my voice:
            </p>
            <Audio audioFile={screamExercise}/>
            <p className={resize ? "largeP" : "smallP"}>
                **EAR BLEED WARNING** Above is a clip of me attempting to do a <i>'fry scream'</i><sup>1</sup>. Basically, I adducted my vocal folds and did a 
                vocal fry which I gave more power and directed into my soft pallette. Based on the tutorial I watched it's supposed to produce more of 
                a heavy metal-like scream–mine ended up sounding more like a screech than a scream, but you get the idea. Once I had the basic 
                steps down, I then tried to transition from the "release it" phrase into the scream. The thing about screaming is that you can't do
                too much of it, especially if you aren't good at it, otherwise you may damage your vocal folds. So I probably just need to practice
                this more a little bit each day leading up to the performance.
            </p>
            <p className="sourceList">
              <ul>
                <li>1. "How to Train Your Voice", <i>Screaming</i></li>
              </ul>
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default VocalAnalysis5