const postURL = 'http://localhost:3030/jsonstore/collections/myboard/posts';

const initialForm = document.querySelector('main form');
const mainEl = document.querySelector('main');
const topicContainer = document.createElement('div');
topicContainer.classList.add('topic-container');

initialForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formFiends = new FormData(initialForm);
    console.log(formFiends.get('topicName'));
    const title = formFiends.get('topicName');
    const username = formFiends.get('username');
    const postText = formFiends.get('postText');
    const postBtn = initialForm.querySelector('.public');
    const cancelBtn = initialForm.querySelector('.cancel');

    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        initialForm.reset();
    });

    if (!title.trim() || !username.trim() && !postText.trim()) {
        alert('Please fill all fields');
        throw new Error("One or more field are missing");
    } else {
        fetch(postURL, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                title,
                username,
                postText,
                date: new Date()
            })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                initialForm.reset();
                addCreatedTopics(data.title, data.date, data.username);
            })
    }
});

function loadAllTopics() {
    fetch(postURL)
        .then(res => res.json())
        .then(data => {
            const posts = Object.values(data);
            console.log(posts);

            posts.forEach(post => {
                console.log(post);
                listCreatedTopics(post.title, post.date, post.username);
            })

        })
}

loadAllTopics();

function addCreatedTopics(title, date, username) {
    // Create the topic-name-wrapper
    const topicWrapper = document.createElement('div');
    topicWrapper.classList.add('topic-name-wrapper');

    // Create the topic-name div
    const topicNameDiv = document.createElement('div');
    topicNameDiv.classList.add('topic-name');

    // Create the link with the title
    const topicLink = document.createElement('a');
    topicLink.href = "#";
    topicLink.classList.add('normal');

    const topicHeading = document.createElement('h2');
    topicHeading.textContent = title;

    topicLink.appendChild(topicHeading);
    topicNameDiv.appendChild(topicLink);

    // Create the columns div
    const columnsDiv = document.createElement('div');
    columnsDiv.classList.add('columns');

    const contentDiv = document.createElement('div');

    // Create date paragraph
    const dateParagraph = document.createElement('p');
    dateParagraph.innerHTML = `Date: <time>${date}</time>`;

    // Create the nickname div
    const nicknameDiv = document.createElement('div');
    nicknameDiv.classList.add('nick-name');

    const usernameParagraph = document.createElement('p');
    usernameParagraph.innerHTML = `Username: <span>${username}</span>`;

    nicknameDiv.appendChild(usernameParagraph);
    contentDiv.appendChild(dateParagraph);
    contentDiv.appendChild(nicknameDiv);
    columnsDiv.appendChild(contentDiv);

    // Append everything together
    topicNameDiv.appendChild(columnsDiv);
    topicWrapper.appendChild(topicNameDiv);
    topicContainer.appendChild(topicWrapper);
}

function listCreatedTopics(title, date, username) {
    // Create the topic-name-wrapper
    const topicWrapper = document.createElement('div');
    topicWrapper.classList.add('topic-name-wrapper');

    // Create the topic-name div
    const topicNameDiv = document.createElement('div');
    topicNameDiv.classList.add('topic-name');

    // Create the link with the title
    const topicLink = document.createElement('a');
    topicLink.href = "#";
    topicLink.classList.add('normal');

    const topicHeading = document.createElement('h2');
    topicHeading.textContent = title;

    topicLink.appendChild(topicHeading);
    topicNameDiv.appendChild(topicLink);

    // Create the columns div
    const columnsDiv = document.createElement('div');
    columnsDiv.classList.add('columns');

    const contentDiv = document.createElement('div');

    // Create date paragraph
    const dateParagraph = document.createElement('p');
    dateParagraph.innerHTML = `Date: <time>${date}</time>`;

    // Create the nickname div
    const nicknameDiv = document.createElement('div');
    nicknameDiv.classList.add('nick-name');

    const usernameParagraph = document.createElement('p');
    usernameParagraph.innerHTML = `Username: <span>${username}</span>`;

    nicknameDiv.appendChild(usernameParagraph);
    contentDiv.appendChild(dateParagraph);
    contentDiv.appendChild(nicknameDiv);
    columnsDiv.appendChild(contentDiv);

    // Append everything together
    topicNameDiv.appendChild(columnsDiv);
    topicWrapper.appendChild(topicNameDiv);
    topicContainer.appendChild(topicWrapper);

    topicWrapper.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`Clicked on: ${title}`);
        // CONTINUE HERE
    });

    mainEl.appendChild(topicContainer);
}