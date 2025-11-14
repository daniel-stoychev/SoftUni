import React from "https://esm.sh/react@19.2.0";

var h1ReactElement = React.createElement('h1', null, 'My first ReactApp');
var h2ReactElement = React.createElement('h2', null, 'The best framework ever!');

var App = React.createElement('div', { calssName: 'app-container' }, null, h1ReactElement, h2ReactElement);

export default App;