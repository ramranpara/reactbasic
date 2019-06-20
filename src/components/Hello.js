import React from 'react'

const Hello = () => {
//    return (
  //      <div>
    //        <h1>Hello ram ranpara from hello</h1>
      //  </div>
    // )
    return React.createElement(
        'div',
         {id: 'Hello', className: 'dummyclass' },
         React.createElement('h1', null, 'ramranpara from element' )
         )

}

export default Hello