import React from 'react'
import SideBar from './sidebar'
import { StickyContainer, Sticky } from 'react-sticky'
import { StyleSheet, css } from 'aphrodite'
import Link from 'react-router/lib/Link'

const Home = (props) => (
  <div>
    <StickyContainer className={css(styles.stickyProps)} >
      <SideBar />
      <div className={css(styles.content)}>
        <h2 className={css(styles.header)}>Obligatory `Hello World`</h2>
        <p className={css(styles.lead)}>
          Thanks for visiting my site. Here, I share a little about my background, interests, and future goals. If you're visiting from Haas Admissions and only have limited time, I
          encourage you to check out my <Link className={css(styles.ref)} to='/video'>personal video</Link>. If you've stumbled across this by accident, feel free to take a look around!
        </p>
        <h2 className={css(styles.header)}>About Me</h2>
        <p className={css(styles.lead)}>
          Let's start from the beginning: Monday March 19, 1990...<br />
          <br />
          Just kidding. In short, I'm someone motivated by fundamentally understanding how things work. Academically, I've run the gamut from Spanish major,
          to CFA charterholder, to software immersion graduate. Professionally, I spent roughly two years with The J.P. Morgan Private Bank in New York and over 
          two and a half years with Stanford Consulting Group in the Bay Area learning as much as possible about finance. I've simultaneously been self-teaching
          software development to automate the routine portions of my job to focus on the parts I love.<br />
          <br />
          Ultimately, I'd describe myself as an intensely curious individual who enjoys exploring the 'why' and 'how' underpinning the status quo.
        </p>
        <h2 className={css(styles.header)}>My Background: The Highlights</h2>
        <p className={css(styles.lead)}>
          Check out my résumé and/or <Link className={css(styles.ref)} to='/timeline'>timeline</Link> for a more in-depth look, but here are a few of the things that I'm particularly proud of:
        </p>
        <ul className={css(styles.lead)}>
          <li>Earned a promotion and 3-month sabbatical to attend a software immersion program. More than the title change or time away from work,
              I feel humbled and honored that my employers saw the value proposition in letting me go for that period of time. I'm working hard to
              implement more robust software automation at work to ensure that my absence was worth their while.</li>
          <li>Managed and trained 3 new analysts at J.P. Morgan. Nine months into my job, all three senior analysts on my team and
              an established banker found new roles in the bank. Coming from a liberal arts background, I was thrown into the deep-end as I found myself
              the most senior analyst on a team managing $19bn of private clients' wealth. During this time, I quickly learned that I couldn't do everything
              myself. So, I began serving in more of a Project Manager capacity: I meticulously tracked all outstanding client requests, delegated tasks, and
              worked 100-hour weeks to keep the team afloat. It remains the most rewarding experience I never want to do again.</li>
          <li>Launched a career in finance from a liberal arts background. My career in finance almost ended before it began. Coming from a liberal arts background,
              I knew that I wanted to pick up hard skills that I could use as the basis for a long-term career. I pursued finance after observing the far-reaching effects of the 2008
              financial collapse throughout college. Unfortunately, not too many bulge-bracket banks are recruiting Spanish majors (which is a real shame, but I digress...). To launch my
              career, I spoke with over 300 Davidson College alumni before getting my résumé passed to the right desk. I prepped like crazy for my interview, and then leveraged an internship
              in Dallas into full-time employment in New York. I still look back and am somewhat amazed at the combination of luck and perseverance it took to begin this wild ride.</li>
        </ul>
      </div>
    </StickyContainer>
  </div>
)

const styles = StyleSheet.create({
  content: {
    float: 'right',
    height: '100%',
    width: '635px',
    margin: '0 0 0 15px'
  },
  ref: {
    color: '#0066CC',
    fontWeight: 'bold',
    textDecoration: 'none',
    ':hover': {
      opacity: '0.5'
    }

  },
  stickyProps: {
    overflow: 'auto'
  },
  header: {
    fontSize: 28,
    lineHeight: '1.2',
    margin: '0 0 1.5rem',
    color: '#003057'
  },
  lead: {
    fontSize: 18,
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  list: {
    fontSize: '1rem',
    listStyle: 'none',
    padding: 0
  },
  link: {
    display: 'block',
    fontSize: '1.25rem',
    margin: '0 0 .5rem',
    lineHeight: '1.5',
    fontWeight: 'bold',
    color: '#08c',
    opacity: 1,
    transition: '.2s opacity ease',
    textDecoration: 'none',
    ':hover': {
      opacity: 0.5,
      textDecoration: 'none'
    }
  }
})

export default Home
