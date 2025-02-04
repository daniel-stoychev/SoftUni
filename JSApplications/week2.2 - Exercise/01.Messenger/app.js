const baseUrl = 'http://localhost:3030/jsonstore/messenger';

const textAreaEl = document.getElementById('messages');
const sendBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

sendBtn.addEventListener('click', sendEvents);
refreshBtn.addEventListener('click', refreshEvent);

function sendEvents(e) {
    e.preventDefault();
    const nameElValue = document.querySelector('input[name="author"]').value;
    const messageElValue = document.querySelector('input[name="content"]').value;


    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
            author: nameElValue,
            content: messageElValue
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then(res => res.json())
        .then((data) => {
            console.log(data);

        })
        .catch((err) => alert(err.message));
    document.querySelector('input[name="author"]').value = '';
    document.querySelector('input[name="content"]').value = '';
}

function refreshEvent() {
    fetch(baseUrl)
        .then(res => res.json())
        .then((data) => {
            let resultArr = [];
            Object.values(data).forEach((result) => {
                resultArr.push(`${result.author}: ${result.content}`)
            });
            textAreaEl.value = resultArr.join('\n')

        })
}