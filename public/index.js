const url = 'http://localhost:8000/';
const method = 'POST';

/**
 * Fetch user inputs with asynchronous HTTP request
 * and send data back to server.
 * @async
 */
sendInputData = () => {
    document.querySelector('#submit').addEventListener('click', () => {
        let xhr = new XMLHttpRequest();
        let inputName = document.getElementById('input-name').value;
        let inputMessage = document.getElementById('input-message').value;
        let params = `name=${inputName}&message=${inputMessage}`;

        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded");
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                //console.log(JSON.parse(xhr.responseText));
                renderList(xhr);
            }
        };
        xhr.send(params);
    });
};

/**
 * Parse user inputs to JSON and return data in front-end.
 * @param request
 */
renderList = (request) => {
    let commentList = document.getElementById('comment-list');

    JSON.parse(request.responseText).forEach((response) => {
        let list = document.createElement('li');
        let nameWrapper = document.createElement('span');
        let messageWrapper = document.createElement('span');
        let name = document.createTextNode(response.name);
        let message = document.createTextNode(response.message);

        nameWrapper.className = 'name-wrapper';
        messageWrapper.className = 'message-wrapper';

        nameWrapper.appendChild(name);
        messageWrapper.appendChild(message);
        list.appendChild(nameWrapper);
        list.appendChild(messageWrapper);
        commentList.appendChild(list);
    });
};

sendInputData();