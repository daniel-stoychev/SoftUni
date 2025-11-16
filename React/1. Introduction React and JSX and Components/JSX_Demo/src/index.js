import ReactDOM from "https://esm.sh/react-dom@19.2.0/client"

import App from "./App.js";

const rootDomElement = document.getElementById('root');
const rootReactElement = ReactDOM.createRoot(rootDomElement);

rootReactElement.render(App);



