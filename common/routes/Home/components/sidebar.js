import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky';
import { StyleSheet, css } from 'aphrodite'

const SideBar = (props) => (
  <div className={css(styles.sideBarContainer)}>
    <Sticky>
      <img src='head_shot.jpg' alt='My face' height="125" width="125" className={css(styles.imgCircle)} />
      <h3 className={css(styles.bioHeader)}>Matthew Martin</h3>
      <ul className={css(styles.bio)}>
        <li>Blockchain Developer</li>
        <li>CFA charterholder</li>
        <li>Spanish Major</li>
        <li>Mountain Climber</li>
        <li>Terrible Chef</li>
      </ul>
      <ul className={css(styles.socialMedia)}>
        <li><a className={css(styles.socialMedia)} target='_blank' href='https://goo.gl/maps/xZ7xYnqNzXQ2'><i className="fa fa-fw fa-map-marker" aria-hidden="true"></i>Bay Area, CA</a></li>
        <li><a className={css(styles.socialMedia)} target='_blank' href='https://www.linkedin.com/in/08martinm'><i className="fa fa-fw fa-linkedin" aria-hidden="true"></i>LinkedIn</a></li>
        <li><a className={css(styles.socialMedia)} target='_blank' href='https://www.github.com/08martinm'><i className="fa fa-fw fa-github" aria-hidden="true"></i>GitHub</a></li>
        <li><a className={css(styles.socialMedia)} target='_blank' href='https://www.angellist.com/matt-martin-3'><i className="fa fa-fw fa-angellist" aria-hidden="true"></i>Angel List</a></li>
      </ul>

    </Sticky>
  </div>
)

const styles = StyleSheet.create({
  sideBarContainer: {
    position: 'relative',
    left: '-200px',
    height: '0px',
    width: '150px',
  },
  bioHeader: {
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '15px'
  },
  imgCircle: {
    borderRadius: '100%',
    display: 'block',
    margin: '0 auto'
  },
  bio: {
    fontSize: '12px',
    listStyleType: 'none',
    paddingLeft: 1,
    // textAlign: 'center',
    color: '#555'
  },
  socialMedia: {
    listStyleType: 'none',
    paddingLeft: 0,
    fontSize: '15px',
    lineHeight: '2',
    color: '#555',
    textDecoration: 'none'
  }
})

export default SideBar
