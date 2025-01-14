function attachEvents() {

    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const loadPostsBtn = document.querySelector('#btnLoadPosts');
    const postsList = document.querySelector('#posts');
    const viewPostBtn = document.querySelector('#btnViewPost');

    const postTitle = document.querySelector('#post-title');
    const postBody = document.querySelector('#post-body');
    const postComments = document.querySelector('#post-comments');


    loadPostsBtn.addEventListener("click", () => {

        fetch(postsUrl)
            .then((response) => response.json())
            .then((results) => {
                // console.log(results);
                // console.log('======');
                // console.log(Object.entries(results));

                for (const [key, value] of Object.entries(results)) {
                    // console.log(key);
                    const postOption = document.createElement('option');
                    postOption.value = key;
                    postsList.appendChild(postOption);
                    for (const key1 in value) {
                        // console.log(`${key1}: `);
                        if (key1 === "title") {
                            postOption.textContent = value[key1];
                        }
                    }
                }

                viewPostBtn.addEventListener("click", () => {
                    postComments.replaceChildren();
                    const selectedOptionID = postsList.value;
                    const selectedPost = results[selectedOptionID];
                    postTitle.textContent = selectedPost.title;
                    postBody.textContent = selectedPost.body;

                    fetch(commentsUrl)
                        .then((response) => response.json())
                        .then((results) => {
                            // console.log(results);
                            // console.log(Object.entries(results));

                            for (const [key, value] of Object.entries(results)) {
                                // console.log(value);
                                // console.log(value.postId);
                                if (selectedOptionID === value.postId) {
                                    const postCommentEl = document.createElement('li');
                                    postComments.appendChild(postCommentEl);
                                    postCommentEl.textContent = value.text;

                                }
                            }

                        });

                });




            });
    });




}

attachEvents();