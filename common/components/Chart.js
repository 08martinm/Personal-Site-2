import React from 'react'
import ReactDom from 'react-dom'
import d3Chart from './d3Chart'

var Chart = React.createClass({
  componentDidMount: function () {
    var el = ReactDom.findDOMNode(this)
    d3Chart.create(el, {
      width: '100%',
      height: '100px'
    })
  },

  render: function () {
    return (
      <div className='Chart' />
    )
  }
})

export default Chart
