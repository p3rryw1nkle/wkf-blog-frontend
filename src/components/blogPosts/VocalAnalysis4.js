import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Audio from "../audio/Audio"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import foolsSong from '../audio/fourthPost/fools_song.wav';
import vocalFry from '../audio/fourthPost/vocalFry.m4a';
import vowelModification from '../audio/fourthPost/vowelModification.wav';
import useMatchMedia from '../../tools/matchMedia';

const VocalAnalysis4 = () => {
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
                Vocal Analysis #4: Fool's Song
              </h1>
              <h1 className={resize ? "largeH1" : "smallH1"}>
                7/6/2022
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Audio audioFile={foolsSong}/>
            <p className={resize ? "largeP" : "smallP"}>
              This is a clip of me singing my song “fool's song” on 7/6/2022. In this song what I've struggled with the most isn't singing
              the right pitch, but singing the right pitch with the right tonality. In the beginning of the song I want it to sound gentle, almost like
              a lullaby. Because of this, I tend to sing with a lot of breath to make it sound airy and soft. However, when I attempt
              the notes that are more in my mixed range, such as "one" @ 0:14 and "weirdo" @ 0:19, it's harder to maintain fullness. My voice also
              sounds squeeky on certain notes, like on "freak show" @ 0:34. There are a couple exercises I think would help with this. First, a <i>vocal fry</i><sup>1</sup>
              may help to to relax the vocal chords and make it easier to sing higher. Secondly, a vowel modification exercise may help to balance out
              the bright, squeeky tonality of my voice.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              I also struggle with breath control in this song, mainly in the transition from the first verse to the first chorus @ 0:37-44.
              As you can hear, I have to stop to take a quick breath right after the last phrase of the first verse when the most natural
              thing to do would be to sing straight into to the first line of the chorus. I think this is partly to blame on not taking a big enough
              breath right before the phrase and also on not having this section of the song well-trained. Some exercises I could do to help this
              are to a <i>'z'-replacement</i><sup>2</sup> or exercising this phrase with the SOVT straw.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              There were several notes that were off-key that may be the result of weaknesses in other areas such as breath control, vowels, and tone placement,
              however I still intend to iron over them by playing and singing along with the melody. I also accidentally sang the wrong lyrics in some places,
              however that's something I just need to be more conscious of going forward.
            </p>
            <Audio audioFile={vocalFry}/>
            <p className={resize ? "largeP" : "smallP"}>
                Above is a clip of me doing a vocal fry. The intention of this exercise is to loosen and relax the vocal chords as well as strengthen the
                muscles responsible for the lowest vocal register, which will help bring balance and ease to the mixed register.
            </p>
            <Audio audioFile={vowelModification}/>
            <p className={resize ? "largeP" : "smallP"}>
                This is a clip of me doing a vowel modification using an "ah" vowel. Since in this particular song I struggle more with the notes being too
                closed and whiny, I chose to do this exercise on a whole, open vowel to bring more fullness to my mixed range.
            </p>
            <p className="sourceList">
              <ul>
                <li>1. "How to Train Your Voice", <i>Exercises: Vocal Fry</i></li>
                <li>2. "How to Train Your Voice", <i>Exercises: Vocal Fry</i></li>
              </ul>
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default VocalAnalysis4