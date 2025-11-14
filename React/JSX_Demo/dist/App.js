import React from "https://esm.sh/react@19.2.0";

// const h1ReactElement = React.createElement('h1', null, 'My first ReactApp');
// const h2ReactElement = React.createElement('h2', null, 'The best framework ever!');

// const AppJSX = React.createElement('div', { calssName: 'app-container' }, null, h1ReactElement, h2ReactElement)

var AppJSX = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "My first JSX App!"
    ),
    React.createElement(
        "h2",
        null,
        "The best framework ever!"
    )
);

export default AppJSX;