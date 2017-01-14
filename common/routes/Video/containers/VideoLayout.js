import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { loadPosts } from '../actions'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'
// import { selectPosts } from '../reducer'

const redial = {
  fetch: ({ dispatch }) => dispatch(loadPosts())
}

const mapStateToProps = state => ({
  // posts: selectPosts(state)
})

const VideoLayout = ({ posts }) => (
  <div className={css(styles.root)}>
    <Helmet title='Video' />
      <div>
        <h2 className={css(styles.title)}>Video Introduction</h2>
        <iframe width="640" height="360" src="https://www.youtube.com/embed/8QSywj5IqrM?rel=0" frameborder="0" allowfullscreen></iframe>
      </div>
  </div>
)

VideoLayout.PropTypes = {
  posts: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  root: {
    width: '100%' 
  },
  title: {
    fontSize: 28,
    margin: '0 auto 1.5rem',
    textAlign: 'center',
    color: '#b7b7b7'
  }
})

export default provideHooks(redial)(connect(mapStateToProps)(VideoLayout))
