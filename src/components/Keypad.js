// Code Keypad Component Here
import { VirtualConsole } from 'jsdom'
import React, {Component} from 'react'


class Keypad extends React.Component {

  enterPassword =() => console.log('Entering password...')

  render(){
    return (
      <input  onKeyUp = {this.enterPassword}  type="password" />
    )
  }
}

export default Keypad