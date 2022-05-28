import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello There- JSX version</h1>
    //     </div>
    // )

    //return React.createElement('div', null, '<h1>React Create element</h1>')
   // return React.createElement('div', null,'h1', 'React Create element')
//    null is key value pairs = can give to 
//    html element id following by id name 
//    id="value"
//class atrribute should be ClassName
   return React.createElement('div', null,React.createElement('h1', null, 'react element'))
   return React.createElement('div',
    {id: 'hello', class: "someCLassName"},
    React.createElement('h1', null, 'react element'))
}

export default Hello