
import eventEmitter from "./messageBroker.js";

function onUerCreated(name) {
    console.log(`User ${name} has been created!`);

}

eventEmitter.on('user.created', onUerCreated)