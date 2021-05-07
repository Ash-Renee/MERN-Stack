import React, { Component } from 'react';

class BirthdayButton extends Component {
    constructor(props){
        super(props); //class based componets 'props' is the prperty, can be whatever, it's a variable/object
        this.state = {
            clickAge: this.props.age,
            resetAge: this.props.age,
        }
        console.log(props);
    }


    BirthdayClick = () => {
        this.setState({ clickAge: this.state.clickAge +1})
        console.log(this.state.clickAge);
    }
    
    ResetClick = () => {
        this.setState({clickAge: this.state.resetAge = age})
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.clickAge}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.BirthdayClick}>Birthday button for {firstName} {lastName}</button>
                <br />
                <button onClick={this.ResetClick}>Reset Me!</button>
            </div>
        )
    }
}
export default BirthdayButton;