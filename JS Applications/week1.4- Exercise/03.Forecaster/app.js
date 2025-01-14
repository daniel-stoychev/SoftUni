function attachEvents() {
    const inputField = document.getElementById('location');
    const button = document.getElementById('submit');
    const locations = `http://localhost:3030/jsonstore/forecaster/locations`
    // const forecastFuture = ``

    const forecastSection = document.querySelector('#forecast');
    const currentForecastSection = document.querySelector('#current');
    const upcomingForecastSection = document.querySelector('#upcoming');

    button.addEventListener('click', function () {

        clearSectionContent(currentForecastSection);
        clearSectionContent(upcomingForecastSection);
        const inputValue = inputField.value;
        forecastSection.style.display = 'block';
        fetch(locations)
            .then((response) => response.json())
            .then((results) => {
                let locationCode = '';
                let forecastToday = '';
                let forecastUpcoming = '';
                for (const location of results) {
                    if (inputValue == location.name) {
                        locationCode = location.code;
                        break;
                    }

                }
                if (!locationCode) {
                    throw new Error('Location not found');
                }
                forecastToday = `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`;
                forecastUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`;


                fetch(forecastToday)
                    .then((response) => response.json())
                    .then((results) => {
                        // console.log(results);
                        const divforecasts = document.createElement("div");
                        divforecasts.className = "forecasts";
                        const spanSymbol = document.createElement("span");
                        spanSymbol.className = "condition symbol";

                        const spanData = document.createElement("span");
                        spanData.className = "condition";
                        const spanDataFirst = document.createElement("span");
                        spanDataFirst.className = "forecast-data";
                        const spanDataSecond = document.createElement("span");
                        spanDataSecond.className = "forecast-data";
                        const spanDataThird = document.createElement("span");
                        spanDataThird.className = "forecast-data";

                        currentForecastSection.appendChild(divforecasts);
                        divforecasts.appendChild(spanSymbol);
                        divforecasts.appendChild(spanData);
                        spanData.append(spanDataFirst, spanDataSecond, spanDataThird);

                        switch (results.forecast.condition) {
                            case "Sunny":
                                spanSymbol.textContent = '☀';
                                break;
                            case "Partly sunny":
                                spanSymbol.textContent = '⛅';
                                break;
                            case "Overcast":
                                spanSymbol.textContent = '☁';
                                break;
                            case "Rain":
                                spanSymbol.textContent = '☂';
                                break;
                        }

                        spanDataFirst.textContent = results.name;
                        spanDataSecond.textContent = `${results.forecast.low}°/${results.forecast.high}°`;
                        spanDataThird.textContent = results.forecast.condition;

                        // divforecasts.innerHTML = '';
                    })

                fetch(forecastUpcoming)
                    .then((response) => response.json())
                    .then((results) => {
                        const forecastInfoDiv = document.createElement("dev");
                        forecastInfoDiv.className = "forecast-info";
                        upcomingForecastSection.appendChild(forecastInfoDiv);
                        console.log('====');
                        console.log(results);

                        for (let i = 0; i < results.forecast.length; i++) {
                            const upcomingSpan = document.createElement("span");
                            upcomingSpan.className = "upcoming";
                            forecastInfoDiv.appendChild(upcomingSpan);

                            const spanSymbol = document.createElement("span");
                            spanSymbol.className = "symbol";

                            switch (results.forecast[i].condition) {
                                case "Sunny":
                                    spanSymbol.textContent = '☀';
                                    break;
                                case "Partly sunny":
                                    spanSymbol.textContent = '⛅';
                                    break;
                                case "Overcast":
                                    spanSymbol.textContent = '☁';
                                    break;
                                case "Rain":
                                    spanSymbol.textContent = '☂';
                                    break;
                            }

                            const spanDataFirst = document.createElement("span");
                            spanDataFirst.className = "forecast-data";
                            spanDataFirst.textContent = `${results.forecast[i].low}°/${results.forecast[i].high}°`;
                            const spanDataSecond = document.createElement("span");
                            spanDataSecond.className = "forecast-data";
                            spanDataSecond.textContent = results.forecast[i].condition;

                            upcomingSpan.append(spanSymbol, spanDataFirst, spanDataSecond);

                        }

                    })


                // Three-day forecast ==========


                // console.log('=========');
                // console.log(forecastToday);
                // console.log(locationCode);
                // console.log(results);

            })
            .catch((error) => {
                const divforecasts = document.createElement("div");
                divforecasts.className = "forecasts";
                currentForecastSection.appendChild(divforecasts);
                divforecasts.textContent = "Error";
                divforecasts.style.color = "red";
                console.error('Error fetching locations or processing data:', error.message);
            });

    });

    function clearSectionContent(section) {
        while (section.children.length > 1) {
            section.removeChild(section.lastChild);
        }
    }

}

attachEvents();