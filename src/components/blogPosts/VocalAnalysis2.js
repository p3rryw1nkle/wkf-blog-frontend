import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Audio from "../audio/Audio"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import aloneTime from '../audio/secondPost/aloneTime.wav';
import practice from '../audio/secondPost/practice.m4a';
import useMatchMedia from '../../tools/matchMedia';

const VocalAnalysis2 = () => {
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
              Vocal Analysis #2: Alone Time
            </h1>
            <h1 className={resize ? "largeH1" : "smallH1"}>
              6/17/2022
            </h1>
          </div>
          </AccordionSummary>
          <AccordionDetails>
            <Audio audioFile={aloneTime}/>
            <p className={resize ? "largeP" : "smallP"}>
              This is audio of me singing my song “Alone Time” on 6/26/2022. Firstly, I think it's
              good to mention what I feel like I did well before I get into the criticism. For one, I feel that
              I have much better breath control on this song. There's not one part where I feel out of breath,
              and you can even hear some <i>vibrato</i><sup>1</sup> at the end of some phrases, such as "of my own" (@ 0:35), which is 
              an indication that I'm doing something right. This could be because I have gotten better at breath control from 
              my exercises or because the song is simply easier to sing than the one in my last analysis, but it's 
              probably a mixture of both.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              In terms of criticism, one of the first things I immediately noticed when listening back is that
              I'm <i>singing sharp</i><sup>2</sup> as opposed to the last vocal analysis where I'm mainly <i>singing flat</i><sup>3</sup>. I also hear
              myself singing more <i>nasally</i><sup>4</sup>, particularly on phrases such as "who think they know the world" (@ 0:19).
              There's nothing wrong with singing nasally in it of itself, however I think that it may be making it more
              difficult for me to sing on key. It's likely the result of singing with a closed vowel shape
              (think sounds like 'eee' or 'ayyy') which tend to lend themselves toward the lengthener muscles, which
              may be causing me to sing sharp. To combat this, I think it would be helpful to practice singing the
              song but with more open vowels, such as "ehhh" or "ahhh".
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              Secondly–and this plays into the first criticism–there are some instances at the end of words
              where I close off the vowel too early. For example, at 1:46, instead of singing "Aloooone", it sounds
              more like "alonnnne", meaning more emphasis is put on the 'n' sound as opposed to the 'o'. This can
              be problematic because consonant sounds aren't as easy to <i>resonate</i><sup>5</sup>, and sounds like 'n' or 'r' at
              then of phrases further lend themselves to nasally singing–not to mention are hard on the ears. Going forward, 
              I'm going to focus more on drawing out the words, keeping the vowels open, and waiting to close them off 
              until the very end.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              While I'm recording these anlaysis clips I've also noticed that it's easier for me to sing on-key 
              when the instrumental is playing directly in my ears as opposed to when it's playing through a speaker.
              This may be problematic because when I'm performing I'm not always going to have an in-ear monitor to
              hear the music directly, not to mention there will also be an audience and other aspects of the performance 
              to pay attention to which will make it harder to focus and stay in tune. This being said, going forward
              I'm probably going to practice and record these clips with the instrumental playing out loud in the background
              as opposed to playing directly in my ears to develop more control.
            </p>
            <Audio audioFile={practice}/>
            <p className={resize ? "largeP" : "smallP"}>
              Above is a Voice Notes recording of me going through the melodies of the song and practicing singing
              each note with as open of a vowel as I can. Some of the higher notes were pretty hard for me to sing with an open vowel,
              such as "own" at 0:36 and "alone" at 1:40, since they are at the top of my chest range (C4-D#4). However, the point
              of the exercise is to cement the melodies to memory and sing more open than I normally would so that when I'm singing 
              the song for real, I'm able to find more balance between open/closed as well as shortner/lengthener dominance.
            </p>
            <p className="sourceList">
              <ul>
                <li>1. "How to Train Your Voice", <i>Vibrato</i></li>
                <li>2, 3. "How to Train Your Voice", <i>Pitch</i></li>
                <li>4. "How to Train Your Voice", <i>Tone</i></li>
                <li>5. "How to Train Your Voice", <i>Tone, Glossary: Resonance</i></li>
              </ul>
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default VocalAnalysis2