import React from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import { StyleSheet, css } from 'aphrodite'

const Nav = () => (
  <div className={css(styles.navContainer)} >
    <IndexLink to='/' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
      Home
    </IndexLink>
    <Link to='/video' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>Video Introduction
    </Link>
    <Link to='/timeline' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>Timeline
    </Link>
  </div>
)

const styles = StyleSheet.create({
  navContainer: {
    textAlign: 'center',
  },
  link: {
    maxWidth: 700,
    color: '#0066CC',
    margin: '1.5rem 1rem 1.5rem 0',
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: '.2s opacity ease',
    ':hover': {
      opacity: 0.5
    }
  },
  activeLink: {
    color: '#003057'
  }
})

export default Nav
