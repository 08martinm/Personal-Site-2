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
    fontSize: 50,
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
    background: '#FFBD17',
    padding: '0.5px',
    margin: '0 auto 5px auto'
  },
  titleBox: {
    // Background color
    backgroundColor: 'rgba(0,0,0,0.2)',
    // White border
    border: '2.5px',
    color: 'white',
    borderStyle: 'solid',
    // Fixed Dimensions
    width: '500px',
    padding: '25px',
    // Horizontally center
    margin: '0 auto',
    ':hover': {
      borderRadius: '100px',
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
      content: '"Haas Applicant"',
    },
  },
  titleBoxContainer: {
    height: '400px',
    width: '750px',
    // Vertically center titleBox
    display: 'flex',
    alignItems: 'center',
    // Set background image
    background: "url('background-1.png') center center",
  },
  proTip: {
    textAlign: 'center',
    fontSize: '8px'
  }
})

export default TitleBox
