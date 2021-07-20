import axios from "axios";
import React, { Component } from "react";

class FetchData extends Component {
    state = {
        totalReactPackages: 0
    }
    componentDidMount = () => {
        fetch( 'https://api.npms.io/v2/search?q=react' )
            .then( response => response.json() )
            .then( data => {
                console.log( "data=>", data )
                this.setState( { totalReactPackages: data.total } )
            } );
        axios.get( 'https://api.npms.io/v2/search?q=react')
            .then( function ( response ) {
                console.log( "axios=>",response );
            } )
    }
    render() {
        const {totalReactPackages} =this.state
        return <p>{totalReactPackages}</p>
    }
}
export default FetchData