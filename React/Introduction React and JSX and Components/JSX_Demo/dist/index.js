import ReactDOM from "https://esm.sh/react-dom@19.2.0/client";

import App from "./App.js";

var rootDomElement = document.getElementById('root');
var rootReactElement = ReactDOM.createRoot(rootDomElement);

rootReactElement.render(App);