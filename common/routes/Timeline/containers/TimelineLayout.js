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
        <li>Received promotion to Senior Analyst at work. Begin taking full responsibility for writing sections of our damages reports.</li>
        <li>Put the coding skills to use as I return to Stanford Consulting Group - time to automate everything.</li>
        <li>Read every library book on blockchain (4. It was 4 books. But it sounds better the other way).</li>
        <li>Fell in love with blockchain. If you don't know, it's the next big thing.</li>
        <li>Attended Hack Reactor. Fell off the face of the planet for precisely 13-weeks as I learned everything JavaScript.</li>
        <li>Created an awesome website for MIT Sloan (okay, so this one's out of order. If you caught this, congratulations! I really didn't think you'd take the time to read each point).</li>
        <li>Completed the 4-year work requirement and (finally!) earned the 'CFA' designation.</li>
        <li>Became best friends with my local coffee shop barista as I prepared for Hack Reactor.</li>
        <li>Gave the Best-Man speech at my brother's wedding in Guatemala. Phenomenal guy, wife, and wedding. Couldn't be prouder to have them both in my family.</li>
        <li>Accepted into Hack Reactor after the third application. Good things take time.</li>
        <li>My company and I explore the idea of me attending a software development bootcamp to further my automation skills.</li>
      </ul>
    </StickyContainer>
    <StickyContainer>
      <Sticky className={css(styles.h3)}>2015</Sticky>
      <ul>
        <li>Passed CFA Level III (and celebrated accordingly).</li>
        <li>Continued bringing myself up to speed with the entirety of the litigation consulting process.</li>
        <li>Honed in on understanding the written portions of our damages reports. Began attempts at report writing.</li>
        <li>Travelled California. Big Sur, Tahoe, Yosemite, Napa, Sonoma, Arcata, and more. Beautiful state. Happy to be here.</li>
        <li>Sampled just about every coffee shop in Redwood City, Menlo Park, and Palo Alto while studying for CFA Level III.</li>
        <li>Skiied Tahoe and Colorado.</li>
        <li>Travelled to the Grand Canyon. Photos galore.</li>
      </ul>
    </StickyContainer>
    <StickyContainer>
      <Sticky className={css(styles.h3)}>2014</Sticky>
      <ul>
        <li>Love my job. Pushing myself to learn more financial theory, the litigation process surrounding securities fraud, and the different damages models.</li>
        <li>Wow my employers with embarrassingly good knowledge of Excel keyboard shortcuts.</li>
        <li>Conquered the GMAT.</li>
        <li>Passed CFA Level II.</li>
        <li>Packed my bags and moved to sunny Cali-forn-I-A to work for Stanford Consulting Group.</li>
        <li>Climbed 2 volacanos and a mountain in Mexico with my brother and friends. All 3 were successful climbs.</li>
        <li>Explored the possibility of finding a role where I could directly apply my CFA knowledge. Wanted a more technically hands-on role.</li>
      </ul>
    </StickyContainer>
    <StickyContainer>
      <Sticky className={css(styles.h3)}>2013</Sticky>
      <ul>
        <li>Crunch-time at J.P. Morgan. 9-months in and seemingly everyone jumps ship from my team, leaving me as the last man standing.</li>
        <li>Somehow manage to sneak in enough studying when not working to pass CFA Level I.</li>
        <li>Okay, fine. Really it's just all 3 of the analysts and a banker. But still. That's a lot of responsibility to inherit all at once.</li>
        <li>Hold down the fort by learning to delegate and think/act quickly and decisively.</li>
        <li>Working 100-hours/week is tough.</li>
        <li>Drink more coffee than is probably medically advisable.</li>
        <li>There's not really much else to say. Did I mention that I worked a lot?</li>
      </ul>
    </StickyContainer>
    <StickyContainer>
      <Sticky className={css(styles.h3)}>2012</Sticky>
      <ul>
        <li>Year of change.</li>
        <li>Hit the ground running at J.P. Morgan. Wide-eyed and ambitious, I felt incredibly lucky and humbled to have the opportunity to work on the Hedge Fund Principals Group.</li>
        <li>I stay late after work each night to continue my financial education. I binge-read Investopedia articles and begin the CFA curriculum.</li>
        <li>Go through J.P. Morgan Private Bank's Summer Training program. Learn a whole bunch. Nightly review everything twice to be sure it sinks in.</li>
        <li>Travelled Europe with a friend made studying abroad in Buenos Aires.</li>
        <li>Graduated from college. Wonder to myself how useful my Spansih degree will be on Wall Street.</li>
      </ul>
    </StickyContainer>
    <StickyContainer>
      <Sticky className={css(styles.h3)}>2011</Sticky>
      <ul>
        <li>Intern with the J.P. Morgna Private Bank. I stay late each night to read Investopedia articles and learn Excel formulas.</li>
        <li>I may not have had formal education in the field, but boy did I have the drive and determination to make it.</li>
        <li>Ended that summer with an offer to work for the Hedge Fund Principals Group in New York.</li>
        <li>Earned an internship in finance by reaching out to hundreds of Davidson College alumni.</li>
        <li>Prepared like mad for my interview with the J.P. Morgan Private Bank in Dallas. Got the internship offer.</li>
        <li>I stay late after work each night to continue my financial education. I binge-read Investopedia articles and begin the CFA curriculum.</li>
        <li>Go through J.P. Morgan Private Bank's Summer Training program. Learn a whole bunch. Nightly review everything twice to be sure it sinks in.</li>
        <li>Travelled Europe with a friend made studying abroad in Buenos Aires.</li>
        <li>Graduated from college. Wonder to myself how useful my Spanish degree will be on Wall Street (surprisingly, very. I hold liberal arts in the highest regard
            and credit it heavily for fostering an intellectual curiosity that has proven time and again to be my competitive advantage).</li>
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
