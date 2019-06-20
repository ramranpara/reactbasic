import React from 'react'

//function Greet() {
//    return <h1>Hello Ram Ranpara</h1>
//}
 
const Greet2 = (props) => {

    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} and {heroName}</h1>
        </div>
    )
    
}
export default Greet2