function lockedProfile() {
    const profilesURL = `http://localhost:3030/jsonstore/advanced/profiles`;

    const mainEl = document.querySelector('#main');
    const removeInitialDiv = document.querySelector('.profile');
    removeInitialDiv.style.display = 'none';

    fetch(profilesURL)
        .then((response) => response.json())
        .then((results) => {
            console.log(results);
            for (const key in results) {

                const profileDiv = document.createElement('div');
                profileDiv.className = "profile";
                mainEl.appendChild(profileDiv);
                // appendChild 
                const profileImgEl = document.createElement('img');
                profileImgEl.className = "userIcon";
                profileImgEl.src = "./iconProfile2.png";

                const lockEl = document.createElement('label');
                lockEl.textContent = "Lock";
                const inputElOne = document.createElement('input');
                inputElOne.type = "radio";
                inputElOne.name = "user1Locked";
                inputElOne.value = "lock";
                inputElOne.checked = true;

                const unlockEl = document.createElement('label');
                unlockEl.textContent = "Unlock";
                const inputElTwo = document.createElement('input');
                inputElTwo.type = "radio";
                inputElTwo.name = "user1Locked";
                inputElTwo.value = "unlock";

                const brEl = document.createElement('br');
                const hrEl = document.createElement('hr');

                const usernameEl = document.createElement('label');
                usernameEl.textContent = "Username";
                const inputElThree = document.createElement('input');
                inputElThree.type = "text";
                inputElThree.name = "user1Username";
                inputElThree.value = "";
                inputElThree.disabled = true;
                inputElThree.readOnly = true;

                const userDataEl = document.createElement('div');
                userDataEl.className = "user1Username";

                const secondHrEl = document.createElement('hr');

                const emailEl = document.createElement('label');
                emailEl.textContent = "Email:";
                const inputElFour = document.createElement('input');
                inputElFour.type = "email";
                inputElFour.name = "user1Email";
                inputElFour.value = "";
                inputElFour.disabled = true;
                inputElFour.readOnly = true;

                const ageEl = document.createElement('label');
                ageEl.textContent = "Age:";
                const inputElFive = document.createElement('input');
                inputElFive.type = "number";
                inputElFive.name = "user1Age";
                inputElFive.value = "";
                inputElFive.disabled = true;
                inputElFive.readOnly = true;

                userDataEl.append(secondHrEl, emailEl, inputElFour, ageEl, inputElFive)

                userDataEl.style.display = 'none';

                let buttonEl = document.createElement('button');
                buttonEl.textContent = "Show more";

                profileDiv.append(profileImgEl, lockEl, inputElOne, unlockEl, inputElTwo, brEl, hrEl, usernameEl, inputElThree, userDataEl, buttonEl);

                for (const element in results[key]) {
                    console.log(`${element} --- ${results[key][element]}`);
                    if (element === "username") {
                        const username = results[key][element];
                        inputElThree.value = username;
                    };
                    if (element === "age") {
                        const age = results[key][element];
                        inputElFive.value = age;
                    };
                    if (element === "email") {
                        const email = results[key][element];
                        inputElFour.value = email;
                    };
                }

                buttonEl.addEventListener('click', () => {
                    if (inputElTwo.checked) {
                        if (userDataEl.style.display === 'none') {
                            userDataEl.style.display = 'block';
                            buttonEl.textContent = "Hide it";
                        } else {
                            userDataEl.style.display = 'none';
                            buttonEl.textContent = "Show more";
                        }
                    }
                });

            }




        });
}