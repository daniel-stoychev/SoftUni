import './init.js';

import eventEmitter from "./messageBroker.js"

function createUser(name) {
    // TODO create user in DB
    console.log(`Creating user ${name}...`);

    //Emit event

    eventEmitter.emit('user.created', name);
}

createUser('Pesho');
createUser('Gosho');
