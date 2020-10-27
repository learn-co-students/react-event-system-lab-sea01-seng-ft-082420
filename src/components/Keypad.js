// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends React.Component{
// constructor() {
//     super()
//     this.state= {value: ''}
// }

handleChange() {
    return console.log('Entering password...')
}

    render () {
        return (

        <input type="password"  onKeyUp={this.handleChange}/>

        );
        }
}

{/* <form>
<label>
    password:
<input type="password"  onKeyUp={console.log('Entering password...')}/>
</label>
</form> */}