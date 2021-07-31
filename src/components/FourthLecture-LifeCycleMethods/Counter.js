import React, { Component } from "react";

class Counter extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            counterValue: 0,
            faltu: 0

        }
        console.log( "Constructor called" )
        console.log( "..................." )
    }
    handleIncreament = () => {
        this.setState( {
            faltu: this.state.faltu + 1
        } )
    }
    handleDecreament = () => {
        this.setState( {
            counterValue: this.state.counterValue - 1
        } )
    }
    componentWillMount = () => {
        console.log( "Component will mount" )
    }
    componentDidMount = () => {
        console.log( "Component Did mount" )
        console.log( "......." )
    }
    componentWillUpdate( nextProps, props ) {

        if ( props.counterValue == 2 ) {

            return false
        } else {
            console.log( "api call " )

        }
        console.log( "", nextProps, props )
        console.log( "compoenent will update" )
    }
    componentWillUnmount = () => {
        console.log( " will Unmount" )
    }
    shouldComponentUpdate = ( nextProps, props, snapShot ) => {
        if ( nextProps.checkingProp !== props.counterValue ) {
            console.log( "shouldComponentUpdate", nextProps, props, snapShot )
            return true
        }
        return false

    }

    render() {
        console.log( "render" )
        return <div>
            <button onClick={this.handleIncreament}>
                Increament
            </button>
            <button onClick={this.handleDecreament}>
                Decreament
            </button>
            <h2>{this.state.counterValue}</h2>
        </div>

    }
}
export default Counter