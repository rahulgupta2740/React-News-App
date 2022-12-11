import React, { Component } from 'react'
import Book from '/Users/rahulgupta/Desktop/React Course/newsapp/src/Components/Flip Flop.gif'
export class Loading extends Component {
  render() {
    return (
      <div className='text-center te'>
        <img src={Book} alt="loading"/>
      </div>
    )
  }
}

export default Loading
