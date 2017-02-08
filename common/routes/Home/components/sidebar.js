import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky';
import { StyleSheet, css } from 'aphrodite'

const SideBar = (props) => (
  <div className={css(styles.sideBarContainer)}>
    <Sticky>
      <img src='head_shot.jpg' alt='My face' height="90" width="90" className={css(styles.imgCircle)} />
      <h3 className={css(styles.bioHeader)}>Matthew Martin</h3>
      <ul className={css(styles.bio)}>
        <li>Blockchain Dev</li>
        <li>CFA charterholder</li>
        <li>Spanish Major</li>
        <li>Mountain Climber</li>
        <li>Terrible Chef</li>
      </ul>
      <ul className={css(styles.socialMedia)}>
        <li><a className={css(styles.socialMedia, styles.yellowfy)} target='_blank' href='https://goo.gl/maps/xZ7xYnqNzXQ2'><span className={css(styles.margin)}><i className="fa fa-fw fa-map-marker" aria-hidden="true"></i></span>Bay Area, CA</a></li>
        <li><a className={css(styles.socialMedia, styles.yellowfy)} target='_blank' href='https://www.linkedin.com/in/08martinm'><span className={css(styles.margin)}><i className="fa fa-fw fa-linkedin" aria-hidden="true"></i></span>LinkedIn</a></li>
        <li><a className={css(styles.socialMedia, styles.yellowfy)} target='_blank' href='https://www.github.com/08martinm'><span className={css(styles.margin)}><i className="fa fa-fw fa-github" aria-hidden="true"></i></span>GitHub</a></li>
        <li><a className={css(styles.socialMedia, styles.yellowfy)} target='_blank' href='https://www.angellist.com/matt-martin-3'><span className={css(styles.margin)}><i className="fa fa-fw fa-angellist" aria-hidden="true"></i></span>Angel List</a></li>
      </ul>
    </Sticky>
  </div>
)

const styles = StyleSheet.create({
  sideBarContainer: {
    position: 'relative',
    height: '0px',
    width: '100px',
    backgroundColor: '#FFBD17',
    borderRadius: '25px'
  },
  bioHeader: {
    fontSize: '14px',
    textAlign: 'center',
    marginTop: '15px',
    color: '#003057'
  },
  imgCircle: {
    borderRadius: '100%',
    display: 'block',
    margin: '0 auto'
  },
  bio: {
    fontSize: '10px',
    listStyleType: 'none',
    paddingLeft: 1,
    color: '#003057'
  },
  socialMedia: {
    listStyleType: 'none',
    paddingLeft: 0,
    fontSize: '11px',
    lineHeight: '2',
    color: '#003057',
    textDecoration: 'none'
  },
  yellowfy: {
    ':hover': {
      color: '#FFBD17'
    }
  },
  margin: {
    margin: '0 4px 0 0',
  }
})

export default SideBar
