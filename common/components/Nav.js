import React from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import { StyleSheet, css } from 'aphrodite'

const Nav = () => (
  <div>
    <IndexLink to='/' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
      Home
    </IndexLink>
    <Link to='/background' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}> Background
    </Link>
    <Link to='/video' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}> Video Introduction
    </Link>
    <a href='../../documents/Matthew_Martin_resume.pdf' className={css(styles.link)} target='_blank'>Résumé</a>
    <a href='https://linkedin.com/in/08martinm' className={css(styles.link)} target='_blank'>LinkedIn</a>
    <a href='https://github.com/08martinm' className={css(styles.link)} target='_blank'>GitHub</a>
  </div>
)

const styles = StyleSheet.create({
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
