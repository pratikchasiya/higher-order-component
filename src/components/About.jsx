import React, { Component } from 'react'
import { HOC } from './HOC'

class About extends Component {
  render() {
    return (
      <div id='About'>About</div>
    )
  }
}

export default HOC(About)