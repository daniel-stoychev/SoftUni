function getInfo() {

    const inputValue = document.querySelector('#stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${inputValue}`;
    const stopNameEl = document.querySelector('#stopName');
    const busesUlEl = document.querySelector('#buses');

    stopNameEl.textContent = '';
    busesUlEl.replaceChildren();

    // if (!inputValue) {
    //     stopNameEl.textContent = 'Error: Please enter a bus line.';
    //     return;
    // }
    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            console.log(results.buses);
            for (const key in results.buses) {
                const busesLiEl = document.createElement('li');
                busesUlEl.appendChild(busesLiEl);
                const busId = key;
                const time = results.buses[key];
                busesLiEl.textContent = `Bus ${busId} arrives in ${time} minutes`;
            }
            stopNameEl.textContent = results.name;
        })
        .catch(() => stopNameEl.textContent = 'Error');


}