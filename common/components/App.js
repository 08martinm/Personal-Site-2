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
    <Helmet title='Home' titleTemplate='%s - Matthew Martin' script={[{'src': 'https://use.fontawesome.com/a74fb94df3.js'}]}/>
    <Particles width={"750px"} height={"400px"} params={particleParams} style={particleStyle} />
    <TitleBox />
    <Nav />
    {children}
    <footer className={css(styles.footer)}>
      Coded by <a className={css(styles.footerLink)} href='http://github.com/08martinm' target='_blank'>Matthew Martin</a>
    </footer>
  </div>
)

const styles = StyleSheet.create({
  root: {
    width: '750px',
    color: '#000',
    margin: '0 auto',
    padding: '0'
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#003057'
  },
  footerLink: {
    color: '#FFBD17',
    fontWeight: 'bold',
    textDecoration: 'none',
    ':hover': {
      color: '#0066CC'
    }
  }
})

export default App
