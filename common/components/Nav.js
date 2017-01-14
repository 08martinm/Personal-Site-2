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
    <a href='https://linkedin.com/in/08martinm' className={css(styles.link)} target='_blank'>LinkedIn</a>
    <a href='https://github.com/08martinm' className={css(styles.link)} target='_blank'>GitHub</a>
  </div>
)

const styles = StyleSheet.create({
  navContainer: {
    textAlign: 'center',
  },
  link: {
    maxWidth: 700,
    color: '#999',
    margin: '1.5rem 1rem 1.5rem 0',
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: '.2s opacity ease',
    ':hover': {
      opacity: 0.6
    }
  },
  activeLink: {
    color: '#000'
  }
})

export default Nav
