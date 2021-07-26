// your Bomb code here!

import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }    
    // constructor(props) { //props that the component gets from its parent
    //     super()
    //     this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
    //       someKey: props.someValue
    //     }
    //   }
    render() {
        const gameOver = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

        return (
            <div>{gameOver}</div>
          )
        }        
    }

