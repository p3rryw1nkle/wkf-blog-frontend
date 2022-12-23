import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
// import schema3 from '../images/schema3.png'
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import useMatchMedia from '../../tools/matchMedia';
import GetImages from "../../tools/imageHandler";

const SchemaSketch3 = () => {
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
                Schema Sketch #3: The Story
              </h1>
              <h1 className={resize ? "largeH1" : "smallH1"}>
                7/30/2022
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container justifyContent="center">
              <Grid container xs={6}>
                {/* <img alt="schema3" width="100%" height="100%" src={schema3}/> */}
                <GetImages name="schema3" size="100%"/>
              </Grid>
            </Grid>
            <p className={resize ? "largeP" : "smallP"}>
              This is my third and final concept sketch of the so-called "map" of the performance.
              In terms of my previous sketch, in this one I added pictures of figures/archetypes that are more fitting to the songs they represent, and also 
              show the metamorphosis from the wizard into the syzygy. I changed the design so that the 'projection lines' are now eminating from the spiral,
              as opposed to the beacon, which is more aesthetically pleasing and less visually confusing. I also switched over to a digital format to make it easier to create.
            </p>
            <p className={resize ? "largeP" : "smallP"}>
              Each character corresponds to a certain song or section of the performance. Each character (wizard, king, fool) is further split up into subarchetypes as described below.
              For example, starting in the top left and moving counter-clockwise, here are the characters and their meanings:
            </p>
            <ol className={resize ? "largeP" : "smallP"}>
              <li>
                Wizard - <i>the Anomaly</i>
                <ul>
                  <li>
                    About getting in touch with your insticts and cultivating a vision for the future.
                  </li>
                  <li>
                    "Long lost sorcery, breathe through me, like sweet electricity"
                  </li>
                  <li>
                    "Transforming, transmuting, becoming the new way to be"
                  </li>
                </ul>
              </li>
              <p></p>
              <li>
                Hermet - <i>Alone Time</i>
                <ul>
                  <li>About solitude and secluding yourself for the sake of personal growth.</li>
                  <li>"Someday this venture of my own will give so much more, that's why I need to be alone"</li>
                </ul>
              </li>
              <p></p>
              <li>
                Manipulator - <i>the Controller</i>
                <ul>
                  <li>About the urge to control everything in the effort of bringing vision into reality</li>
                  <li>"I'll make you see, things you won't believe, even if it's the death of me"</li>
                </ul>
              </li>
              <p></p>
              <li>
                King - <i>New Moon</i>
                <ul>
                  <li>About the desire for power and to be the ruler of your own world</li>
                  <li>"Conqueror, creator, diviner, destroyer, I can be everything"</li>
                </ul>
              </li>
              <p></p>
              <li>
                Priest - <i>Save Yourself</i> 
                <ul>
                  <li>
                    About self-deception and falling for schemes in an effort to have control
                  </li>                  
                  <li>
                    "Soon as I think that I'm free, I don't know what to believe, so I succumb to the next scheme, and let it delude me"
                  </li>
                </ul>
              </li>
              <p></p>
              <li>
                Warrior - <i>Becoming No One</i>
                <ul>
                  <li>
                    About giving up a crusade or the desire for things to go your way.
                  </li>
                  <li>
                    "Face to face with all deceit, kingdoms of make believe, one by one learning to lose, unlocks the truth in everything"           
                  </li>
                </ul>
              </li>
              <p/>
              <li>
                Fool - <i>Fool's Song</i>
                <ul>
                  <li>
                    About embracing humility and humor.
                  </li>
                  <li>
                    "If you feel like a loser, you're not the only one"
                  </li>
                </ul>
              </li>
              <p/>
              <li>
                Zombie - <i>Acedia</i>
                <ul>
                  <li>
                    About burnout and laziness
                  </li>
                  <li>
                    "Let's lay around and stare at the floor, I can't stand to think anymore"
                  </li>
                </ul>
              </li>
              <p/>
              <li>
                Death - <i>WTF?</i>
                <ul>
                  <li>
                    About giving up your identity and discovering deeper truths about yourself.
                  </li>
                  <li>
                    "If you surrender all that you know, then it may dawn on you"
                  </li>
                  <li>
                    "Everything you've ever faced, was your own mind rearranged"
                  </li>
                </ul>
              </li>
              <p/>
              <li>
                Syzygy - <i>rest of performance</i>
                <ul>
                  <li>
                    About uniting all sides of yourself.
                  </li>
                </ul>
              </li>
            </ol>
            <p className={resize ? "largeP" : "smallP"}>
              The first song of each character archetype loosely highlights their 'good' side while the last highlights their 'negative' side.
              This is represented by the shading of the prism/triangle and the presence of the sun/moon, looming over the performance. It's a reminder
              that unity is achieved "not by imagining figures of light, but making the darkness conscious". For example, the 'negative' of the Wizard,
              (i.e. manipulation) becomes the positive of the King (ambition). This switching of perspective is ultimately how the performance seeks to
              achieve harmony and unity between the archetypes.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default SchemaSketch3