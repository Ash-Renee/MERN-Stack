import React from 'react';
const PersonCard = props => {
    return (
        <div>
        <h1>{props.lastName} , {props.firstName}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
    </div>



    )
}

// class PersonCard extends Component{
//     render(){
//         const {firstName, lastName, age, hairColor} = this.props;
//         return(

//         )
//     }
// }
export default PersonCard;