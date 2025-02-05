const postURL = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const commentURL = 'http://localhost:3030/jsonstore/collections/myboard/comment';
const initialForm = document.querySelector('main form');
const mainEl = document.querySelector('main');
const topicContainer = document.createElement('div');
topicContainer.classList.add('topic-container');

loadAllTopics();
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
                loadAllTopics();
            })
    }
});

function loadAllTopics() {
    fetch(postURL)
        .then(res => res.json())
        .then(data => {
            const posts = Object.values(data);
            // console.log(posts);
            topicContainer.innerHTML = '';

            posts.forEach(post => {
                // console.log(post);
                listCreatedTopics(post.title, post.date, post.username, post._id);
            })

        })
}

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

function listCreatedTopics(title, date, username, id) {
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
    topicHeading.id = id;

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

    mainEl.appendChild(topicContainer);

    topicWrapper.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`Clicked on: ${id}`);
        changeTopicLayout(id);
    });
}

function changeTopicLayout(id) {
    mainEl.innerHTML = '';

    fetch(postURL)
        .then(res => res.json())
        .then(data => {
            const values = Object.values(data);
            // console.log(values);
            for (const value of values) {
                console.log(value._id);

                if (value._id === id) {
                    console.log(value.title);

                    secondPageGeneration(value.title, value.username, value.postText, value.date);

                    break;
                }

            }
            // console.log(data);


        })

}

function secondPageGeneration(title, username, postText, date) {
    //PROFILE>>>>>>>>>>>>
    const topicContainerDiv = document.createElement('div');
    topicContainerDiv.classList.add('topic-container');

    // Create topic wrapper
    const topicDiv = document.createElement('div');
    topicDiv.classList.add('topic-name');

    // Create link
    const topicLink = document.createElement('a');
    topicLink.href = "#";
    topicLink.classList.add('normal');

    // Create heading
    const topicHeading = document.createElement('h2');
    topicHeading.textContent = title;

    // Append heading to link, and link to topic div
    topicLink.appendChild(topicHeading);
    topicDiv.appendChild(topicLink);

    // Create comment section
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    // Create header
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    // Create image
    const avatarImg = document.createElement('img');
    avatarImg.src = "./static/profile.png";
    avatarImg.alt = "avatar";

    // Create user info paragraph
    const userInfoP = document.createElement('p');
    userInfoP.innerHTML = `<span>${username}</span> posted on <time>${date}</time>`;

    // Create post content paragraph
    const postContentP = document.createElement('p');
    postContentP.classList.add('post-content');
    postContentP.textContent = postText;

    topicContainerDiv.appendChild(topicDiv);
    topicContainerDiv.appendChild(commentDiv);


    // LOAD COMMENTS IF ANY
    loadComments(commentDiv);


    //COMMENTFORM>>>>>>>>>>>>
    const answerCommentDiv = document.createElement('div');
    answerCommentDiv.classList.add('answer-comment');

    // Create paragraph for user comment
    const userCommentP = document.createElement('p');
    userCommentP.innerHTML = `<span>currentUser</span> comment:`;

    // Create answer div
    const answerDiv = document.createElement('div');
    answerDiv.classList.add('answer');

    // Create form
    const form = document.createElement('form');

    // Create textarea
    const textarea = document.createElement('textarea');
    textarea.name = "postText";
    textarea.id = "comment";
    textarea.cols = 30;
    textarea.rows = 10;

    // Create div for username input
    const usernameDiv = document.createElement('div');

    // Create label for username
    const usernameLabel = document.createElement('label');
    usernameLabel.htmlFor = "username";
    usernameLabel.innerHTML = `Username <span class="red">*</span>`;

    // Create input for username
    const usernameInput = document.createElement('input');
    usernameInput.type = "text";
    usernameInput.name = "username";
    usernameInput.id = "username";

    // Create button
    const postButton = document.createElement('button');
    postButton.textContent = "Post";

    // Append elements together
    usernameDiv.appendChild(usernameLabel);
    usernameDiv.appendChild(usernameInput);

    form.appendChild(textarea);
    form.appendChild(usernameDiv);
    form.appendChild(postButton);

    answerDiv.appendChild(form);

    answerCommentDiv.appendChild(userCommentP);
    answerCommentDiv.appendChild(answerDiv);

    topicContainerDiv.appendChild(answerCommentDiv);

    // Append elements together
    headerDiv.appendChild(avatarImg);
    headerDiv.appendChild(userInfoP);
    headerDiv.appendChild(postContentP);
    commentDiv.appendChild(headerDiv);

    // Combine everything into a fragment
    const fragment = document.createDocumentFragment();
    fragment.appendChild(topicContainerDiv);
    mainEl.appendChild(fragment);

    const commentFormEl = answerDiv.querySelector('form');
    commentFormEl.addEventListener('submit', commentForm);

    function commentForm(e) {
        e.preventDefault();
        console.log('TEST');

        const formData = new FormData(commentFormEl);
        const textField = formData.get('postText');
        const usernameField = formData.get('username');

        if (!textField.trim() || !usernameField.trim()) {
            alert('Please fill up all fields.')
            throw new Error("All fields must be filled up!");
        } else {
            addComment(textField, usernameField, commentDiv);
        }

    }


}

function addComment(postText, username, commentDiv) {
    fetch(commentURL, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            username,
            postText,
            date: new Date()
        })
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const userCommentDiv = document.createElement("div");
            userCommentDiv.id = "user-comment";

            // Create the topic wrapper
            const topicWrapperDiv = document.createElement("div");
            topicWrapperDiv.classList.add("topic-name-wrapper");

            // Create the topic name div
            const topicNameDiv = document.createElement("div");
            topicNameDiv.classList.add("topic-name");

            // Create the paragraph for username and date
            const userInfoP = document.createElement("p");
            userInfoP.innerHTML = `<strong>${data.username}</strong> commented on <time>${data.date}</time>`;

            // Create the post content div
            const postContentDiv = document.createElement("div");
            postContentDiv.classList.add("post-content");

            // Create the paragraph for the comment text
            const postTextP = document.createElement("p");
            postTextP.textContent = data.postText;

            // Append elements
            postContentDiv.appendChild(postTextP);
            topicNameDiv.appendChild(userInfoP);
            topicNameDiv.appendChild(postContentDiv);
            topicWrapperDiv.appendChild(topicNameDiv);
            userCommentDiv.appendChild(topicWrapperDiv);
            commentDiv.appendChild(userCommentDiv);
        })
}

function loadComments(commentDiv) {
    fetch(commentURL)
        .then(res => res.json())
        .then(data => {

            const commentsData = Object.values(data);
            if (commentsData.length > 0) {
                commentsData.forEach(comment => {
                    console.log(comment);
                    const username = comment.username;
                    const postText = comment.postText;
                    const date = comment.date;
                    const userCommentDiv = document.createElement("div");
                    userCommentDiv.id = "user-comment";

                    // Create the topic wrapper
                    const topicWrapperDiv = document.createElement("div");
                    topicWrapperDiv.classList.add("topic-name-wrapper");

                    // Create the topic name div
                    const topicNameDiv = document.createElement("div");
                    topicNameDiv.classList.add("topic-name");

                    // Create the paragraph for username and date
                    const userInfoP = document.createElement("p");
                    userInfoP.innerHTML = `<strong>${username}</strong> commented on <time>${date}</time>`;

                    // Create the post content div
                    const postContentDiv = document.createElement("div");
                    postContentDiv.classList.add("post-content");

                    // Create the paragraph for the comment text
                    const postTextP = document.createElement("p");
                    postTextP.textContent = postText;

                    // Append elements
                    postContentDiv.appendChild(postTextP);
                    topicNameDiv.appendChild(userInfoP);
                    topicNameDiv.appendChild(postContentDiv);
                    topicWrapperDiv.appendChild(topicNameDiv);
                    userCommentDiv.appendChild(topicWrapperDiv);
                    commentDiv.appendChild(userCommentDiv);
                })
            }
        })
}

// only thing to do -> sort the topics and their owning comments





