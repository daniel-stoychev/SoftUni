function solution() {
    const mainEl = document.getElementById('main');
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;



    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            // console.log(results);
            const id = '';

            for (const element of results) {
                // console.log(element);
                let content = '';
                const urlContent = `http://localhost:3030/jsonstore/advanced/articles/details/${element._id}`;
                fetch(urlContent)
                    .then((contentResponse) => contentResponse.json())
                    .then((contentResults) => {
                        // content = contentResults.content;
                        // console.log(content);
                        // Create the accordion element
                        const accordion = document.createElement('div');
                        accordion.className = 'accordion';

                        accordion.innerHTML = `
                            <div class="head">
                                <span>${element.title}</span>
                                <button class="button" id="${element._id}">More</button>
                            </div>
                            <div class="extra" style="display: none;">
                                <p>${contentResults.content}</p>
                            </div>
                        `;

                        // Append the accordion to the main element
                        mainEl.appendChild(accordion);

                        // Attach the event listener to the button
                        const button = accordion.querySelector('.button');
                        const extraEl = accordion.querySelector('.extra');
                        button.addEventListener("click", () => {
                            if (extraEl.style.display === 'none') {
                                extraEl.style.display = 'block';
                                button.textContent = "Less";
                            } else {
                                extraEl.style.display = 'none';
                                button.textContent = "More";
                            }
                        });
                    });
            }
        })
        .catch((err) => err);







}



window.addEventListener('load', solution);