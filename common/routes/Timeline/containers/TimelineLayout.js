import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'
import { StickyContainer, Sticky } from 'react-sticky'

const redial = {
}

const mapStateToProps = state => ({
})

const TimelineLayout = ({ posts }) => (
  <div className={css(styles.root)}>
    <Helmet title='Timeline' />
    <StickyContainer>
      <Sticky className={css(styles.h3)}>2016</Sticky>
      <ul>
        <li>Promoted to Senior Analyst. Began writing sections of our damages reports.</li>
        <li>Put the coding skills to use as I return to Stanford Consulting Group.</li>
        <li>Read every library book on blockchain (It was four books. But it sounds better the other way).</li>
        <li>Fell in love with blockchain. It's the next big thing.</li>
        <li>Attended Hack Reactor. Fell off the face of the planet for precisely 13 weeks as I learned everything JavaScript.</li>
        <li>Completed the four-year work requirement and (finally) earned the 'CFA' designation.</li>
        <li>Gave the Best-Man speech at my brother's wedding in Guatemala.</li>
        <li>Accepted into Hack Reactor.</li>
        <li>Continue volunteering at the Boys and Girls Club. Help fourth-graders make some pretty awesome music videos using Scratch programming.</li>
        <li>My company and I explore the idea of me attending a software development bootcamp to further my automation skills.</li>
      </ul>
    </StickyContainer>
    <StickyContainer>
      <Sticky className={css(styles.h3)}>2015</Sticky>
      <ul>
        <li>Passed CFA Level III (celebrated accordingly).</li>
        <li>Continued bringing myself up to speed with the entirety of the litigation consulting process.</li>
        <li>Focused on understanding the written portions of our damages reports. Attempted report writing.</li>
        <li>Travelled California. Big Sur, Tahoe, Yosemite, Napa, Sonoma, Arcata, and more. Beautiful state. Climbed Half Dome.</li>
        <li>Sampled just about every coffee shop in Redwood City, Menlo Park, and Palo Alto while studying for CFA Level III.</li>
        <li>Skied Tahoe and Colorado.</li>
        <li>Volunteered at the Boys and Girls Club teaching computer science through the Google Computer Science First program.</li>        
        <li>Hiked/biked all around the Grand Canyon.</li>
      </ul>
    </StickyContainer>
    <StickyContainer>
      <Sticky className={css(styles.h3)}>2014</Sticky>
      <ul>
        <li>Pushed myself to learn more financial theory, the litigation process surrounding securities fraud, and the different damages models.</li>
        <li>Wowed my employers with embarrassingly extensive knowledge of Excel keyboard shortcuts.</li>
        <li>Conquered the GMAT.</li>
        <li>Passed CFA Level II.</li>
        <li>Packed my bags and moved to sunny Cali-forn-I-A to work for Stanford Consulting Group.</li>
        <li>Climbed two volacanos and a mountain in Mexico with my brother and friends. Successful summits for all three.</li>
        <li>Explored the possibility of finding a role where I could directly apply my CFA knowledge. Wanted a more technically hands-on role. Found the perfect fit.</li>
      </ul>
    </StickyContainer>
    <StickyContainer>
      <Sticky className={css(styles.h3)}>2013</Sticky>
      <ul>
        <li>Crunch-time at J.P. Morgan. Nine months into my job, three senior analysts and a banker jumped ship. Inherited a lot of responsibility very quickly.</li>
        <li>Somehow managed to sneak in enough studying to pass CFA Level I.</li>
        <li>Held down the fort by learning to delegate and to think/act quickly/decisively.</li>
        <li>Working 100-hours/week is tough.</li>
        <li>Drank way too much coffee.</li>
        <li>There's not really much else to say. Did I mention that I worked a lot?</li>
      </ul>
    </StickyContainer>
    <StickyContainer>
      <Sticky className={css(styles.h3)}>2012</Sticky>
      <ul>
        <li>Year of change.</li>
        <li>Hit the ground running at J.P. Morgan. I was out to prove to the world that I could cut it in finance.</li>
        <li>Stayed late after work each night to continue my financial education. I binge-read Investopedia articles and began the CFA curriculum.</li>
        <li>Went through J.P. Morgan Private Bank's Summer Training program. Learned a whole bunch. Nightly reviewed everything twice to be sure it stuck.</li>
        <li>Travelled Europe with a friend made studying abroad in Buenos Aires the prior year.</li>
        <li>Graduated from college. Wondered whether my Spanish degree would be helpful on Wall Street (I'm sort of giving myself a hard time here. Honestly though, I couldn't have a greater appreciation for my liberal arts education. While it's easy to poke fun, I do credit it for cultivating my intellectual curiosity and a desire to learn).</li>
      </ul>
    </StickyContainer>
    <StickyContainer>
      <Sticky className={css(styles.h3)}>2011</Sticky>
      <ul>
        <li>Ended the summer with an offer to work for J.P. Morgan's Hedge Fund Principals Group in New York.</li>
        <li>Interned with the J.P. Morgan Private Bank. Stayed late each night to read Investopedia articles and learn Excel formulas.</li>
        <li>I compensated for my lack of financial knowledge with Herculean effort. That summer, I dug deep and pushed myself to work harder than I ever had before.</li>
        <li>Stayed late after work each night to read Investopedia and write financial definitions in a journal. I re-read this financial diary every morning before work.</li>
        <li>Prepared like mad for the one finance interview I received. Converted it into an internship offer.</li>
        <li>Earned my internship interview by reaching out to hundreds of Davidson College alumni.</li>
      </ul>
    </StickyContainer>
  </div>
)

TimelineLayout.PropTypes = {
  posts: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  root: {
    width: '100%' 
  },
  sarcasm: {
    fontStyle: 'italic',
  },
  body: {
    fontSize: '18px',
    fontFamily: "'Lato', helvetica, sans-serif",
    backgroundColor: '#eee'
  },
  h3: {
    textAlign: 'left',
    backgroundColor: '#fff',
    margin: '0',
    padding: '20px 0',
    borderBottom: 'solid 1px #333',
    zIndex: 1,
  },
  p: {
    padding: '15px 0',
  }
})

export default provideHooks(redial)(connect(mapStateToProps)(TimelineLayout))
