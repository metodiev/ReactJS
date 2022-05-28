import React from "react";

// function Greet() {
//    return <h1>Hello There</h1>
// }

// ES6 component
//you have to export the component with the same name if 
//you export it on the same line. import should be done 
//by curly braces {}
export const Greet = (props) =>
{
    console.log(props)
    return <h1>Hello There this an functional component {props.name} a.k.a {props.heroName}</h1>
}

//export default Greet