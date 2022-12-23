import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Audio from "../audio/Audio"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import theController from '../audio/thirdPost/theController.wav';
import sovtStraw from '../audio/thirdPost/SOVTStraw.wav';
import changeWithMe from '../audio/thirdPost/changeWithMe.m4a';
import useMatchMedia from '../../tools/matchMedia';

const VocalAnalysis3 = () => {
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
              Vocal Analysis #3: The Controller
            </h1>
            <h1 className={resize ? "largeH1" : "smallH1"}>
              6/24/2022
            </h1>
          </div>
          </AccordionSummary>
          <AccordionDetails>
            <Audio audioFile={theController}/>
            <p className={resize ? "largeP" : "smallP"}>
              This is a clip of me singing my song “the controller” on 7/2/2022. Firstly, I notice that my pitch
              accuracy seems to be a lot better than my previous two posts. I think this could be because I have practiced
              and sang the song more than the other two, but it may also just be the payoff of daily exercises.
              For this take, I decided to simulate more of a 'real-life' scenario where I recorded at a distance from the microphone while the 
              instrumental played through my laptop speakers, as opposed to the previous posts where I recorded as the 
              music played directly into my ears via headphones. I thought this would have made it harder to
              sing, however now I'm thinking that maybe having the instrumental playing directly in my ears
              may have caused me to think I was singing better than I actually was. I also sang standing up during this take,
              as opposed to the previous takes where I was sitting down, which most likely improved my breath control
              and made it easier to sing (<i>see 'posture'</i>)<sup>1</sup>. I am also hearing more and more vibrato in my voice, which is nice because it's supposed
              to be a sign of good technique and it's something I don't remember having at the beginning of the experience.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              Although I hear my breath support getting better and better, there are still some instances where I run out of breath.
              For example, @ 1:32 at the end of "this game that we're feeding" I run out of air and it causes my voice to shake 
              and sputter out before I finish the phrase. Other areas that I struggled with breath were the second verse
              @ 2:48 - 3:16 and the very last phrase @ 3:38. This song in particular has a lot of sections where there are not a
              lot of gaps to take breath in between phrases, so in order to maintain power I'm going to need to strengthen my voice
              so that it can supply the same amount of <i>vocal pressure</i><sup>2</sup> for longer. One way of doing this is <i>SOVT straw</i><sup>3</sup> exercises,
              generate backpressure and cause the repsiratory system to work harder in practice than it would in performance, which would
              make supporting these phrases easier.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              A couple of other things I noticed were that one, @ 1:50 I'm straining and <i>'pulling chest voice'</i><sup>4</sup> and two, @ 0:30 I don't <i>articulate</i><sup>5</sup>
              well enough, making "my mind" sound more like "my mine". The latter is an easy fix, I just need to focus on articulating
              my words more clearly, however the former is a trickier problem. When I sing "will you change with me" @ 1:50, "change" is the highest
              note of the song, it's a D#4 and it's right at the tip of my chest-dominant range. Holding on to the shortner muscles in this area
              where they're not well trained may cause them to break and infict vocal damage. As a solution, it's better to use more of a
              mixed note that's both shortner and lengther dominant so that the shortner muscles don't give out. Additionally, it's important
              that I don't increase the force/volume as much as I did, espcially during tricky notes like this, which may cause even more <i>vocal damage</i><sup>6</sup> . 
              If I <i>adduct</i><sup>7</sup>  my vocal chords properly, I shouldn't need to increase the force so much to produce a resonant sound, which will make it 
              easier to sing and less likely that I damage my voice.
            </p>
            <Audio audioFile={sovtStraw}/>
            <p className={resize ? "largeP" : "smallP"}>
              Above is a clip of me doing an SOVT straw exercise, particularly in my mixed range where I struggle to find power the most. As you can hear, 
              the straw sort of 'holds' my breath back which generates backpressure and causes the breath system to have to work harder than normal. 
              The goal of the exercise is to train my lungs with some resistance so that when I am actually performing, it will be much easier to sing.
            </p>
            <Audio audioFile={changeWithMe}/>
            <p className={resize ? "largeP" : "smallP"}>
              Above is a clip of me practicing the "change with me" phrase that I was previously straining on but this time with more of a mixed coordination.
              As you can hear, although I am reaching the notes it still sounds pretty breathy, which means my vocal cords aren't adducting completely and
              too much air is escaping between them. However, I probably just need more practice, and rehearsing this range with SOVT straw especially
              would help.
            </p>
            <p className="sourceList">
              <ul>
                <li>1. "How to Train Your Voice", <i>Posture</i></li>
                <li>2. "How to Train Your Voice", <i>Breath Control</i></li>
                <li>3. "How to Train Your Voice", <i>SOVT Straw</i></li>
                <li>4. "How to Train Your Voice", <i>Vocal Gaps/Breaks</i></li>
                <li>5. "How to Train Your Voice", <i>Articulation</i></li>
                <li>6. "How to Train Your Voice", <i>Vocal Damage</i></li>
                <li>7. "How to Train Your Voice", <i>Glossary: Adduction</i></li>
              </ul>
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default VocalAnalysis3