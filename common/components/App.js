import React from 'react'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js';
import Nav from './Nav'
import TitleBox from './titleBox'
import { StyleSheet, css } from 'aphrodite'
import particleParams from './particlesjs-config-obj';
import particleStyle from './particlesjs-style-obj';
import { Router, Route, Link } from 'react-router';

const App = ({ children }) => (
  <div className={css(styles.root)}>
    <Helmet title='Home' titleTemplate='%s - Matthew Martin' />
    <Particles width={"618px"} height={"400px"} params={particleParams} style={particleStyle} />
    <TitleBox />
    <Nav />
    {children}
    <footer className={css(styles.footer)}>
      Coded by <a className={css(styles.footerLink)} href='http://github.com/08martinm' target='_blank'>Matt Martin</a>
    </footer>
  </div>
)

const styles = StyleSheet.create({
  root: {
    width: 618,
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})

export default App
