import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import Chart from './Chart'
import { StyleSheet, css } from 'aphrodite'

const App = ({ children }) => (
  <div className={css(styles.root)}>
    <Helmet title='Home' titleTemplate='%s - Matthew Martin' />
    <div className={css(styles.titleBoxContainer)}>
      <div className={css(styles.titleBox)}>
        <h1 className={css(styles.title)}>Matthew Martin</h1>
        <div className={css(styles.horizLine)} />
        <h3 className={css(styles.description)}>Professional Biography</h3>
      </div>
    </div>
    <div>
      <Chart />
    </div>
    <Nav />
    {children}
    <footer className={css(styles.footer)}>
      Coded by <a className={css(styles.footerLink)} href='http://github.com/08martinm' target='_blank'>Matt Martin</a>
    </footer>
  </div>
)

const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 56,
    textAlign: 'center'
  },
  description: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  },
  horizLine: {
    width: '90%',
    height: '1px',
    background: 'white',
    padding: '0.75px',
    margin: 'auto'
  },
  titleBox: {
    // Background color
    backgroundColor: 'rgba(0,0,0,0.2)',
    // White border
    border: '5px',
    color: 'white',
    borderStyle: 'solid',
    // Fixed Dimensions
    width: '500px',
    padding: '25px',
    // Horizontally center
    margin: '0 auto'
  },
  titleBoxContainer: {
    height: '400px',
    width: '100%',
    // Vertically center titleBox
    display: 'flex',
    alignItems: 'center',
    // Set background image
    background: "url('Elegant_Background-" + Math.floor(Math.random() * 20 + 1) + ".jpg') no-repeat center center"
    // backgroundRepeat: 'no-repeat'
  },
  d3SVG: {
    width: '200px',
    height: '200px'
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
