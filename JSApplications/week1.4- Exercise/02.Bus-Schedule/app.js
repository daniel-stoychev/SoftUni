function solve() {

    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');
    const busStopName = document.querySelector('.info');
    let stop = {
        next: 'depot'
    }

    function depart() {
        departButton.disabled = true;
        arriveButton.disabled = false;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                busStopName.textContent = `Next stop ${result.name}`;
                stop = result;
            })
            .catch(() => {
                busStopName.textContent = 'Error';
                departButton.disabled = true;
                arriveButton.disabled = true;
            });


    }

    function arrive() {
        arriveButton.disabled = true;
        departButton.disabled = false;
        busStopName.textContent = `Arriving at ${stop.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();