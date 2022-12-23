import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
// import schema2 from '../images/schema2.png'
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import useMatchMedia from '../../tools/matchMedia';
import GetImages from "../../tools/imageHandler";


const SchemaSketch2 = () => {
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
                Schema Sketch #2: Medieval Medley
              </h1>
              <h1 className={resize ? "largeH1" : "smallH1"}>
                6/29/2022
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container justifyContent="center">
              <Grid container xs={6}>
                {/* <img alt="schema2" width="100%" height="100%" src={schema2}/> */}
                <GetImages name="schema2" size="100%"/>
              </Grid>
            </Grid>
            <p className={resize ? "largeP" : "smallP"}>
              This is my second concept sketch of the so-called "map" of the performance. In terms of my previous sketch, in this one I added pictures of 
              various archetypes I took from medieval manuscripts as well as lines emitting from the 'archetypal prism' on top to demonstrate that the 
              characters are being projected by the subconscious mind. 
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              I changed the archetypes from symbols in the last sketch to actual characters because I think it's more representative of how the archetypes 
              show up within the performance–as characters rather than random symbols that are embodied through different songs. I also thought 
              it was fitting to take the characters from medieval manuscripts, because the appearance of certain characters 
              throughout medieval texts, folklore, and fairytales is in itself a display of the evidence and relevance of the archetypes.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              The characters are meant to follow the story arc of the performance, meaning each character is supposed to morph into and become the next, moving 
              counter-clockwise. Maybe this isn’t very clear based off the images I chose, however that’s the idea that I’m working towards and what I plan on 
              improving upon in my next sketch. Starting with the wizard (top left), which represents a psyche that is cloaked and cut off from itself, it morphs and 
              integrates personality aspects of the other archetypes, and ultimately arrives at the syzygy (top right), which represents the unification of the psyche.
              The story arc of the performance aligns with the concept of individuation where more and more parts of the psyche are channeled and integrated.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              The sun and the moon are also representative of this unification of the psyche. In the words of Jung, the personality “must be extended both upwards 
              and downwards”. The idea is that in order to become more psychically whole, it’s necessary to bring the unconscious into the consciousness, as 
              opposed to just reenforcing what’s already conscious, which would in turn strengthen the force and hold of the unconscious.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              I feel pretty satisfied with this sketch. It definitely feels like I've made some strides in the right direction, but it's still
              not complete. In terms of my next sketch I would like to:
            </p>
            <ol className={resize ? "largeP" : "smallP"}>
              <li>Make the transition between characters more apparent by finding images that are more similiar to one another</li>
              <li>
                Try to incorportate the idea of spiritual alchemy within the diagram (which Jung paralleled with individuation). I am thinking 
                of adding more moth-related imagery (i.e. the stages of larvae, caterpillar, coccoon, moth) to further accentuate the metamorphosis 
                that is undergone during the process of individuation.
              </li>
              <li>
                Redesign the spiral and 'projection' lines–make spiral more in the background and projection lines more in the foreground.
                Also add movement to the spiral to make it clear that it is moving counter clockwise and outwards, which represents the growth
                into the unconscious.
              </li>
            </ol>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default SchemaSketch2