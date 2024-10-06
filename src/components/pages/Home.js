// Home page for the website

import React from 'react'
import Grid from '@mui/material/Grid';
import "./Pages.css"
import useMatchMedia from '../../tools/matchMedia';
import paperTexture from "../images/paperTexture.jpg"
// import GetImages from "../../tools/imageHandler";
import Video from "../video/Video";
import home_header from "../images/home_header.png";
import bloomsTaxonomy from "../images/Blooms-Taxonomy.png";
import instagram from "../images/icons/instagram.png"
import spotify from "../images/icons/spotify.png"

export default function Home() {
  const resize = useMatchMedia(900);

  return (
    <div className="humanistic-font">
      <Grid container justifyContent="center" marginTop={resize ? 30 : 5} marginBottom={resize ? 30 : 5} display="flex">
        <Grid container item justifyContent="center" xs={12}>
          <Grid container item justifyContent="center" xs={resize ? 8 : 10}>
            {/* <GetImages name="home_header" size="100%"/> */}
            <img alt="home_header" width="80%" height="100%" src={home_header}/>
          </Grid>
        </Grid>
        <Grid container item justifyContent="center" xs={10} style={{ backgroundImage: `url(${paperTexture})` }}>
          <p className={resize ? "largeH1" : "smallH1"}>Home</p>
          <p className={resize ? "largeP" : "smallP"}>
            This webpage is dedicated to an audiovisual performance called <i>the Wizard, the King, & the Fool</i>.
            It was initiated as a practicum project for the <a href="https://mcbride.mines.edu/">McBride Honors program</a>, where I was tasked with designing
            and conducting my own learning experience. In this learning experience I decided to combine my passions for 
            art, music, psychology, and philosophy and put together my first solo music performance with almost entirely
            original material. The Wizard, the King, & the Fool is a medieval theatre style psychological exploration, which inspired
            by the theories of psychologist Carl Jung, uses music and AI generated art amongst other mediums to channel, 
            observe, and integrate several distinct 'archetypes' of the 'collective unconscious'. For a more in-depth explanation 
            of the performance, visit the 'Lore' page.
          </p>
          <p className={resize ? "largeH2" : "smallH2"}>
            Watch the show here:
          </p>
          <Video vidLink="https://www.youtube.com/watch?v=s5vGW-U6wzw&ab_channel=perrywinkle"/>
          <p className={resize ? "largeP" : "smallP"}>     
            As a part of this learning experience I was required to create a list of several objectives and outcomes. In the
            blog section you will find posts that reflect my journey towards fulfilling these objectives and outcomes, which are as follows:
          </p>
          <p className={resize ? "largeH2" : "smallH2"}>
            Objectives
          </p>
          <Grid item xs={12}>
            <ol className={resize ? "largeP" : "smallP"}>
              <li>
                How is the “collective unconscious” revealed through artistic expression, and how can music be used to explore and integrate its archetypes within the conscious realm?
              </li>
              <li>
                How to self-organize and promote a small, independent, electronic music performance?
              </li>
              <li>
                How may singing skills be self-taught?
              </li>
            </ol>
          </Grid>
          <p className={resize ? "largeH2" : "smallH2"}>
            Outcomes
          </p>
          <Grid item xs={12}>
            <ol className={resize ? "largeP" : "smallP"}>
              <li>
                I can use music to acknowledge, understand, and integrate various character archetypes. 
              </li>
              <li>
                I can organize, create, and manage the resources necessary to organize my own musical performance.
              </li>
              <li>
                I can demonstrate audible improvement in vocal technique and ability.
              </li>
            </ol>
          </Grid>
          <Grid item container justifyContent="center" xs={resize ? 8 : 12}>
            {/* <GetImages name="blooms_taxonomy"  size="100%"/> */}
            <img alt="blooms-taxonomy" width="100%" height="100%" src={bloomsTaxonomy}/>
          </Grid>
          <p className={resize ? "largeP" : "smallP"}>
            The process of fulfilling these objectives/outcomes was organized according to Bloom's Taxonomy, a framework for
            building effective learning experiences. First, I gathered knowledge to understand my undertaking by reading and summarizing "The Archetypes and
            the Colelctive Unconscious" by Carl Jung while compiling two informative guides, "How to Train Your Voice" and "How to
            Put Together a Performance" to lean on throughout my experience. Secondly, I applied and analyzed what I learned
            in a series of blog posts where I documented the development of the performance narrative via "schema sketches" (which later served
            as the audience's guide to the performance), my vocal ability, and tackling the technicalities of the performance. Finally,
            I put all of my experiences together and organized my own performance. You can find my synopsis of "The Archetypes
            and the Collective Unconscious", my blog posts, as well as my how-to guides documenting my journey all on this site.
          </p>
          <p className={resize ? "largeH2" : "smallH2"}>
            Tune In
          </p>
          <Grid container item justifyContent="center" xs={12} spacing={5}>
            <Grid item>
              <a href="https://www.instagram.com/itsperrywinkle/" target="_blank" rel="noreferrer noopener">
                {/* <GetImages name="instagram"  size={resize ? "150px" : "75px"}/> */}
                <img alt="instagram" width={resize ? "150px" : "75px"} height={resize ? "150px" : "75px"} src={instagram}/>
              </a>
            </Grid>
            <Grid item>
              <a href="https://open.spotify.com/artist/5AYfjiSvcjUfbHPLiGTfrI" target="_blank" rel="noreferrer noopener">
                {/* <GetImages name="spotify_logo"  size={resize ? "150px" : "75px"}/> */}
                <img alt="spotify" width={resize ? "150px" : "75px"} height={resize ? "150px" : "75px"} src={spotify}/>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
