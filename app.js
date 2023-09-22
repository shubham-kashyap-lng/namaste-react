import React from 'react';
import  ReactDOM  from 'react-dom/client';


// <div class="parent">
//     <div class="child">
//         <h1></h1>
//     </div>
// </div>

const headingNested = React.createElement('div', {}, 
                        React.createElement('div', {}, 
                            React.createElement('h1', {}, 'Im a H1 tag')
                        )
                    )

// <div class="parent">
//     <div class="child">
//         <h1>Im a H1 tag</h1>
//         <h2>Im a H2 tag</h2>
//     </div>
// </div>

const headingNestedSibling = React.createElement('div', {}, 
                        React.createElement('div', {}, 
                            [React.createElement('h1', {}, 'Im a H1 tag'),React.createElement('h2', {}, 'Im a H2 tag')]
                        )
                    )

const heading = React.createElement('h1', {}, 'Hello World from React...!!!')

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(headingNestedSibling);