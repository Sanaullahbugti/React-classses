import React, { Component } from "react";
import Button from "./ChildComponentButton";
var a = 2;
class SecondLecture extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            list: [
                {
                    name: "Raheem bux khan",
                    age: 25,
                },
            ]
            ,
            name: "",
            fname: ""
        }

    }
    handleChange = ( e ) => {
        this.setState( {
            [e.target.name]: e.target.value
        } )
    }

    render() {
        const onIncreament = () => {
            this.setState( {
                list: [{
                    name: this.state.list[0].name,
                    age: this.state.list[0].age += 1
                }
                ]
            } )
        }
        return (
            <div>
                <p>{this.state.name}</p>
                <ol> {this.state.list.map( rec =>
                    <>
                        <li>{rec.age}</li>
                        <li>{rec.name}</li>
                    </>
                )}
                </ol>
                <input type="text" name="name" value={this.state.name} onChange={( e ) => this.handleChange( e )} />
                <input type="text" name="fname" value={this.state.fname} onChange={( e ) => this.handleChange( e )} />

                <Button onIncreament={onIncreament} />
            </div>
        )
    }
}
export default SecondLecture