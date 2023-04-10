import React from 'react'
import Grid from '@mui/material/Grid';
import "./Pages.css"
// import finalDraft from "../images/finalDraft.png"
// import wizard from "../images/archetypes/wizard.png"
// import controller from "../images/archetypes/controller.png"
// import king from "../images/archetypes/King.png"
// import warrior from "../images/archetypes/warrior.png"
// import jester from "../images/archetypes/jester.png"
// import acedia from "../images/archetypes/acedia.png"
// import death from "../images/archetypes/death.png"
// import syzygy from "../images/archetypes/syzygy.png"
// import hermit from "../images/archetypes/hermit.png"
// import priest from "../images/archetypes/priest.png"
import paperTexture from "../images/paperTexture.jpg"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import useMatchMedia from '../../tools/matchMedia';
import GetImages from "../../tools/imageHandler";

export default function Lore() {
  const resize = useMatchMedia(900);

  return (
    <div className="humanistic-font">
      <Grid container justifyContent="center" marginTop={resize ? 30 : 5} marginBottom={resize ? 30 : 5} display="flex">
        <Grid item container xs={10} justifyContent="center" style={{ backgroundImage: `url(${paperTexture})` }}>
          <p className={resize ? "largeH1" : "smallH1"}>The Story of <i>the Wizard, the King, & the Fool</i></p>
          <p className={resize ? "largeP" : "smallP"}>
            <i>The Wizard, the King, and the Fool</i> follows the process of <i>individuation</i>, described by Carl Jung 
            as “the psychological process that makes of a human being an ‘individual’-a unique, indivisible unit 
            or ‘whole man,’” (Jung). The show is organized into several acts which correspond to distinct archetypes, “universal, inborn models of people, behaviors, 
            and personalities that play a role in influencing human behavior” (i.e. the Wizard, the King, and the Fool). These archetypes form part 
            of the collective uncsonscious, which can be thought of as an instincintual, biologically inherited, 
            “psychic system of a collective, universal, and impersonal nature which is identical in all individuals” (Jung). 
            Jung believed that the path toward individuation largely meant becoming aware of and integrating one's own archetypes 
            in order to create inner harmony. For more information regarding Jung's theories, visit the <a href="/Synopsis">Book Synopsis</a> page.
          </p>
          <p className={resize ? "largeP" : "smallP"}>
            Each archetype is embodied through several songs which explore different aspects of their respective archetype.
            Furthermore, the music is accompanied by <a href="https://docs.google.com/document/d/1f6hIF1NbuU5EjULjg2JmdMxr0-OPKv2UE-SWwys4DMs/edit">visuals</a> consisting of AI-generated animations and video compilations that mimick
            dreaming and a state of "active imagination", whose symbolism Jung believed was a powerful tool in understanding the archetypes and the unconscious mind. 
            The following is a list of each song in the performance and its lyrics. It is followed by an explanation of the 'map' of the performance used in the promotional material
            which may be used to better understand the stucture of the show.
          </p>
          <Grid item container xs={12} lg={8} justifyContent="center">
          <ol className={resize ? "largeP" : "smallP"}>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      Enter Perrywinkle
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container marginRight={2}>
                    <p>
                      <i>
                      “My soul, where are you? Do you hear me? I speak, I call you - are you there? 
                      I have returned, I am here again. I have shaken the dust of all the lands from my feet, 
                      and I have come to you, I am with you. After long years of long wandering, 
                      I have come to you again.”
                      </i>
                      - Carl Jung
                    </p>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <Grid item container justifyContent="center">
              <p className={resize ? "largeH1" : "smallH1"}>the Wizard</p>
            </Grid>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      the Anomaly
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    <Grid item container xs={12} lg={6} marginLeft={2}>
                      <p>
                        Long lost sorcery, breathe through me <br/>
                        Like sweet electricity <br/>
                        <br/>
                        Answers come to me, easily <br/>
                        Like ancient memory <br/>
                        (Supernatural, instinctual, celestial, out of control) <br/>
                        <br/>
                        Transforming, transmuting, becoming the new way to be <br/>
                        <br/>
                        Spirit witness me <br/>
                        Set me free <br/>
                        Awaken the machine <br/>
                        <br/>
                        Reason and pain, it's all in the same <br/>
                        A third eye <br/>
                        Again and again, out of the djinn <br/>
                        Impulses rise <br/>
                        Whispers at night, from a deeper mind <br/>
                        Must be divine <br/>
                        <br/>
                        Fall in line, to free thy mind <br/>
                        Raise new life and let it riot <br/>
                      </p>
                    </Grid>
                    <Grid item container xs={12} lg={4} justifyContent="center" alignItems="center">
                      {/* <img alt="schema1" width="80%" height="80%" src={wizard}/> */}
                      <GetImages name="wizard"  size="80%"/>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      Holy People (interlude)
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container justifyContent="center" marginRight={2}>
                    <p>
                      <i>“Though you see holiness is way beyond being good. Good people aren’t necessarily holy people.
                          A holy person is one who is whole. Who has as it were, reconciled his opposites. And so there 
                          is always something slightly scary about holy people. Other people react to them in very 
                          strange ways, they can’t make up their mind whether their saints or devils. And so holy people 
                          have throughout history, always created a great deal of trouble, along with their creative results. 
                          Let’s take Jesus for example. The trouble that Jesus created was absolutely incalculable. So the 
                          holy person, is scary. Because he is like the ocean. See the ocean, on a lovely sunny day, you can 
                          say “oh, isn’t that gorgeous”. You can go into it, relax, and float around. Boy when the storm comes 
                          does that thing get mad, terrifying! So there is in us, the ocean, you see. And Jung felt that 
                          the whole point was to bring the two together, and by a kind of fantastic honesty, to penetrate 
                          one’s own motivations to the depths”</i> - Alan Watts
                    </p>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      Alone Time
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item container>
                    <Grid item container xs={12} lg={6} justifyContent="center" alignItems="center">
                      {/* <img alt="alone time" width="80%" height="80%" src={hermit}/> */}
                      <GetImages name="hermit"  size="80%"/>
                    </Grid>
                    <Grid item container xs={12} lg={6}>
                      <p>
                        Oh, I long to be alone <br/>
                        Where my mind is free to roam  <br/>
                        Away from all the bores  <br/>
                        Who think they know the world  <br/>
                        Where I can fantasy  <br/>
                        Myself a mystery  <br/>
                        Yeah, someday this venture of my own  <br/>
                        Will give so much more  <br/>
                        That's why I need to be  <br/>
                        <br/>
                        Alone, alone <br/>
                        Alone, alone <br/>
                        <br/>
                        I guess you'll never really know  <br/>
                        Why I choose to be alone  <br/>
                        <br/>
                        Alone, alone <br/>
                        Alone, alone <br/>
                        Alone, alone <br/>
                        Alone, alone <br/>
                      </p>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      the Controller
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item container justifyContent="center">
                    <h4>
                      <i>“Let the light of your madness shine, and it will suddenly dawn on you. 
                      Madness is not to be despised and not to be feared, but instead you should 
                      give it life… Be glad that you can recognize it, for you will thus avoid 
                      becoming its victim.”</i> -Carl Jung
                    </h4>
                  </Grid>
                  <Grid item container>
                  <Grid item container xs={12} lg={6} justifyContent="center" alignItems="center">
                    {/* <img alt="schema1" width="80%" height="80%" src={controller}/>        */}
                    <GetImages name="controller"  size="80%"/>            
                  </Grid>
                  <Grid item container xs={12} lg={6}>
                    <p>
                      If only you could see <br/>
                      What I see <br/>
                      You wouldn't wonder why <br/>
                      I keep losing my mind <br/>
                      <br/>
                      A thousand eyes staring <br/>
                      Right through my whole body <br/>
                      Demons and angels <br/>
                      Sent to extort me <br/>
                      I'm terrified, I'm terrified <br/>
                      I'm looking death right in the eyes <br/>
                      No thought I had was ever mine <br/>
                      I'm just a node in a larger mind <br/>
                      <br/>
                      I don't want to play a role anymore <br/>
                      So I'm writing a play of my own <br/>
                      Where anything goes <br/>
                      'Cause it's the only <br/>
                      Way of escaping this game that we're feeding <br/>
                      So no more conspiracies <br/>
                      I need to know <br/>
                      Will you change with me? <br/>
                      <br/>
                      A thousand eyes staring <br/>
                      Right through my whole body <br/>
                      Make me feel holy <br/>
                      Like nothing can hurt me <br/>
                      Anything I can realize <br/>
                      The controller sits behind my eyes <br/>
                      I've fooled myself another time <br/>
                      And I'm smiling 'cause the game is mine <br/>
                      <br/>
                      I'll make you see <br/>
                      Things you won't believe <br/>
                      Even if it's the death of me <br/>
                    </p>
                  </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <Grid item container justifyContent="center">
              <p className={resize ? "largeH1" : "smallH1"}>the King</p>
            </Grid>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      New Moon
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item container justifyContent="center">
                    <h4>
                      <i>“Until you make the unconscious conscious, it will direct your life and you will call it fate”</i> - Carl Jung
                    </h4>
                  </Grid>
                  <Grid item container>
                    <Grid item container xs={12} lg={6} marginLeft="10px">
                      <p>
                        A new moon, brings new runes <br/>
                        <br/>
                        Desperate dying fantasies <br/>
                        Starve for new reality <br/>
                        Invent new identity <br/>
                        Spark cosmic anomaly <br/>
                        <br/>
                        Chasing after fate <br/>
                        Please change me <br/>
                        I want to play the game <br/>
                        Even if I'm gonna loose <br/>
                        Even if I'm gonna loose <br/>
                        Even though I'm gonna loose <br/>
                        <br/>
                        Conqueror <br/>
                        Creator <br/>
                        Diviner <br/>
                        Destroyer <br/>
                        I can be, everything <br/>
                        <br/>
                        My own world <br/>
                        My own world <br/>
                        My own world <br/>
                        My own world <br/>
                        <br/>
                      </p>
                    </Grid>
                    <Grid item container xs={12} lg={4} justifyContent="center" alignItems="center">
                      {/* <img alt="new moon" width="80%" height="80%" src={king}/> */}
                      <GetImages name="king"  size="80%"/>
                    </Grid>
                    <Grid item container marginLeft="10px" marginRight="10px">
                      <p>
                      <i>
                          “What do I desire? Well when we answer that question in a naive way,
                          we figure out that what we want is to control everything.
                          To create girls that don’t grow old, apples that don’t rot,
                          clothes that never wear out, cnveyances that get from one place to another
                          instantly so we don’t have to wait, power available to do anything you 
                          could conceive and do it just instantly like that. But if you take time out
                          to think about that. And really go into it with your full strength of imagination 
                          and find out whether that’s where you want to be. You will soon see,
                          that’s not what you want”
                        </i>
                        - Alan Watts
                      </p>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      Save Yourself
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item container justifyContent="center">
                    <h4>
                      <i>
                        “None are more hopelessly enslaved than those who falsely believe they are free.”
                      </i>
                      - Goethe
                    </h4>
                  </Grid>
                  <Grid item container>
                    <Grid item container xs={12} lg={6} justifyContent="center" alignItems="center">
                      {/* <img alt="save yourself" width="80%" height="80%" src={priest}/> */}
                      <GetImages name="priest"  size="80%"/>
                    </Grid>
                    <Grid item container xs={12} lg={6}>
                      <p>
                        And there I go <br/>
                        Falling for another god <br/>
                        Knowing better all along <br/>
                        All those times I thought I heard the truth <br/>
                        It was just a beautiful lie <br/>
                        <br/>
                        Spiritual fallacies <br/>
                        Haunt me endlessly <br/>
                        I used to think if I played along <br/>
                        Eventually God would speak to me <br/>
                        But I've been learning <br/>
                        Everybody sells their own mystical story <br/>
                        It's the tragedy of fantasies <br/>
                        The belief only one can be <br/>
                        <br/>
                        And there I go <br/>
                        Running from another god <br/>
                        Knowing better all along <br/>
                        <br/>
                        Soon as I think that I'm free <br/>
                        I don't know what to believe <br/>
                        So I succumb to the next scheme <br/>
                        And let it delude me <br/>
                        If you dare to contemplate <br/>
                        Pray for your conscience's sake <br/>
                        'Cause when all reality breaks <br/>
                        You won't know what's real and what's fake <br/>
                      </p>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      Becoming No One
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item container justifyContent="center">
                    <h4>
                      <i>“One does not become enlightened by imagining figures of light, <br/>
                      but by making the darkness conscious.”</i> - Carl Jung
                    </h4>
                  </Grid>
                  <Grid item container>
                    <Grid item container xs={12} lg={6} marginLeft="10px">
                      <p>
                        Right before the fall <br/>
                        Euphoria <br/>
                        Before the fear comes <br/>
                        To tear me away <br/>
                        One last look into <br/>
                        The starry void <br/>
                        Then I'm on my way <br/>
                        Becoming no one <br/>
                        <br/>
                        Sworn to a war with reality <br/>
                        And dreams of fortresses on sand <br/>
                        Inventing my own heaven <br/>
                        Faking God for as long as I can <br/>
                        <br/>
                        Tethered to a simulation <br/>
                        Wired for virtual salvation <br/>
                        Cryptid, cursed fragmentation <br/>
                        Crying out 'assimilation' <br/>
                        (Supernova, supernova, supernova, supernova) <br/>
                        <br/>
                        In the great collapse <br/>
                        Clarity, like never before <br/>
                        All the schemes programmed in me <br/>
                        Mistaken for fate <br/>
                        Face to face with all deceit <br/>
                        Kingdoms of make believe <br/>
                        One by one, learning to lose <br/>
                        Unlocks the truth in everything <br/>
                        <br/>
                        (Right before the fall <br/>
                        Euphoria <br/>
                        Before the fear comes <br/>
                        To tear me away <br/>
                        One last step into <br/>
                        The starry void <br/>
                        Then I'm on my way <br/>
                        Becoming no one)<br/>
                        <br/>
                      </p>
                    </Grid>
                    <Grid item container xs={12} lg={4} justifyContent="center" alignItems="center">
                      {/* <img alt="becoming no one" width="80%" height="60%" src={warrior}/> */}
                      <GetImages name="warrior" size="80%"/>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <Grid item container justifyContent="center">
              <p className={resize ? "largeH1" : "smallH1"}>the Fool</p>
            </Grid>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      Embrace Chaos (interlude)
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid item container justifyContent="center" marginLeft="10px" marginRight="10px">
                      <p>
                        <i>“The organization of human life, its systems of communication and systems of control,
                          are extended more and more in just the same way, for example, that by assimilating 
                          the minerals out of the soil and the rays out of the sunlight, a plant like a fern 
                          grows and grows and grows and extends its form. And in this way, its organization 
                          prevails. Now then you see. If you take this task, of what we call the conquest of nature. 
                          The task of making order victorious over chaos or randomness. If you take this seriously, 
                          you will look upon it as warfare, and you will firmly believe that the most urgent 
                          thing that there possible can be is to make order prevail over randomness. To make 
                          good prevail over evil, to make life prevail over death. And we find when we are in a 
                          conquest of this kind, a serious warfare game of this kind, and we take it seriously, 
                          we are involved in it in a very deep and bitter sense.”</i> - Alan Watts
                      </p>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>            
            <br/>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      Fool's Song
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item container justifyContent="center">
                    <h4>
                      <i>
                      “You must have chaos within you to give birth to a dancing star”
                      </i>
                      - Nietzche
                    </h4>
                  </Grid>
                  <Grid item container>
                    <Grid item container xs={12} lg={6} justifyContent="center" alignItems="center">
                      {/* <img alt="fool's song" width="80%" height="80%" src={jester}/>  */}
                      <GetImages name="jester"  size="80%"/>    
                    </Grid>
                    <Grid item container xs={12} lg={6}>
                      <p>
                        If you feel like a loser <br/>
                        You're not the only one <br/>
                        If you think you're a weirdo <br/>
                        You could be the chosen one <br/>
                        If they say you're stupid <br/>
                        It's because you're fun <br/>
                        If they think you're a freak show <br/>
                        You don't need them anymore <br/>
                        <br/>
                        So don't you cry <br/>
                        The sun still shines <br/>
                        Forever <br/>
                        And if you hide <br/>
                        You'll still be mine <br/>
                        Forever <br/>
                        <br/>
                        If you feel like a loser <br/>
                        You're not the only one <br/>
                        If you think you're a weirdo <br/>
                        You could be the chosen one <br/>
                        If they say you're stupid <br/>
                        It's because you're fun <br/>
                        If they think you're a freak show <br/>
                        You don't need them anymore <br/>
                        <br/>
                        So no more sighs <br/>
                        You still have eyes <br/>
                        Be grateful <br/>
                        And if you don't <br/>
                        You still have ears <br/>
                        At least I hope so <br/>
                        No more lies  <br/>
                        Or goodbyes <br/>
                        It's never over <br/>
                        <br/>
                        Sunshine, in my eyes (aaaaaahhhh)                   
                      </p>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      Acedia
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item container justifyContent="center">
                    <h4>
                      <i>
                      “There is no light without shadow and no psychic wholeness without imperfection.”
                      </i>
                      - Carl Jung
                    </h4>
                  </Grid>
                  <Grid item container>
                    <Grid item container xs={12} lg={6} marginLeft={2}>
                      <p>
                        Yeah, let's lay around <br/>
                        And stare at the floor <br/>
                        I can't stand to think anymore <br/>
                        <br/>
                        I don't mean to sucker up <br/>
                        Just let me be a lazy bum <br/>
                        Purgatory will see me <br/>
                        Soon enough <br/>
                        <br/>
                        Please, leave me alone <br/>
                        I'd rather be <br/>
                        A vegetable <br/>
                        <br/>
                        What is it I'm looking for? <br/>
                        Is it something I've ignored? <br/>
                        Even though my verve is torn  <br/>
                        I'll always be craving more <br/>
                      </p>
                    </Grid>
                    <Grid item container xs={12} lg={4}>
                      {/* <img alt="acedia" width="80%" height="80%" src={acedia}/>      */}
                      <GetImages name="acedia"  size="80%"/>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      WTF?
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item container justifyContent="center">
                    <h4>
                      <i>
                      “Individuation is the transformational process of integrating the conscious 
                      with the personal and collective unconscious…”  it is “the process by which 
                      a person becomes a psychological ‘individual,’ that is, a separate, 
                      indivisible unity or ‘whole’”
                      </i>
                          - Carl Jung
                    </h4>
                  </Grid>
                  <Grid item container>
                    <Grid item container xs={12} lg={6} justifyContent="center" alignItems="center">
                      {/* <img alt="WTF?" width="80%" height="80%" src={death}/> */}
                      <GetImages name="death" size="80%"/>
                    </Grid>
                    <Grid item container xs={12} lg={6}>
                      <p>
                        All my life, all that I've been looking for  <br/>
                        Was looking for me too  <br/>
                        It's a kind of conundrum  <br/>
                        The more you avoid it  <br/>
                        The more that it taunts you  <br/>
                        But if you surrender  <br/>
                        All that you know  <br/>
                        Then it may dawn on you <br/>
                        <br/>
                        Everything you've every faced  <br/>
                        Was your own mind rearranged  <br/>
                        It's the revelation that will suck your soul out  <br/>
                        Right out of your body  <br/>
                        Yeah, when everything is everything  <br/>
                        There's nothing to believe in anymore  <br/>
                        <br/>
                        And all at once, every house of cards  <br/>
                        Comes tumbling down  <br/>
                        Tumbling down <br/>
                        Tumbling down <br/>
                        Tumbling down <br/>
                        Tumbling down <br/>
                        <br/>
                        (It is the truth <br/>
                        Only the truth  <br/>
                        Only the truth <br/>
                        Only the truth) <br/>
                        <br/>
                        I've gotta know  <br/>
                        I've gotta know  <br/>
                        I've gotta know  <br/>
                        I've gotta know  <br/>
                        <br/>
                        How deep it goes (infinity)  <br/>
                        How deep it goes (infinity)  <br/>
                        How deep it goes (infinity)  <br/>
                        How deep it goes (infinity) <br/>
                      </p>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <Grid item container justifyContent="center">
              <p className={resize ? "largeH1" : "smallH1"}>the Chrysalis</p>
            </Grid>
            <br/>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      Serendipity
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item container justifyContent="center">
                    <h4>
                      <i>
                      “The only way to make sense out of change is to plunge into it, move with it, and join the dance.”
                      </i>
                      - Alan Watts
                    </h4>
                  </Grid>
                  <Grid item container justifyContent="center" marginLeft="10px">
                    <p>
                      In the fire  <br/>
                      There is life  <br/>
                      Dancing wild  <br/>
                      Singing  <br/>
                      <br/>
                      Serendipity, Serendipity <br/>
                      <br/>
                      Summoning <br/>
                      Mystic bonds <br/>
                      The kind of synchronicities <br/>
                      That make you believe in more than chance <br/>
                      It must be <br/>
                      <br/>
                      Serendipity, Serendipity <br/>
                    </p>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      Odyssey
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item container marginLeft="10px" marginRight="10px">
                    <p>
                      <i>"When I use the word 'mysticism', I'm refering to a kind of experience. 
                        A kind of, shall we say, state of consciousness. It's something that simply happens. 
                        And we don't know why it happens. Nevertheless there is this peculiar thing 
                        that happens to people, and it's been recorded as far back in time as we have any 
                        recording at all. Instead of the ordinary feeling that I, as an individual, confront 
                        a world that is foreign to me, that is not me. In this kind of experience I find myself 
                        to be one in the same nature or identity as the world outside me. No longer a stranger 
                        in the world, but as if the external world were my own body. <br/>
                        <br/>
                        I'm talking about a rather whimsical, unpredictable experience, that suddenly hits you. 
                        And it includes this element of feeling the total harmoniousness of everything. <br/>
                        <br/>
                        So, this thing, the sensation of a kind of universal harmony. Cannot come to us when it 
                        is sought. When we look for it as something to be an escape from the way we actually feel 
                        or to compensate for the way we actually feel. It's a thing that comes out of the blue. 
                        And when it comes out of the blue, just like hiccups come out of the blue, it's overhwhelmingly 
                        convincing. It stands as, actually, the foundation for most of mankind's profound philosophical, 
                        mystical, metaphysical, and religious ideas. The meaning of being alive, is just being alive. 
                        And it's so plain, and it's so obvious, and so simple."
                      </i>
                      - Alan Watts
                    </p>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
            <br/>
            <Grid item container justifyContent="center">
              <p className={resize ? "largeH1" : "smallH1"}>the Syzygy</p>
            </Grid>
            <br/>
            <li>
              <Accordion>
                <AccordionSummary
                id="panel1a-header" 
                aria-controls="panel1a-content">
                  <div className="loreHeaderContainer">
                    <h1 className="loreHeader">
                      ???
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item container justifyContent="center">
                    <h4>
                      <i>
                        “Your vision will become clear only when you can look into your own heart. 
                        Who looks outside, dreams; who looks inside, awakes.”
                      </i>
                      - Carl Jung
                    </h4>
                    <h4>
                      <i>
                        “Every transformation demands as its precondition the end of a world–the collapse 
                        of an old philosophy of life”
                      </i>
                      - Carl Jung
                    </h4>
                  </Grid>
                  <Grid item container justifyContent="center">
                    <GetImages name="syzygy"  size="80%"/>
                    {/* <img alt="syzygy" width="80%" height="80%" src={syzygy}/> */}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </li>
          </ol>
        </Grid>
        <Grid item container xs={8} justifyContent="center" alignItems="center">
          <GetImages name="performance_map" size="100%"/>
          {/* <img alt="the map" width={resize ? "800px" : "300px"} height="100%" src={finalDraft}/> */}
        </Grid>
        <p className={resize ? "largeP" : "smallP"}>
          The black circle/triangle symbol in the middle represents the psyche, with dark and light representing unconsciousness and consciousness respectively. 
          Each point on the triangle/prism represents an archetype the performance exposes, the idea being that as more and more archetypes 
          are made conscious, the more whole the psyche becomes. The prism depicted above the head gives a 3-dimensional perspective of the triangle, 
          revealing more depth to the psyche and a 4th point/archetype, which alludes to the archetype of the syzygy, representing non-duality and the union of masculine/feminine consciousness.
        </p>
        <p className={resize ? "largeP" : "smallP"}>
          Each act in the performance explores both the positive and negative aspects of each archetype, 
          which is represented by the shading of the triangle. For example, while the Wizard archetype has the strengths of vision, 
          reativity, and independence, it struggles 
          with megalomania, social isolation, and manipulation. The perceived negative qualities of the Wizard are then flipped and turned 
          into the strengths of the King, (i.e. courage, leadership, and ambition) 
          within the next act. The show presents how the strengths and weaknesses of each archetype may be harmonized 
          to create a more united, balanced psyche. 
        </p>
        <p className={resize ? "largeP" : "smallP"}>
          As the performance progresses more of the unconscious is explored. This is represented by the counter-clockwise spiral, 
          as “a leftward (counter clockwise) movement indicates towards the unconscious” As Jung observed in his studies of symbology. The spiral also traces the 
          character development and metamorphosis of the Wizard into the Syzygy. Furthermore, layers of costume are removed with each act 
          to reveal the next archetype concealed underneath, just as “individuation is to divest the self of false wrappings” (Jung).
        </p>
        <div style={{ backgroundImage: `url(${paperTexture})` }}>
          <p className={resize ? "largeP" : "smallP"}>
            Lastly, the black lines eminating from the prism and spiral represent the process of projection, the “unconscious, automatic 
            process whereby a content that is unconscious to the subject transfers itself to an object, so that it seems to belong 
            to that object” (Jung). Projection is how archetypes reveal themselves through creative expression, by transferring their unconscious
            content onto the object that is being created (in this case, music), so that they may be recognized and made conscious–“Archetypes 
            are already psychic processes that are unconscous, they are the symbolic expressions of the inner, unconscious drama of the 
            psyche which becomes accessible to man’s consciousness by way of projection” (Jung). 
            Ultimately, the goal of the performance is to provide an object for the audience to project onto and become aware of their 
            own archetypes, hence “unlock your unconscious”.
          </p>
        </div>
        </Grid>
      </Grid>
    </div>
    )
}