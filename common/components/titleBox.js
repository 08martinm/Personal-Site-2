import React from 'react'
import { StyleSheet, css } from 'aphrodite'

class TitleBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: 'Professional Background'
    }
  }

  render() {
    return(
      <div>
        <div className={css(styles.titleBoxContainer)} >
          <div className={css(styles.titleBox)}>
            <h1 className={css(styles.title)}>Matthew Martin</h1>
            <div className={css(styles.horizLine)} />
            <h3 className={css(styles.description)} ><span>Liberal Arts, Finance, Software</span></h3>
          </div>
        </div>
      </div>
  )}
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 56,
    textAlign: 'center',
  },
  description: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
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
    margin: '0 auto',
    ':hover': {
      borderRadius: '100px',
      color: "rgb(225,225,225)",
      transition: 'all 1000ms ease-in-out'
    },
    transition: 'all 1000ms ease-in-out',
    zIndex: 1,
    ':hover h3 span': {
      position: 'absolute',
      visibility: 'hidden',
    },
    ':hover h3:before': {
      visibility: 'visible',
      content: '"MIT Sloan Applicant"',
    },
  },
  titleBoxContainer: {
    height: '400px',
    width: '750px',
    // Vertically center titleBox
    display: 'flex',
    alignItems: 'center',
    // Set background image
    background: "url('Elegant_Background-5.jpg') no-repeat center center",
  },
  proTip: {
    textAlign: 'center',
    fontSize: '8px'
  }
})

export default TitleBox
